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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Breadcrumb data={[]} activePage="About"/>
      <AboutUs/>
      <Achievement/>
      <Partner/>
    </>
  )
}

export default about