import axios from 'axios';
import { BASE_URL } from 'constants/apiConstants';

axios.defaults.baseURL = BASE_URL;

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
export async function patchContact(contact, contactId) {
  const { data } = await axios.patch(`/contacts/${contactId}`, contact);
  return data;
}
