import React, { useState, useRef } from "react"
import styled from "styled-components"
import Button from "./inline-button"
import { rotate } from "./animations"
import Check from "../../images/elements/tick.svg"

const Wrap = styled.form`
  position: relative;
  .form-footer {
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      position: absolute;
      z-index: 4;
      top: 6.5rem;
      width: 20%;
      line-height: 1.65;
      display: none;
    }

    &:before {
      position: absolute;
      content: "";
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 2;
      left: 0;
      top: 0;
      display: none;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      border: solid 2px #fff;
      height: 2rem;
      width: 2rem;
      z-index: 3;
      display: none;
    }

    &.is-submitting,
    &.is-submitted,
    &.is-error {
      p,
      &:after,
      &:before {
        display: block;
      }
    }

    &.is-submitting {
      &:after {
        animation: ${rotate} 1s ease both infinite;
      }
    }

    &.is-submitted {
      &:after {
        width: 3rem;
        height: 3rem;
        background-image: url("${Check}");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
      }
    }

    &.is-error {
      &:after {
        border: none;
        background: red;
        transform: rotateZ(45deg);
      }
    }
  }
`

const Ele = ({ children, formData, formName }) => {
  const form = useRef()
  const [formState, setFormState] = useState()
  const [formMsg, setFormMsg] = useState()

  const encodeFormData = () => {
    let data = { "form-name": formName, ...formData }

    debugger

    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const showFormSuccess = () => {
    setFormMsg("Your nomination was submitted. We shall get back to you.")
    setFormState("is-submitted")

    form.current.reset()

    setTimeout(() => {
      setFormState()
    }, 7000)
  }

  const showFormError = error => {
    setFormState("is-error")
    setFormMsg(error)

    setTimeout(() => {
      setFormState()
    }, 7000)
  }

  const submitForm = e => {
    e.preventDefault()

    setFormState("is-submitting")
    setFormMsg("Dispatching...")

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(),
    })
      .then(res => {
        if (res.status != 200) {
          showFormError(
            "Sorry, there was an error! Please refresh and try again."
          )
          return
        }
        showFormSuccess()
      })
      .catch(error => {
        showFormError(
          "Sorry, there was an error! Please refresh and try again."
        )
      })
  }

  return (
    <Wrap
      ref={form}
      method="POST"
      netlify-honeypot="botField"
      data-netlify="true"
      name={formName}
      onSubmit={e => submitForm(e)}
      className={"user-form " + formState}
    >
      <input type="hidden" name="botField" />
      {children}

      <div className={"form-footer " + formState}>
        <p className="futura-pt">{formMsg}</p>
        <Button method="submit" type="box" label="Submit Nomination" />
      </div>
    </Wrap>
  )
}
export default Ele
