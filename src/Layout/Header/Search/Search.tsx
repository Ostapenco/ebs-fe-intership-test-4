import React from 'react';

import './Search.css';

const Search: React.FC = () => {
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
        <button>Add todo</button>
      </div>
    </>
  );
};

export default Search;
