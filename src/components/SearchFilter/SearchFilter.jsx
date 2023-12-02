import React from 'react';
import styles from './SearchFilter.module.css';
//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice/filterSlice';

export const SearchFilter = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={styles.inputLabel}>Find contacts by name</p>
      <input
        className={styles.inputContent}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};
