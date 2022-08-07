import * as yup from 'yup';
import { phoneRegExp } from './RegExp/RegExp';

export const contactValidationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string('Enter your phone number')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Number is required'),
});
