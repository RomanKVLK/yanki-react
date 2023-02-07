import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PagesNotFound/index.jsx';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Favorites from './pages/Favorites';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import Exchange from './pages/Exchange';
import Payment from './pages/Payment';
import Contacts from './pages/Contacts';
import PublicOffer from './pages/PublicOffer';
import FullItem from './pages/FullItem';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/exchange-and-return" element={<Exchange />} />
        <Route path="/payment-and-delivery" element={<Payment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/public-offer" element={<PublicOffer />} />
        <Route path="/full-item" element={<FullItem />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
