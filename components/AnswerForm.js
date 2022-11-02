import { useState } from 'react'

export default function AnswerForm() {
  const [amount, setAmount] = useState(500)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log(event.target.elements.textfield.value)
        sendAnswer(question.id, event.target.elements.textfield.value)
        event.target.reset()
      }}
    >
      <label htmlFor="answer">Write your answer here:</label>
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
