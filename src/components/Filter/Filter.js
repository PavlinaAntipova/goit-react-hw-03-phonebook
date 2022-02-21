import React from 'react';

import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          type="text"
          placeholder="search by name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;