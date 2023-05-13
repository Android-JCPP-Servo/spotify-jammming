import React from "react";

function Track(props) {
    let titleText = props.title;
    let author = props.author;
    let add = "+";
    return (
        <div>
            <div style="width: 75%; float: left;">
                <h2>{titleText}</h2>
                <p>{author}</p>
            </div>
            <div style="width: 25%; float: left; text-align: center;">{add}</div>
        </div>
    )
}

export default Track;