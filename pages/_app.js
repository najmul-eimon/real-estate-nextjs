import Layout from '../components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/banner.css';
import '../styles/filter-option.css';
import '../styles/achievment.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
