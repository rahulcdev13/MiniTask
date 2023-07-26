import React, { useState } from 'react'
import '../App.css'

const SearchFilter = () => {
    
    const list = ['Mehrangarh Fort','Gwalior Fort','Golconda Fort','Jaisalmer Fort'];
    
      const [filterList, setFilterList] = useState(list);
    
      const handleSearch = (event) => {
    
        if (event.target.value === "") {
          setFilterList(list);
          return;
        }
        const filteredValues = list.filter(
          (item) =>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValues);
      };
      return (
        <div className="main">
          <div>
            Search: <input  type="text" className='form-control' onChange={handleSearch} />
          </div>
          {filterList &&
            filterList.map((item, index) => (
              <div key={index}>{item}</div> //Display each item
            ))}
        </div>
      );
    }

export default SearchFilter
