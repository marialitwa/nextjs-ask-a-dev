import AnswerForm from './AnswerForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('AnswerForm', () => {
  it.todo('shows maxLength of characters')
  it.todo('decreases number of characters on input and with the same value')

  it('shows maxLength of characters', () => {
    //given
    render(<AnswerForm />)
    //const expected = 500

    //when
    const amountSpan = screen.getByText('500')

    //then
    expect(amountSpan).toHaveTextContent('500')
  })

  it('decreases number of characters on input and with the same value', async () => {
    //given
    render(<AnswerForm />)
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
