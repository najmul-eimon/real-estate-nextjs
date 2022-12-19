import Head from 'next/head';
import Breadcrumb from '../components/shared/Breadcrumb';
import AboutUs from '../components/about/AboutUs';
import Achievement from '../components/shared/Achievement';
import Partner from '../components/shared/Partner';

const about = () => {
  return (
    <>
      <Head>
        <title>Real Estate | About</title>
      </Head>
      <Breadcrumb data={[]} activePage="About"/>
      <AboutUs/>
      <Achievement/>
      <Partner/>
    </>
  )
}

export default about