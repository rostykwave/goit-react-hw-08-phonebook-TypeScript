import { Divider, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { useState } from 'react';
import { EditContactModal } from 'components/ContactForms/EditContactModal';
import { Contact } from 'components/Contact';

export const ContactListSection = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editPerson, setEditPerson] = useState({
    id: '',
    name: '',
    number: '',
  });
  const handleCloseEdit = () => setIsEdit(false);

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const onEditContact = person => {
    setIsEdit(true);
    setEditPerson(person);
  };

  return (
    <List>
      <Divider />
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <ListItem
            key={contact.id}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Contact
              contact={contact}
              onEditContact={onEditContact}
              onDeleteContact={onDeleteContact}
            />
          </ListItem>
        ))
      ) : (
        <Typography variant="h5">PhoneBook is empty</Typography>
      )}
      <EditContactModal
        open={isEdit}
        onClose={handleCloseEdit}
        editPerson={editPerson}
      />
    </List>
  );
};
