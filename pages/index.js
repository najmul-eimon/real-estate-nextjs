import Head from 'next/head';
import Banner from '../components/home/Banner';
import Achievement from '../components/shared/Achievement';
import AllProperty from '../components/home/AllProperty';
import Place from '../components/home/Place';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Partner from '../components/shared/Partner';


export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate | Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Banner/>
      <Achievement/>
      <AllProperty/>
      <Place/>
      <Blog data={"blog-section"}/>
      <Contact/>
      <Partner/>
    </>
  )
}
