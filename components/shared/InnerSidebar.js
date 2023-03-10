import Link from 'next/link';
import Image from 'next/image';
import {FaStar} from 'react-icons/fa';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import {IoCalendarNumberOutline} from 'react-icons/io5';
import {HiArrowUpRight} from 'react-icons/hi2';
import ContactFrom from '../../components/contact/ContactForm';
import Filter from '../../components/shared/Filter';
import {properties} from '../../data/property';
import {blogs} from '../../data/blog';

const InnerSidebar = ({data}) => {
  return (
    <div className="sidebar">
      {/* Featured Properties */}
      <div className="details-box mt-0">
        <div className="details-title">
          <h5>Featured Properties</h5>
        </div>
        <ul className="featured-list">
          {
            properties?.slice(0,3).map(({id, image, name, price, rating}) => 
            <li key={id} className="d-flex align-items-center">
              <div className="image">
                <Link href={`/property/${id}`}>
                  <Image src={image} alt="Featured property image" width={360} height={233}/>
                </Link>
              </div>
              <div className="others">
                <ul className="d-flex align-items-center">
                  {
                    [...Array(rating)].map((i, index) => <li key={index}><FaStar className="rating-icon"/></li>)
                  }
                </ul>
                <Link href={`/property/${id}`} className="item-title">{name}</Link>
                <p>${price}</p>
              </div>
            </li>
            )
          }
        </ul>
      </div>

      {/* Search Properties */}
      {
        data === "property-details" && (
        <div className="details-box">
          <div className="details-title">
            <h5>Search Properties</h5>
          </div>
          {/* filter options */}
          <Filter data="sidebar"/>
        </div>
      )}

      {/* Drop Messege For Book */}
      <div className="details-box">
        <div className="details-title">
          <h5>Drop Messege For Book</h5>
        </div>
        <ContactFrom data="sidebar"/>
      </div>

      {/* Latest Blogs */}
      <div className="details-box blog-box">
        <div className="details-title">
          <h5>Latest Blogs</h5>
        </div>
        <ul className="blog-list">
          {
            blogs?.slice(0,3).map(({id, title, image, date}) => 
            <li key={id} className="d-flex align-items-center">
              <div className="image">
                <Image src={image} alt="Latest blog image" width={648} height={226}/>
              </div>
              <div className="others">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="d-flex align-items-center text-truncate"><IoCalendarNumberOutline className='date-icon'/>{date}</span>
                  <Link href={`/blog/${id}`} className="blog-details-btn"><HiArrowUpRight className='details-icon'/></Link>
                </div>
                <h4>{title.length > 26 ? title.substring(0, 26) + "..." : title}</h4>
              </div>
            </li>
            )
          }
        </ul>
      </div>

      {/* Share on */}
      <div className="details-box social-box">
        <div className="details-title">
          <h5>Share on</h5>
        </div>
        <ul className="social-icon-list d-flex align-items-center">
          <li><a href="#!"><FaTwitter className='social-icon'/></a></li>
          <li><a href="#!"><FaYoutube className='social-icon'/></a></li>
          <li><a href="#!"><FaFacebookF className='social-icon'/></a></li>
          <li><a href="#!"><FaLinkedinIn className='social-icon'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default InnerSidebar