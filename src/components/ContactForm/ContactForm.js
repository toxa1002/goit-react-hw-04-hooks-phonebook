import React, { useState  } from 'react';
// import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    // state = {
    //     name: '',
    //     number: '',
    // };
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

    // handleInputChange = e => {
    //     const { name, value } = e.currentTarget;
    //     this.setState({ [name]: value });
    // };

    // handleSubmitForm = e => {
    //     e.preventDefault();
    //     const { name, number } = this.state;
    //     const isValidForm = this.validateForm();
    //     if (isValidForm) {
    //         this.props.onSubmit({ id: nanoid(), name, number });
    //     } else return;
    //     this.reset();
    // };
    // validateForm = () => {
    //     const { name, number } = this.state;
    //     const { onChekunike } = this.props;
    //     if (!name || !number) {
    //         alert('Empty field! Please fill');
    //         return false;
    //     }
    //     return onChekunike(name);
    // };
    // reset = () => {
    //     this.setState({
    //         name: '',
    //         number: '',
    //     });
    // };

        // const { name, number } = this.state;
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