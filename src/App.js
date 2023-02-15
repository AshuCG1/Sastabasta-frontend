import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Wishlist from './components/wishlist/wishlist';
import Register from './components/customer/register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/customer/home';
import AddProduct from './components/admin/addProduct';
import UpdateProduct from './components/admin/updateProduct';
import ViewCustomer from './components/admin/viewCustomers';
import UpdateCustomer from './components/customer/updateCustomer';
import Product from './components/product/Product';
function App() {
  return (
    <div className="App">
    
    <Router>
        
        <div className='box'>
          <Switch>
            <Route exact path='/' component={Register}></Route>
            <Route exact path='/addproduct' component={AddProduct}></Route>
            <Route exact path='/products' component={Products}></Route>
            <Route exact path='/viewcustomer' component={ViewCustomer}></Route>
            <Route exact path='/wishlist' component={Wishlist}></Route>
            <Route exact path="/updateCustomer/:custId" component={UpdateCustomer}></Route>
            
          </Switch>
        </div>
       
      </Router>
      {/* <Route path='/' element={ <Register/> }/>
        <Route path='/register' element={ <Register /> }/>
        {/* <Route path='/login' element={ <Login /> }/> }
        <Route path='/products' element={ <Products/> }/>
        <Route path='/wishlist' element={ <Wishlist/> }/>
        <Route path='/addproduct' element={ <AddProduct/> }/>
        <Route path='/updateproduct' element={ <UpdateProduct/> }/>
        <Route path='/viewcustomer' element={ <ViewCustomer/> }/>
  <Route path='/updateCustomer/:id' element={<UpdateCustomer/>}/> */}

     
    </div>
    
  );
}

export default App;
