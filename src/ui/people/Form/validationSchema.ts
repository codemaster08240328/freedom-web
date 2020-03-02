import * as yup from 'yup';
import {
  mobileNumberRegex,
  idNumberRegex,
  cardNumberRegex,
  bankAccountNumberRegex,
  branchCodeRegex
} from '../../../constants/regex';
import { bankNames } from '../../../constants/bankNames';

const validationSchema = yup.object().shape({
  nationalIdNumber: yup.string()
    .required('This field is required')
    .matches(idNumberRegex, 'Must be a valid id number'),
  fullName: yup.string()
    .required('This field is required'),
  mobileNumber: yup.string()
    .required('Must be a valid phone number')
    .matches(mobileNumberRegex, 'Must be a valid phone number'),
  bankName: yup.string()
    .required('This field is required')
    .oneOf(bankNames),
  accountNumber: yup.string()
    .required('This field is required')
    .matches(bankAccountNumberRegex, 'Must be a valid account number'),
  branchCode: yup.string()
    .required('This field is required')
    .matches(branchCodeRegex, 'Must be a valid branch code'),
});

export default validationSchema;