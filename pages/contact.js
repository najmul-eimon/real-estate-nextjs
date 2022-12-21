import Head from 'next/head';
import Address from '../components/contact/Address';
import Contact from '../components/contact/Contact';
import Breadcrumb from '../components/shared/Breadcrumb';

const contact = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Contact</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Breadcrumb data={[]} activePage="Contact"/>
      <Contact/>
      <Address/>
    </>
  )
}

export default contact