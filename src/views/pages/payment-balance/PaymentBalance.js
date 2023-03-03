import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch
} from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { countries } from 'types/country-types';
import axios from 'axios';
import { useState } from 'react';
import { paymentBalanceSchema } from 'schemas/paymentBalanceSchema';

const PaymentBalance = () => {
    const [organizations, setOrganizations] = useState([]);
    const handleSelectCountry = () => {
        axios.get('https://reqres.in/api/users').then((response) => {
            const { data } = response;
            setOrganizations([...data.data]);
        });
    };

    return (
        <MainCard>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Formik
                        initialValues={{
                            includeData: false,
                            sdmx: '',
                            country: '',
                            organization: '',
                            currenzy: '',
                            unit: '',
                            baseYear: '',
                            startYear: '',
                            endYear: ''
                        }}
                        validationSchema={paymentBalanceSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ values, errors, handleChange }) => (
                            <Form>
                                {/* Include Data */}
                                <FormControl fullWidth>
                                    <FormLabel component="legend">Incluir datos</FormLabel>
                                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                                        <FormControlLabel
                                            control={<Switch name="includeData" value={values.includeData} onChange={handleChange} />}
                                            label="Incluir datos"
                                        />
                                    </FormGroup>
                                </FormControl>

                                {/* Table SDMX */}
                                <FormControl fullWidth sx={{ mt: 2 }} error={errors.sdmx ? true : false}>
                                    <InputLabel id="table-sdmx-label">Tabla SDMX</InputLabel>
                                    <Select
                                        labelId="table-sdmx-label"
                                        id="table-sdmx-select"
                                        label="Tabla SDMX"
                                        name="sdmx"
                                        value={values.sdmx}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <ErrorMessage name="sdmx">{errors.sdmx}</ErrorMessage>
                                </FormControl>

                                {/* Country */}
                                <FormControl fullWidth sx={{ mt: 2 }} error={errors.country ? true : false}>
                                    <InputLabel id="country-label">Pais</InputLabel>
                                    <Select
                                        labelId="country-label"
                                        id="country-select"
                                        label="Pais"
                                        name="country"
                                        value={values.country}
                                        onChange={handleChange}
                                    >
                                        {countries.map((element) => (
                                            <MenuItem value={element.name} key={element.name} onClick={handleSelectCountry}>
                                                {element.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* Organization */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="orginization-label">Organizacion</InputLabel>
                                    <Select
                                        labelId="orginization-label"
                                        id="orginization-select"
                                        label="Organizacion"
                                        name="organization"
                                        value={values.organization}
                                        onChange={handleChange}
                                    >
                                        {organizations.map((element) => (
                                            <MenuItem value={element.first_name} key={element.id}>
                                                {element.first_name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                {/* Currenzy */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="currency-label">Moneda</InputLabel>
                                    <Select
                                        labelId="currency-label"
                                        id="currency-select"
                                        label="Moneda"
                                        name="currenzy"
                                        value={values.currenzy}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Unit */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="units-label">Unidades</InputLabel>
                                    <Select
                                        labelId="units-label"
                                        id="units-select"
                                        label="Unidades"
                                        name="unit"
                                        value={values.unit}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Base year */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="base-year-label">Año base</InputLabel>
                                    <Select
                                        labelId="base-year-label"
                                        id="base-year-select"
                                        label="Año base"
                                        name="baseYear"
                                        value={values.baseYear}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* Start year */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="start-year-label">Año de inicio</InputLabel>
                                    <Select
                                        labelId="start-year-label"
                                        id="start-year-select"
                                        label="Año de inicio"
                                        name="startYear"
                                        value={values.startYear}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* End year */}
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id="end-year-label">Año de fin</InputLabel>
                                    <Select
                                        labelId="end-year-label"
                                        id="end-year-select"
                                        label="Años de fin"
                                        name="endYear"
                                        value={values.endYear}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button sx={{ mt: 1 }} variant="contained" type="submit">
                                    Descargar
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default PaymentBalance;
