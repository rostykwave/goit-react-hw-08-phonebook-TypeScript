import { IconButton, Typography } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import { IContact } from 'types/contact';

interface IProps {
  contact: IContact;
  onEditContact: (person: IContact) => void;
  onDeleteContact: (id: string) => void;
}

export const Contact: React.FC<IProps> = ({
  contact,
  onEditContact,
  onDeleteContact,
}) => {
  const { id, name, number } = contact;
  return (
    <>
      <Typography paragraph={true}>
        <Typography>{name}: </Typography>
        {number}
      </Typography>
      {/* <Typography paragraph={true} variant="contactNumber">
        <Typography variant="contactName">{name}: </Typography>
        {number}
      </Typography> */}

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
