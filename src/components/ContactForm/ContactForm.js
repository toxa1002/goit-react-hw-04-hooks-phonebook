import React, { useState } from 'react';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleChange = e => {
    if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
    if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };
        return (
            <form className={s.form} onSubmit={handleSubmit}>
                <h3>Name</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChange}
                ></input>

                <h3>Number</h3>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    placeholder="123-45-67"
                    value={number}
                    onChange={handleChange}
                ></input>
                <button className={s.buttonForm} type="submit">
                    Add contact
                </button>
            </form>
        );

}

export default ContactForm;