import React from 'react'

const Search = ({ search, setInput }) => {

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='search'>
      <input 
        onChange={inputHandler} 
        onKeyDown={(e)=>{
          if (e.keyCode === 13) {
            search();
          }
        }}
        type="text" 
      />
      <button onClick={search}>Search</button>
    </div>
  )
}

export default Search