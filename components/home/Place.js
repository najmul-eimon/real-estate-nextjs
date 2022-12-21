import React, { useContext } from 'react';
import {places} from '../../data/place';
import Link from 'next/link';
import {BiChevronRightCircle} from 'react-icons/bi';
import { SaveToLocalContext } from '../layout/Layout';
import Image from 'next/image';

const Place = () => {
  // get data from context
  const {setGetCategory, setActiveBtn, setGetCity} = useContext(SaveToLocalContext);

  const handlePlace = (city) => {
    setGetCity(city);
    setGetCategory('all');
    setActiveBtn('all');
  }

  return (
    <section className="place">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Most Popular Place</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="all-places">
              <div className="grid">
                {
                  places.map(({id, name, image}) => 
                    <div key={id} className="single-place">
                      <Link href="property" onClick={() => handlePlace(name)}>
                        <Image src={image} alt="Place Image" width={416} height={500}/>
                        <div className="overlay">
                          <p>{name} <BiChevronRightCircle className='place-icon'/></p>
                        </div>
                      </Link>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Place