import React from "react"
import "./style.css"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <a href={props.item.url}>
              <p>{props.item.fileName}</p>
            </a>
        </div>
    )
}

export default TodoItem
