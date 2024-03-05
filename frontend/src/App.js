import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import BookTable from './pages/BookTable';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

import OrderOnline from './pages/OrderOnline';
import Footer from './components/footer/Footer';
import BookingDone from './pages/BookingDone';
import ProductDetail from './components/products/Product[id]';
import OrderDetail from './components/orders/Order[id]';
import { CartProvider } from './pages/CartContext';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/booktable' element={<BookTable />} />
            <Route path='/bookingdone' element={<BookingDone />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/orderonline' element={<OrderOnline />} />


            <Route path='/order/:id' element={<OrderDetail />} />
            <Route path='/product/:id' element={<ProductDetail />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      /</CartProvider>
  );
}

export default App;
