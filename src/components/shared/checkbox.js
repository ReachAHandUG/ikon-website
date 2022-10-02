import * as React from "react"
import styled from "styled-components"

const Box = styled.div`
  line-height: 1;
  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 2.25rem;
    margin-bottom: 0.75rem;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .label {
    padding-top: 0.37rem;
    display: block;
    font-size: 0.875rem;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    border: solid 1px #b98027;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: rgba(255, 255, 255, 25%);
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #b98027;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const Ele = ({ label, name, change }) => {
  return (
    <Box>
      <label className="container">
        <span className="label">{label}</span>
        <input
          onChange={change}
          value={label}
          name={name}
          className="input"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </Box>
  )
}
export default Ele
