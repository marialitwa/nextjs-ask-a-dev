import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher, sendAnswer } from '../../../helpers/api'
import AnswerForm from '../../../components/AnswerForm'

export default function Question() {
  const router = useRouter()
  const { questionId } = router.query

  const { data: question, error } = useSWR(
    `/api/questions/${questionId}`,
    fetcher,
    { refreshInterval: 2000 },
  )
  if (error) return <div>failed to load</div>
  if (!question) return <div>loading...</div>

  return (
    <>
      <h1>{question.question}</h1>
      <ul>
        {question.answers.map((answer) => {
          return <li key={answer.id}>{answer.answer}</li>
        })}
      </ul>
      <AnswerForm />
      <Link href="/">🏠 Back Home</Link>
    </>
  )
}
