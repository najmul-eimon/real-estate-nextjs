import Link from 'next/link';
import Image from 'next/image';
import footerLogo from '../../public/footer-logo.png';
import footerLogoWhite from '../../public/footer-logo-white.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaRegEnvelope} from 'react-icons/fa';
import {IoCallOutline} from 'react-icons/io5';
import {FiMapPin} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
    {/* top-footer start */}
    <section className="top-footer">
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-brand">
                <div className="footer-content">
                  <Link href="/">
                    <Image src={footerLogo} alt="Picture of logo"/>
                  </Link>
                  <p className="about">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet consecteturr adipiscing elit aliquam</p>
                  <ul className="footer-social d-flex align-items-center">
                    <li><a href="#!"><FaFacebookF className="social-icon"/></a></li>
                    <li><a href="#!"><FaTwitter className="social-icon"/></a></li>
                    <li><a href="#!"><FaInstagram className="social-icon"/></a></li>
                    <li><a href="#!"><FaLinkedinIn className="social-icon"/></a></li>
                    <li><a href="#!"><FaYoutube className="social-icon"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Discover</h4>
                </div>
                <ul className="footer-links">
                  <li><Link href="property">New york</Link></li>
                  <li><Link href="property">San Francisco</Link></li>
                  <li><Link href="property">Minnesota</Link></li>
                  <li><Link href="property">Los Angeles</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Company</h4>
                </div>
                <ul className="footer-links">
                  <li><Link href="about">About</Link></li>
                  <li><Link href="contact">Contact us</Link></li>
                  <li><Link href="property">Property</Link></li>
                  <li><Link href="blog">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="footer-content">
                <div className="footer-title">
                  <h4>Contacts us</h4>
                </div>
                <ul className="footer-address">
                  <li>
                    <FaRegEnvelope className='address-icon'/>
                    <p>mycompany@mail.com</p>
                  </li>
                  <li>
                    <IoCallOutline className='address-icon'/>
                    <p>(589) 487 - 5892</p>
                  </li>
                  <li>
                    <FiMapPin className='address-icon'/>
                    <ul>
                      <li><p>1545 Broadway</p></li>
                      <li><p>New York, NY 10036</p></li>
                      <li><p>+1 012 345 6789</p></li>
                      <li><p>newyork@casaroyal.com</p></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  top-footer end */}

    {/*  bottom-footer start */}
    <section className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-main">
              <p>Copywrite © 2023 - RealEstate. All rights reserved.</p>

              <Link href="/">
                <Image src={footerLogoWhite} alt="Picture of logo"/>
              </Link>

              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/property">Property</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*  bottom-footer end */}
  </footer>
  )
}

export default Footer