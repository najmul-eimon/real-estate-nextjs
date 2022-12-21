import Head from 'next/head';
import Properties from '../../components/properties/Properties';
import Breadcrumb from '../../components/shared/Breadcrumb';
import Filter from '../../components/shared/Filter';

const Property = () => {
  return (
    <>
      <Head>
        <title>Real Estate | Property</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Breadcrumb data={[]} activePage="Property"/>
      <section className='property-page'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>The latest properties available</h2>
              </div>
            </div>
            <div className="col-md-12">
              <Filter/>
            </div>
          </div>
        </div>
        <Properties/>
      </section>
    </>
  )
}

export default Property