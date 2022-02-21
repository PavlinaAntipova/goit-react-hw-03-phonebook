import React, { Component } from 'react';
import s from './ContactItem.module.css';

const URL =
  'https://cdn.pixabay.com/photo/2021/02/24/20/38/cat-6047457_1280.png';

function ContactItem(props) {
  return (
    <li className={s.item} key={props.id}>
      <img className={s.img} src={URL} alt="Avatar" width="60" />
      <div>
        <p className={s.name}>{props.name}</p>
        <p className={s.number}>{props.number}</p>
      </div>
      <button
        className={s.button}
        onClick={() => {
          props.delete(props.id);
        }}
        type="button"
      >
        x
      </button>
    </li>
  );
}

export default ContactItem;