import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import BookTable from './pages/BookTable';
import Cart from './pages/Cart';
import OrderOnline from './pages/OrderOnline';
import Footer from './components/footer/Footer';
import BookingDone from './pages/BookingDone';

function App() {
  return (
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
          <Route path='/orderonline' element={<OrderOnline />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
