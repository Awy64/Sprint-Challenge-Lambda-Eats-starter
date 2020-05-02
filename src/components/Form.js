import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';
import Size from "./Size";
import CheckBoxes from "./CheckBoxes"
import Special from "./special"


//vars
const Form = () => {
  const initialFormState = {
    name: "",
    cheese: false,
    ham: false,
    pineapple: false,
    olive: false
  }
  const toppings = ["cheese", "ham", "pineapple", "olive"];

  //state
  const [formState, setFormState] = useState(initialFormState)
  
  const [isBtnDisabled, setIsBtnDisabled] = useState();
  const [errors, setErrors] = useState([initialFormState]);
  const [users,setUsers] = useState([]);

  const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Name is a required field"),
    Size: yup.string(),
    cheese: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),
    olive: yup.boolean(),
    special: yup.string()

  })


// valadation
  const validateChange = e => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({ ...errors, [e.target.name]: ""})
    })
    .catch(err => {
      setErrors({...errors, [e.target.name]: err.errors[0] })
    })

  }


// submit
  const formSubmit = e => {
    e.preventDefault();
    console.log(formState);
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        console.log(res.data)
        const data = res.data
        setUsers(data)
        setFormState(initialFormState)
        console.log(users, "in then")
        })
        .catch(err => console.log(err))
  }
//input
  const inputChange = e => {
    console.log("input Changed", e.target.value);
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e)
    setFormState(newFormData)
  }
//valadate form
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setIsBtnDisabled(!valid);
    })
  }, [formState, formSchema]);
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setIsBtnDisabled(!valid);
    })
  }, [formState, formSchema]);

  return(
    <form id="form" onSubmit={formSubmit}>
      <label htmlFor="name">Name 
      <input 
        id="name" 
        type="text" 
        name="name" 
        value={formState.name}
        onChange={inputChange}
        data-cy="name"
      />
      {/* {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null} */}
    </label>
    <Size inputChange={inputChange} />
    <CheckBoxes toppings={toppings} inputChange={inputChange}  />
    <Special formState={formState} inputChange={inputChange}  />
    <pre>{JSON.stringify(users, null, 2)}</pre>
    <button disabled={isBtnDisabled}>Order</button>
    </form>
  )}

export default Form;