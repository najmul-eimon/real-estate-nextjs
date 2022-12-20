import Link from 'next/link';
import image from '../../public/not-found1.png';
import Image from 'next/image';

const NotFound = () => {

  return (
    <main>
      <section className='not-found'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Image src={image} alt="Not Found Image"/>
              <div className="d-flex align-items-center justify-content-center">
                <Link href="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound