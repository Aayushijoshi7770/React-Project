
import './App.css';
import Navbar from  './components/Navbar';
import MainContent from './components/MainContent';
import Footer from  './components/Footer';
import Login from './Routing/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ChangePassword from './components/ChangePassword';
import ImageUpload from './components/ImageUpload';
import {BrowserRouter as Router , Route, Switch,Redirect} from 'react-router-dom';
import{useContext}from 'react';
import AuthContext  from './store/Auth-Context';



function App() {
  
  const authCtx=useContext(AuthContext);
  return (
   
      <Router> 
<div className="App-container">
<Navbar/>


</div>
  

   <Switch>
   {!authCtx.isLoggedIn&&(<Route exact path="/" component={MainContent}/>)}

    <Route exact  path="/login" component={Login}/>

    <Route exact path="/forgotpassword" component={ForgotPassword}/>

    <Route exact path="/resetpassword" component={ResetPassword}/>

    {authCtx.isLoggedIn&&(<Route exact path="/changepassword" component={ChangePassword}/>)}
    
    {authCtx.isLoggedIn&&(<Route exact path="/imageupload" component={ImageUpload}/>)}
  <Route path="*">
    <Redirect to="/"/>
  </Route>
    </Switch>

 <Footer/>

   </Router>
 

  
  );
}

export default App;
