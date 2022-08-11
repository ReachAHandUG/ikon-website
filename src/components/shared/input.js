import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Dropdown from "../../images/elements/dropdown.svg"
import { districts } from "../../utilities/districts"

const Box = styled.div`
    padding-bottom: 2rem; 
  input,
  textarea,
  select {
    border: solid 1px #545454;
    padding: 0.75rem;
    font-weight: 500;
    width: 100%;
    color: #fff; 

    &:active,
    &:focus {
      border-color:#b98027;
    }
  }

  label {
    font-weight: 500;
    display: block;
    font-size: 0.75rem;
    color: #C39F63; 
    padding-bottom: 0.75rem;
  }

  select {
    border: solid 1px #545454;
    padding: 0.75rem;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    background-image: url("${Dropdown}");
    background-size: 1rem;
    background-position: calc(100% - 1rem) center;
    background-repeat: no-repeat;

    &:active,
    &:focus {
      border-color:#b98027;
    }
  }
`

export default ({
  type,
  label,
  name,
  options,
  rows,
  change,
  value,
  optional,
}) => {
  let list = []

  switch (true) {
    case options && options.length > 0:
      list = options
      break

    case type === "gender":
      list = ["Female", "Male", "Rather not say"]
      break

    case type === "districts":
      list = districts
      break

    case type === "age":
      list = ["10-19", "20-25", "25 and Above"]
      break

    default:
      break
  }

  const [val, setVal] = useState("")
  const handleChange = e => {
    setVal(e.target.value)
    change(e)
  }

  useEffect(() => {
    if (value) {
      setVal(value)
    }
  }, [value])

  return (
    <Box className={type}>
      <label htmlFor={name}>{label}</label>

      {(type === "text" || type === "email" || type === "number") && (
        <input
          id={name}
          type={type}
          name={name}
          value={val}
          onChange={handleChange}
          required={optional ? "" : "required"}
        />
      )}

      {type === "textarea" && (
        <textarea
          id={name}
          name={name}
          rows={rows ? rows : "4"}
          value={val}
          onChange={handleChange}
          required={optional ? "" : "required"}
        ></textarea>
      )}

      {list && list.length > 0 && (
        <select
          id={name}
          required={optional ? "" : "required"}
          name={name}
          value={val}
          onChange={handleChange}
        >
          <option value=""></option>
          {list.map((ele, index) => {
            return (
              <option value={ele} key={index}>
                {ele}
              </option>
            )
          })}
        </select>
      )}
    </Box>
  )
}
