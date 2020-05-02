import React from "react"


const Special = ({formState, inputChange}) => {
    return(
      <label htmlFor="special">
        Special instruction
        <textarea 
          name="special" 
          value={formState.special}
          onChange={inputChange}
          data-cy="special"/>
      </label>
    )
}


export default Special;