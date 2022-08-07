import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Container } from '@mui/system';
import { contactValidationSchema } from 'schema/contactValidationSchema';

export const EditContactForm = ({ onEditApprove, editPerson }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: editPerson.name,
      number: editPerson.number,
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        contactsOperations.patchContact({ ...values, id: editPerson.id })
      );
      resetForm();
      onEditApprove();
    },
  });

  return (
    <Container sx={{ mt: '1em' }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Save
        </Button>
      </form>
    </Container>
  );
};
// import { Formik, ErrorMessage } from 'formik';
// import {
//   ErrorText,
//   StyledInput,
//   StyledForm,
//   FormField,
//   FormLabel,
//   SubmitBtn,
// } from './ContactForm.styled';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { contactsOperations } from 'redux/contacts';

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.string().min(6).max(13).required(),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// //main form
// export const ContactForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(contactsOperations.addContact(values));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <StyledForm autoComplete="off">
//         <FormField>
//           <FormLabel>Name</FormLabel>
//           <StyledInput
//             type="text"
//             name="name"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           />
//           <FormError name="name" />
//         </FormField>

//         <FormField>
//           <FormLabel>Phone number</FormLabel>
//           <StyledInput
//             type="tel"
//             name="number"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           />
//           <FormError name="number" />
//         </FormField>
//         <SubmitBtn type="submit">Add contact</SubmitBtn>
//       </StyledForm>
//     </Formik>
//   );
// };
