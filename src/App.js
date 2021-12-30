import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';


const App = () => {
    const [filter, setFilter] = useState('');
    const [contacts, setContacts] = useState([]);
    // state = {
    //     contacts: [],
    //     filter: '',
    // };

// componentDidMount() {
//     if (localStorage.getItem("contacts") !== null) {
//       const contacts = JSON.parse(localStorage.getItem("contacts"));
//       setContacts({ contacts: contacts });
//     }
//     }

// componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

    // const handleSubmitForm = (newContact) => {
    //     setContacts(({ contacts }) => ({
    //         contacts: [...contacts, newContact],
    //     }));
    // };

    // const handleUniceContact = name => {
    //     const { contacts } = setContacts;
    //     const isContactThere = contacts.find(contact => contact.name === name);
    //     if (isContactThere) {
    //         alert('Contact is exist');
    //         return;
    //     }
    //     return !isContactThere;
    // };
    // const handleRemoveContact = id =>
    //     setContacts(({ contacts }) => ({
    //         contacts: contacts.filter(contact => contact.id !== id),
    //     }));

    // const handleFilterSearch = filter => setContacts({ filter });

    // filterContacts = () => {
    //     const { contacts, filter } = this.state;
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase()),
    //     );
    // };

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
            <>
                <h2>Phonebook</h2>
                <ContactForm
                    onSubmit={formSubmitData}
                    onChekunike={formSubmitData}
                />
                <h2>Contacts</h2>
                <h3>Find contacts by name</h3>
                <Filter filter={filter} onChange={changeFilter} />
                <ContactsList
                    contacts={renderContacts}
                    onRemove={deleteContact}
                />
            </>
        );

}

export default App;