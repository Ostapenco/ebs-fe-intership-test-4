import React from 'react';

import './Search.css';

interface SearchProps {
  openModal: () => void;
}

const Search: React.FC<SearchProps> = ({ openModal }) => {
  //   const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className='searchContainer'>
        <input
          id='search'
          className='searchInput'
          type='search'
          // onChange={setInputValue}
          // value={inputValue}
          autoComplete='off'
          placeholder='Search'
        />
      </div>
      <div className='addContainer'>
        <button className='addButton' type='button' onClick={openModal}>
          Add todo
        </button>
      </div>
    </>
  );
};

export default Search;
