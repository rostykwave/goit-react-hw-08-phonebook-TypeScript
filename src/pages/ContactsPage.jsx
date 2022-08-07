import { ContactListSection } from 'components/ContactListSection';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/system';
import { AddContactSection } from 'components/ContactForms/AddContactSection';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Filter />
      <ContactListSection />
      <AddContactSection />
    </Container>
  );
};

export default ContactsPage;
