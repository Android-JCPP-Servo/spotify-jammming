import React from 'react';

import Track from '../Track/Track';

/**
 * @param {name, artist} props 
 * @returns Tracklist
 */

function Tracklist(props) {
    return (
        <div>
            <Track name={props.name} artist={props.artist} album={props.album} id={props.id}/>
        </div>
    )
}

export default Tracklist;