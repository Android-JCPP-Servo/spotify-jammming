import React from 'react';

import Track from '../Track/Track';

/**
 * @param {title, artist} props 
 * @returns Playlist
 */

function Playlist(props) {
    return (
        <div>
            {/* <Track title="Start Your Engines" artist="Fourbanger" album="Fourbanger"/>
            <Track title="The Mole" artist="Hans Zimmer" album="Dunkirk"/>
            <Track title="A Far Green Country" artist="Howard Shore" album="The Lord of the Rings: Return of the King"/> */}
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;