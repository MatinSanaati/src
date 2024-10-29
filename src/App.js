import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './Cart';

function App() {
  // تعریف حالت تم
  const [theme, setTheme] = useState('light'); // تم پیش‌فرض 'light'

  // تعریف تابع ThemeHandler
  const ThemeHandler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>

        {/* Start-Header */}
        <header className="App-header">
          <div className="box-theme">
            <button className='btn-theme' onClick={ThemeHandler}>Theme</button>
          </div>
          <div className="box-store">
            <Route path="Cart" element={<Cart />} />
          </div>
        </header>

        {/* End-Header */}
        <Routes>
          {/* Start-App-Main */}
          <main className="App-main">
            {/* Start-Box-1 */}
            <div className="box">
              <div className="product-image">
                <img src="https://via.placeholder.com/300" alt="Product" />
              </div>
              <div className="product-details">
                <h2 className="product-title">عنوان کالا</h2>
                <div className="product-info">
                  <span className="product-price">قیمت: ۱۰۰,۰۰۰ تومان</span>
                  <span className="product-stock">موجودی: ۲۰ عدد</span>
                </div>
                <button className="add-to-cart">بنداز تو سبد خرید😉</button>
              </div>
            </div>
            {/* End-Box-1 */}

            {/* Start-Box-2 */}
            <div className="box">
              <div className="product-image">
                <img src="https://via.placeholder.com/300" alt="Product" />
              </div>
              <div className="product-details">
                <h2 className="product-title">عنوان کالا</h2>
                <div className="product-info">
                  <span className="product-price">قیمت: ۱۰۰,۰۰۰ تومان</span>
                  <span className="product-stock">موجودی: ۲۰ عدد</span>
                </div>
                <button className="add-to-cart">بنداز تو سبد خرید😉</button>
              </div>
            </div>
            {/* End-Box-2 */}

            {/* Start-Box-3 */}
            <div className="box">
              <div className="product-image">
                <img src="https://via.placeholder.com/300" alt="Product" />
              </div>
              <div className="product-details">
                <h2 className="product-title">عنوان کالا</h2>
                <div className="product-info">
                  <span className="product-price">قیمت: ۱۰۰,۰۰۰ تومان</span>
                  <span className="product-stock">موجودی: ۲۰ عدد</span>
                </div>
                <button className="add-to-cart">بنداز تو سبد خرید😉</button>
              </div>
            </div>
            {/* End-Box-3 */}

            {/* Start-Box-4 */}
            <div className="box">
              <div className="product-image">
                <img src="https://via.placeholder.com/300" alt="Product" />
              </div>
              <div className="product-details">
                <h2 className="product-title">عنوان کالا</h2>
                <div className="product-info">
                  <span className="product-price">قیمت: ۱۰۰,۰۰۰ تومان</span>
                  <span className="product-stock">موجودی: ۲۰ عدد</span>
                </div>
                <button className="add-to-cart">بنداز تو سبد خرید😉</button>
              </div>
            </div>
            {/* End-Box-4 */}

          </main>
          {/* End-App-Main */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;