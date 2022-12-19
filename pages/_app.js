import Layout from '../components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/banner.css';
import '../styles/filter-option.css';
import '../styles/achievment.css';
import '../styles/properties.css';
import '../styles/property-modal.css';
import '../styles/place.css';
import '../styles/blog.css';
import '../styles/contacts.css';
import '../styles/about.css';
import '../styles/partner.css';
import '../styles/property-details.css';
import '../styles/inner-sidebar.css';
import '../styles/not-found.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
