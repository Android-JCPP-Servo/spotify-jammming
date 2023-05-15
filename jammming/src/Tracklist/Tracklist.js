import React from 'react';

import Track from '../Track/Track';

/**
 * @param {title, artist} props 
 * @returns Tracklist
 */

function Tracklist(props) {
    return (
        <div>
            <Track title="Start Your Engines" artist="Fourbanger" album="Fourbanger" id="1"/>
            <Track title="The Mole" artist="Hans Zimmer" album="Dunkirk" id="2"/>
            <Track title="A Far Green Country" artist="Howard Shore" album="The Lord of the Rings: Return of the King" id="3"/>
        </div>
    )
}

export default Tracklist;