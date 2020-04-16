import React, { useState, useEffect } from "react"
import { showEmailCapture, accent } from "./ProfileInformation"
import RbButton from "./RbButton"
import "./app.css"
import styled from "styled-components"

const nouns = [
  "learning",
  "crazy",
  "on hold",
  "chaos",
  "foo/bar",
  "good",
  "energy",
  " ........ ",
  "perfect",
  "HERE!!!",
  "existence",
  "fear",
  "voyage",
  "expansion",
  "💯💯💯💯💯",
]

const EmailCaptureSection = () => {
  const [noun, setNoun] = useState("touch")

  const wordSwitch = () => {
    setInterval(() => {
      setNoun(nouns[Math.floor(Math.random() * nouns.length)])
    }, 1500)
  }

  useEffect(() => {
    wordSwitch()
  }, [])

  return showEmailCapture ? (
    <Row>
      <h3>
        Life is <span style={{ textDecoration: `underline` }}>{noun}</span>!
      </h3>
      <FormRow>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input placeholder="email..." name="email" />
          <RbButton text={`Go!`} type="submit" />
        </form>
      </FormRow>
    </Row>
  ) : null
}

export default EmailCaptureSection

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;
  height: 25vh;
  background-color: white;
  text-align: center;
`

const FormRow = styled.div`
  margin: 0 1rem;
`

const Input = styled.input`
  margin: 0 1rem;
  height: 38px;
  border-radius: 4px;
  padding: 0 0.5rem;
  border: 2px solid ${accent};
`

//   .FooterSection h3 {
//     padding: 10px;
//     color: white;
//     margin: 0;
//     font-size: 1em;
//   }
//   .FooterSection a {
//     color: white;
//   }
//   .FooterSection a:hover {
//     color: grey;
//   }
