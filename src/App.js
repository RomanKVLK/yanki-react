import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound.jsx';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Favorites from './pages/Favorites';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
