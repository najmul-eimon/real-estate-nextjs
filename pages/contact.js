import Head from 'next/head';
import Address from '../components/contact/Address';
import Contact from '../components/contact/Contact';
import Breadcrumb from '../components/shared/Breadcrumb';

const contact = () => {
  return (
    <>
      <Head>
          <title>Real Estate | Contact</title>
      </Head>
      <Breadcrumb data={[]} activePage="Contact"/>
      <Contact/>
      <Address/>
    </>
  )
}

export default contact