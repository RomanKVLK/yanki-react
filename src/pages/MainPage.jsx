import React from 'react';
import Header from '../components/Header';

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <div>
        <h4>Новая коллекция</h4>
        <p>
          Смотеть новинки
          <img src="/img/arrow-right.svg" alt="Arrow" />
        </p>
      </div>
    </div>
  );
};

export default MainPage;
