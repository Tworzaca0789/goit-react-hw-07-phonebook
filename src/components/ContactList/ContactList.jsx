import React from 'react';
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors/selectors';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <ContactListItem id={id} name={name} number={number} />
          <button
            type="button"
            className={styles.contactDeleteBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
