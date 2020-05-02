import React from "react";


const Size = ({inputChange}) => {
  return(
  <label htmlFor="Size">
    Size: 
  <select name="Size" onChange={inputChange}>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
  </select>
  </label>
)}

export default Size;