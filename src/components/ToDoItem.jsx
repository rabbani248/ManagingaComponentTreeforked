import React, { useState } from "react";

function ToDoItem(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: click ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
