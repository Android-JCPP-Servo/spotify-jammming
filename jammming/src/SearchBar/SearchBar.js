import React from 'react';

function SearchBar() {
    return (
        <div>
            <input id="searchBar" class="searchBar" name="searchBar" type="text" placeholder="Search by title, author, or category"/>
            <button id="searchButton" class="searchButton" name="searchButton">Search</button>
        </div>
    );
}

export default SearchBar;