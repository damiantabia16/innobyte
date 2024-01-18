import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PCs from './pages/PCs';
import NotebookProducts from './pages/NotebookProducts';
import PCCompsProducts from './pages/PCCompsProducts';
import PCPSections from './pages/PCPSections';
import PeripheralsCompsProducts from './pages/PeripheralsCompsProducts';
import PPSections from './pages/PPSections';
import OthersCompsProducts from './pages/OthersCompsProducts';
import OtCSections from './pages/OtCSections';
import Product from './pages/Product';
import ShopList from './pages/ShopList';
import Purchased from './pages/Purchased';
import Products from './pages/Products';
import Results from './pages/Results';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <CartProvider>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' index element={<Home />}></Route>
        <Route path='pc-armadas' element={<PCs />}></Route>
        <Route path='notebooks' element={<NotebookProducts />}></Route>
        <Route path='componentes-de-pc' element={<PCCompsProducts />}></Route>
        <Route path='componentes-de-pc/:category' element={<PCPSections />}></Route>
        <Route path='perifericos' element={<PeripheralsCompsProducts />}></Route>
        <Route path='perifericos/:category' element={<PPSections />}></Route>
        <Route path='otros' element={<OthersCompsProducts />}></Route>
        <Route path='otros/:category' element={<OtCSections />}></Route>
        <Route path='producto/:id' element={<Product />}></Route>
        <Route path='carrito' element={<ShopList />}></Route>
        <Route path='comprado' element={<Purchased />}></Route>
        <Route path='productos' element={<Products />}></Route>
        <Route path='resultado/:searchTerm' element={<Results />}></Route>
      </Routes>
      <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
