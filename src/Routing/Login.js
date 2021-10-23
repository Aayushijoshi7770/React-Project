import { useState ,useRef,useContext} from 'react';
import AuthContext from '.././store/Auth-Context';
import {Link} from 'react-router-dom';


import "./Login.css";


const Login = () => {
 
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const authCtx=useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const handleSubmit=(e)=>
  {
     e.preventDefault();
     
     const enteredEmail=emailInputRef.current.value;
     const enteredPassword=passwordInputRef.current.value;
       let url;
    if (isLogin) {
      url ='http://127.0.0.1:8000/api/login?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5';
       
    } else {
     url =  'http://127.0.0.1:8000/api/register?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5';
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
      
            throw new Error(errorMessage);
          });
        }
      }) .then((data) => {
        authCtx.login(data.token);
        console.log(data);
        
      }) .catch((err) => {
        alert(err.message);
      });
  };

    


  return (
   
<>
     
    <div id="form"className="container">
    <h1 id="h1">{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form  method ="POST" onSubmit={handleSubmit}>

      < div className="form-group">
       
        <label htmlFor='email'> Email</label>
        <input className="form-control" autocomplete="off" type='email' id='email' ref={emailInputRef} />
      
      
    </div>
    
    <div className="form-group">
        <label htmlFor='password'>Password</label>
        <input className="form-control" type='password' autocomplete="off" id='password'  ref={passwordInputRef} />
    
    </div><br/>
  
        {!isLoading && <button id="button1" className="btn btn-primary">{isLogin ? 'Login' : 'Create Account'}</button>}
       {isLoading && <p>Sending request...</p>}
      <br/><br/>
        <button id="button" type='submit' className="btn btn-primary"  onClick={switchAuthModeHandler}>
          {isLogin ?'Create new account' : 'Login with existing account'} 
        </button>
  <div>
 
  </div>
    </form><br/>
    <button className="btn btn-primary"  id="forgot"> <Link  to= "/forgotpassword">Forgot Password?</Link></button>
  </div>

</>
  );
  }

export default Login;
