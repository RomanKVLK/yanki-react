import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
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
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/exchange-and-return" element={<Exchange />} />
        <Route path="/payment-and-delivery" element={<Payment />} />
        <Route
          path="/contacts"
          element={<Contacts searchValue={searchValue} setSearchValue={setSearchValue} />}
        />
        <Route path="/public-offer" element={<PublicOffer />} />
        <Route path="/full-item/:id" element={<FullItem />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
