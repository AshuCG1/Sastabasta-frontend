import './App.css';
import Products from './components/Products/Products';
import Wishlist from './components/wishlist/wishlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/customer/register';
import Navbar from './components/navbar/navbar';
import AddProduct from './components/admin/addProduct';
import ViewCustomer from './components/admin/viewCustomers';
import UpdateCustomer from './components/customer/updateCustomer';
import AdminLogin from './components/login/adminLogin';
import CustomerLogin from './components/login/customerLogin';
import Dashboard from './components/admin/dashboard';
import CustomerDashboard from './components/customer/customerDashboard';
import ViewProduct from './components/customer/viewProduct';
import ViewProductAdmin from './components/admin/viewProductAdmin';
import Bagpack from './components/Products/Types/Bagpack';
import Wallet from './components/Products/Types/Wallet';
import Business from './components/Products/Types/Business';
import Duffle from './components/Products/Types/Duffle';
import Luggage from './components/Products/Types/Luggage';

function App() {
  return (
    <div className="App">
    
    <Router>
        <Navbar/>
        <div className='box'>
          <Switch>
            <Route exact path='/' component={Register}></Route>
            <Route exact path='/login' component={CustomerLogin}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/admin-login' component={AdminLogin}></Route>
            <Route exact path='/addproduct' component={AddProduct}></Route>
            <Route exact path='/products' component={Products}></Route>
            <Route exact path='/viewcustomer' component={ViewCustomer}></Route>
            <Route exact path='/wishlist' component={Wishlist}></Route>
            <Route exact path="/updateCustomer/:custId" component={UpdateCustomer}></Route>
            <Route exact path='/adminDash' component={Dashboard}></Route>
            <Route exact path='/customerDash' component={CustomerDashboard}></Route>
            <Route exact path='/product/getProductDetailsById/:productId' component={ViewProduct}></Route>
            <Route exact path='/product/viewProductAdminById/:productId/:webId' component={ViewProductAdmin}></Route> 
            {/* type routes */}
            <Route exact path='/type=bagpack' component={Bagpack}></Route>
            <Route exact path='/type=business' component={Business}></Route>
            <Route exact path='/type=duffle' component={Duffle}></Route>
            <Route exact path='/type=luggage' component={Luggage}></Route>
            <Route exact path='/type=wallet' component={Wallet}></Route>
          </Switch>
        </div>
       
      </Router>
     

     
    </div>
    
  );
}

export default App;
