import { IconButton, Typography } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';

export const Contact = ({ contact, onEditContact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <>
      <Typography paragraph={true} variant="contactNumber">
        <Typography variant="contactName">{name}: </Typography>
        {number}
      </Typography>

      <Box>
        <IconButton onClick={() => onEditContact({ id, name, number })}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDeleteContact(id)}>
          <PersonRemoveIcon />
        </IconButton>
      </Box>
    </>
  );
};
