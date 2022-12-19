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
