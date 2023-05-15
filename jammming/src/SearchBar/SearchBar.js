import React, { useState } from 'react';

import Tracklist from '../Tracklist/Tracklist';

function SearchBar() {
    const [music, setMusic] = useState("");
    // Use for GET and POST requests
    // const [music, setMusic] = useState([]);

    const fourbanger = {
        name: "Start Your Engines",
        artist: "Fourbanger",
        album: "Fourbanger: Start Your Engines",
        id: 1
    }

    function handleSearchSpotify(e) {
        e.preventDefault();
        const searchedMusic = e.target.querySelector('input[id="searchMusic"]').value;
        if (searchedMusic == fourbanger.name || searchedMusic == fourbanger.artist || searchedMusic == fourbanger.album) {
            setMusic(searchedMusic);
        }
    }

    function searchMusic() {
        return <Tracklist name={fourbanger.name} artist={fourbanger.artist} album={fourbanger.album} id={fourbanger.id}/>
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
            {music ? searchMusic() : "No music found!"}
        </div>
    );
}

export default SearchBar;