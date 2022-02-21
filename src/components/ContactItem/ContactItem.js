import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactItem.module.css';

const URL =
  'https://cdn.pixabay.com/photo/2021/02/24/20/38/cat-6047457_1280.png';

function ContactItem({id, name, number, deleteItem}) {
  return (
    <li className={s.item} key={id}>
      <img className={s.img} src={URL} alt="Avatar" width="60" />
      <div>
        <p className={s.name}>{name}</p>
        <p className={s.number}>{number}</p>
      </div>
      <button
        className={s.button}
        onClick={() => {
          deleteItem(id);
        }}
        type="button"
      >
        x
      </button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteItem: PropTypes.func
}