import Head from 'next/head';
import NotFound from "../components/notFound/NotFound"


const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Not Found</title>
      </Head>
      <NotFound/>
    </>
  )
}

export default NotFoundPage