import React from 'react';

import Track from '../Track/Track';

/**
 * @param {title, artist} props 
 * @returns Tracklist
 */

function Tracklist(props) {
    return (
        <div>
            <Track title="Start Your Engines" artist="Fourbanger"/>
            <Track title="The Mole" artist="Hans Zimmer"/>
            <Track title="A Far Green Country" artist="Howard Shore"/>
        </div>
    )
}

export default Tracklist;