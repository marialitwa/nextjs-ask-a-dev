import AnswerQuestionForm from './AnswerQuestionForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('AnswerQuestionForm', () => {
  it('shows maxLength of characters', () => {
    //given
    render(<AnswerQuestionForm />)
    //const expected = 500

    //when
    const amountSpan = screen.getByText('500')

    //then
    expect(amountSpan).toHaveTextContent('500')
  })

  it('decreases number of characters on input and with the same value', async () => {
    //given
    render(<AnswerQuestionForm />)
    //const expected = 500

    //when
    const amountSpan = screen.getByText('500')
    const textArea = screen.getByLabelText('Write your answer here:')

    //then
    expect(amountSpan).toHaveTextContent('500')
    await userEvent.type(textArea, 'Hello World')
    expect(amountSpan).toHaveTextContent('489')
  })
})
