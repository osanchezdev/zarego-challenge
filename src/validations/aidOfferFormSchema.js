import * as yup from 'yup';

export default yup.object().shape({
  aidOfferForm: yup.object().shape({
    school: yup.string().required('Required'),
    admissionType: yup
      .string()
      .notOneOf(['null'], 'Required')
      .required('Required'),
    attendanceCost: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
    grantsFinancialNeeds: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
    renewGrantsFinancialNeeds: yup.bool(),
    grantsNotFinancialNeeds: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
    renewGrantsNotFinancialNeeds: yup.bool(),
    pellStateGrants: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
    privateScholarship: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
    renewPrivateScholarship: yup.bool(),
    workStudy: yup
      .number()
      .typeError('Must specify a number')
      .required('Required')
      .positive('Must be greater than zero')
      .integer(),
  }),
});
