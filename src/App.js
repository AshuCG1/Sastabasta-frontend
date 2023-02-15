import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Wishlist from './components/wishlist/wishlist';
import Register from './components/customer/register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/customer/home';
import AddProduct from './components/admin/addProduct';
import UpdateProduct from './components/admin/updateProduct';
import ViewCustomer from './components/admin/viewCustomers';
function App() {
  return (
    <div className="App">
     Test
    

     <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/register' element={ <Register /> }/>
        {/* <Route path='/login' element={ <Login /> }/> */}
        <Route path='/products' element={ <Products/> }/>
        <Route path='/wishlist' element={ <Wishlist/> }/>
        <Route path='/addproduct' element={ <AddProduct/> }/>
        <Route path='/updateproduct' element={ <UpdateProduct/> }/>
        <Route path='/viewcustomer' element={ <ViewCustomer/> }/>
      </Routes>
    </BrowserRouter>
     

     
    </div>
    
  );
}

export default App;
