import { getFilter } from 'redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions } from 'redux/contacts';
import { TextField } from '@mui/material';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <TextField
      variant="standard"
      sx={{ mb: '1.5em' }}
      fullWidth
      name="filter"
      label="Find contacts by name"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
