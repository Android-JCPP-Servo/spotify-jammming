import React from "react";

let grid = {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    textAlign: "left"
}
let border = {
    border: "1px solid black"
}

function Track(props) {
    let titleText = props.title;
    let author = props.artist;
    let add = "+";
    return (
        <div style={grid}>
            <div style={border}>
                <h2>{titleText}</h2>
                <p>{author}</p>
            </div>
            <div style={border}>{add}</div>
        </div>
    )
}

export default Track;