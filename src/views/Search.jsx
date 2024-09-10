import React, { useState } from 'react';
import "../index.css"
import { LeftOutline, DeleteOutline , ClockCircleOutline,CloseOutline} from 'antd-mobile-icons';
// SearchBox 组件
  
  export function Search(){
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSearchResults([...searchResults, searchTerm]);
      setSearchTerm('');
    }
  };

  const handleDelete = (index) => {
    const newResults = searchResults.filter((_, i) => i !== index);
    setSearchResults(newResults);
  };
  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />
      <SearchResultList results={searchResults} onDelete={handleDelete} />
    </div>
  );
};

// SearchInput 组件
const SearchInput = ({ value, onChange, onSearch }) => {
  return (
    <div>
      <LeftOutline onClick={()=>{
        window.location.href = '/home'
      }}/>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="输入搜索词"
        className='Tabder2'
      />
      <button className='Tabder3' onClick={onSearch}>搜索</button>
    </div>
  );
};

// SearchResultList 组件
const SearchResultList = ({ results, onDelete }) => {
  return (
    <ul className='qclbd'>
      <span className='Tebb1'>历史搜索记录</span>
      {results.map((result, index) => (
        
        <SearchResultItem
          key={index}
          result={result}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};

// SearchResultItem 组件
const SearchResultItem = ({ result, onDelete }) => {
  return (
    <li>
      <span className='Tabb3'>
         <ClockCircleOutline />
      </span>
     
        {result}
      <button onClick={onDelete} className='Tabder3'><CloseOutline /></button>
    </li>
  );
};
