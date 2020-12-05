import React from "react"
import "../Styles/style.css"

function Chapter(props) {
    return (
        <div className="chapter-item">
            <a href={props.item.url} target="_blank" rel="noopener noreferrer">
              <p>{props.item.fileName}</p>
            </a>
        </div>
    )
}

export default Chapter
