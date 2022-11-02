import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from '../helpers/api'

function LandingPage() {
  const { data, error } = useSWR('/api/questions', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>Ask away!</title>
      </Head>
      <section>
        <h1>Ask a dev!</h1>
        <ul>
          {data.map((question) => {
            return <li>{question.question}</li>
          })}
        </ul>
        <p>
          Feel free to browse or ask any question while your identity stays
          stealthy and hidden.
        </p>
        <aside className="ninja">{"Like a freakin' ninja!"}</aside>
      </section>
    </>
  )
}

export default LandingPage
