import { createContext, useState, useEffect } from 'react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/navigation/Footer';
import Loader from '../shared/Loader';


export const SaveToLocalContext = createContext({});

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [getCategory, setGetCategory] = useState('');
  const [activeBtn, setActiveBtn] = useState('all');
  const [getCity, setGetCity] = useState(null);
  const [mainFilter, setMainFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetFilter, setResetFilter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const body = document.querySelector('body');
    showNav ? body.style.overflow = "hidden" : body.style.overflow = "visible";
    
  },[showNav]);

  const setCategoryLocal = (cat) => {
    setGetCategory(cat);
    setShowNav(false);
    setGetCity(null);
    setMainFilter(null);
    setActiveBtn(cat);
    setResetFilter(true);
  }

  return (
    <>
    <SaveToLocalContext.Provider value={{
        showNav,
        setShowNav,
        getCategory,
        setGetCategory,
        setCategoryLocal,
        getCity,
        setGetCity,
        mainFilter,
        setMainFilter,
        activeBtn,
        setActiveBtn,
        resetFilter,
        setResetFilter
      }}>
      {loading && <Loader/>}
      <Navbar/>
        <main>
          {children}
        </main>
      <Footer/>
      </SaveToLocalContext.Provider>
    </>
  )
}

export default Layout