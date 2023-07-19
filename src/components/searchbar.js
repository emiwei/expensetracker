import { React, useState } from "react";
import './searchbar.css';
import searchimg from '../images/searchimg.png'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    return (
        <div className="search">
            <img style = {{width: '17px', 
                           height: '17px', 
                           padding: '7px'}} src={searchimg} alt="Search-bar"/>
            <input 
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchInput}
                className="search-input"
            />
        </div>
        
    );
}

export default SearchBar;