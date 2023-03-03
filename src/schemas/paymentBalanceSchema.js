import { object, string } from 'yup';

export const paymentBalanceSchema = object().shape({
    sdmx: string().required('Campo obligatorio'),
    country: string().max(4).required('Campo obligatorio'),
    organization: string().required('Campo obligatorio'),
    currenzy: string().required('Campo obligatorio'),
    unit: string().required('Campo obligatorio'),
    baseYear: string().required('Campo obligatorio'),
    startYear: string().required('Campo obligatorio'),
    endYear: string().required('Campo obligatorio')
});
