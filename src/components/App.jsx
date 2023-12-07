import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './App.module.css';
import { getContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts);
  }, [dispatch]);

  return (
    <div className={styles.appBox}>
      <h1 className={styles.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.phonebookTitle}>Contacts</h2>
      <SearchFilter />
      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};
