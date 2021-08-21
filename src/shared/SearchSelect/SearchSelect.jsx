import React, { useRef, useState, useEffect } from 'react';
import { string, bool, func, arrayOf } from 'prop-types';
import styles from './SearchSelect.module.css';
import Input from '../Input/Input';

const SearchSelect = ({
  name,
  label,
  showLabel,
  prefixText,
  error,
  errorMsg,
  controller,
  onSelectListItem,
  data,
}) => {
  const node = useRef();
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (e) => setSearchQuery(e.target.value);
  const handleFocus = () => setShowList(true);
  const handleSelect = (newValue) => {
    setShowList(false);
    onSelectListItem(newValue);
  };

  useEffect(() => {
    const filterResults = data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredList(filterResults);
  }, [searchQuery]);

  const handleClick = (e) => setShowList(node.current.contains(e.target));

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div ref={node} className={styles.search_select__main_wrapper}>
      <div>
        <Input
          placeholder="Type to search"
          name={name}
          label={label}
          showLabel={showLabel}
          controller={controller}
          icon="search"
          prefixText={prefixText}
          error={error}
          errorMsg={errorMsg}
          onChangeParam={handleChange}
          onFocusParam={handleFocus}
        />
      </div>
      <div
        className={`${styles.search_select__list_wrapper} ${
          showList ? styles.show : ''
        }`}
      >
        {showList && (
          <ul className={styles.search_select__list}>
            {filteredList && filteredList.length ? (
              filteredList.map((item) => (
                <li
                  key={item}
                  className={styles.search_select__list_item}
                  value={item}
                  onClick={(e) => handleSelect(e.currentTarget.innerText)}
                >
                  {item}
                </li>
              ))
            ) : (
              <p className={styles.search_select__list_item_empty}>No items</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
SearchSelect.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  showLabel: bool,
  prefixText: string,
  error: bool,
  errorMsg: string,
  controller: func.isRequired,
  onSelectListItem: func.isRequired,
  data: arrayOf(string).isRequired,
};

SearchSelect.defaultProps = {
  showLabel: true,
  prefixText: null,
  error: false,
  errorMsg: null,
};

export default SearchSelect;
