import React, { useState } from 'react';

function SearchBar() {
    const [music, setMusic] = useState("");

    function handleSearchSpotify(e) {
        e.preventDefault();
        const searchedMusic = e.target.querySelector('input[id="searchMusic"]').value;
        setMusic(searchedMusic);
    }

    function searchMusic() {
        console.log("Music:", music);
        return <p>Music: {music}</p>
    }

    const musicList = {
        
    }

    const searchBar = (
        <form action="#" onSubmit={handleSearchSpotify}>
            <input type="text" id="searchMusic" placeholder="Search Spotify" />
            <input type="submit"/>
        </form>
    );

    return (
        <div>
            {searchBar}
            <p>{music ? searchMusic() : "No music found!"}</p>
        </div>
    );
}

export default SearchBar;