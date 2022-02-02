import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';


const ContactsList = ({ renderContacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {renderContacts.map(el => {
        return (
          <li className={s.item} key={el.id}>
            <span className={s.span}>
              {el.name}: {el.number}
            </span>
            <button
              className={s.btn}
              type="button"
              id={el.id}
              onClick={() => {
                deleteContact(el.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  renderContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;