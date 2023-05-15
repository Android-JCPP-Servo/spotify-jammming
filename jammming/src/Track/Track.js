import React from "react";

let grid = {
    display: "grid",
    gridTemplateColumns: "3fr 1fr"
}
let left = {
    textAlign: "left"
}
let center = {
    textAlign: "center"
}
let right = {
    textAlign: "right"
}
let border = {
    border: "1px solid black"
}

function Track(props) {
    let titleText = props.title;
    let artist = props.artist;
    let album = props.album;
    let id = props.id;
    let add = "+";
    return (
        <div style={grid}>
            <div style={{...border, ...left}} id={id}>
                <h2>{titleText}</h2>
                <p>{artist}</p>
                <p>{album}</p>
            </div>
            <div style={{...border, ...center}}><p>{add}</p></div>
        </div>
    )
}

export default Track;