import Image from 'next/image';
import {address} from '../../data/address';

const Address = () => {
  return (
    <section className="address">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Our Offices</h2>
            </div>
          </div>
          <div className="col-lg-12 col-xl-10 offset-xl-1">
            <div className="row address-row">
              {
                address.map(({id, image, city, area, location, phone, email}) => 
                <div key={id} className="col-md-6 col-lg-6">
                  <div className="address-card">
                    <div className="image">
                      <Image src={image} alt="Location image" width={526} height={251}/>
                    </div>
                    <h4>{city}</h4>
                    <ul>
                      <li><p>{area}</p></li>
                      <li><p>{location}</p></li>
                      <li><p>{phone}</p></li>
                      <li><p>{email}</p></li>
                    </ul>
                    <a href="#!" className="btn-style">Get direction</a>
                  </div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address