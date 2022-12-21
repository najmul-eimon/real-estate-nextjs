import Head from 'next/head';
import NotFound from "../components/notFound/NotFound"


const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Not Found</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <NotFound/>
    </>
  )
}

export default NotFoundPage