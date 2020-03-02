import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!')
});