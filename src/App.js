import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';


const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
  );
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const formSubmitData = ({ name, number }) => {
    const newItem = { id: nanoid(), name: name, number: number };
    let isUnique = contacts.some(el => el.name === name);
    if (!isUnique) {
      setContacts(prevContacts => {
        return [...prevContacts, newItem];
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(el => el.id !== id);
    });
  };

  return (
    <main className="main">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={formSubmitData} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        renderContacts={renderContacts()}
        deleteContact={deleteContact}
      />
    </main>
  );
}

export default App;