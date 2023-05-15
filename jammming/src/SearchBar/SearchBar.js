import React, { useState } from 'react';

import Tracklist from '../Tracklist/Tracklist';

function SearchBar() {
    // const [music, setMusic] = useState("");
    // Use for GET and POST requests
    const [music, setMusic] = useState([]);

    const musicList = [
        {
            id: 1,
            name: "Start Your Engines",
            artist: "Fourbanger",
            album: "Fourbanger: Start Your Engines"
        },
        {
            id: 2,
            name: "The Mole",
            artist: "Hans Zimmer",
            album: "Dunkirk"
        },
        {
            id: 3,
            name: "Doesn't Sound Like Me At All",
            artist: "Fourbanger",
            album: "Fourbanger: Start Your Engines"
        }
    ]

    function handleSearchSpotify(e) {
        e.preventDefault();
        
        const searchedMusic = e.target.querySelector('input[id="searchMusic"]').value;
        console.log("Searched Music:", searchedMusic);

        musicList.forEach(music => {
            for (let value in music) {
                // console.log("Music:", music[value]);
                if (music[value] == searchedMusic) {
                    console.log("Music:", music);
                    setMusic(music);
                }
            }
        });
    }

    function searchMusic() {
        // console.log("Music:", music);
        return <Tracklist name={music.name} artist={music.artist} album={music.album} id={music.id}/>
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