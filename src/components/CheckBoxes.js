import React from "react";

const CheckBoxes = ({ toppings, inputChange,}) => {
  return (
    <label>
      Toppings: 
      {toppings.map((e, i) => {
        return (
          <label>
            {e}
            <input key={i} type="checkbox" name={e}  onChange={inputChange} />
          </label>
        );
      })}
    </label>
  );
};
export default CheckBoxes;
