import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Details from '../../components/propertyDetails/Details';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { properties } from "../../data/property";
import RelatedProperties from '../../components/propertyDetails/RelatedProperties';

const PropertyDetails = () => {
  const router = useRouter();
  const propertyId = router.query.propertyId;

  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    if (propertyId) {
      setSingleData(properties.find(({id}) => id === propertyId));
    }
  }, [propertyId, singleData]);

  return (
    <>
      <Head>
        <title>Real Estate | Property Details</title>
      </Head>
      <Breadcrumb data={[
          {
            label: "Property",
            link: "/property",
          },
        ]} 
        activePage="Property Details"
      />
      <Details data={singleData} />
      <RelatedProperties />
    </>
  )
}

export default PropertyDetails