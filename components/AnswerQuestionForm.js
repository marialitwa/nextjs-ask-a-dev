import { useState } from 'react'

export default function AnswerQuestionForm({ labelText, submitForm }) {
  const [amount, setAmount] = useState(500)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log(event.target.elements.textfield.value)
        submitForm(event.target.elements.textfield.value)
        event.target.reset()
      }}
    >
      <label htmlFor="answer">Write your {labelText} here:</label>
      <textarea
        id="answer"
        name="textfield"
        minLength="10"
        maxLength="500"
        required
        onChange={(event) => {
          setAmount(500 - event.target.value.length)
        }}
      ></textarea>
      <small>
        <span>{amount}</span> characters left
      </small>

      <button type="submit">submit</button>
    </form>
  )
}
