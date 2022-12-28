import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {

  return (
    <main>
      <section className="not-found">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Image src="/not-found.png" alt="Not Found Image" width={1296} height={606}/>
              <div className="d-flex align-items-center justify-content-center">
                <Link href="/" className='btn-style'>Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound