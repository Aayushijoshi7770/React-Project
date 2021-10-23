import {useRef,useContext} from 'react';
import './ResetPassword.css';

import {useHistory} from 'react-router-dom';
 
export default function ResetPassword(props) {
 
   

     const history=useHistory();

    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const confirmpasswordInputRef=useRef();


const HandleSubmit=(e)=>
    {
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        const enteredConfirmPassword=confirmpasswordInputRef.current.value;

        const queryParams = new URLSearchParams(props.location.search);

        const token = queryParams.get('token');



        fetch('http://127.0.0.1:8000/api/reset-password?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5', {
            method: 'POST',
            body: JSON.stringify({
                
                   email:enteredEmail,
                    password:enteredPassword,
                     cpassword:enteredConfirmPassword,
                     token:token
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            // assumption: Always succeeds!
      
                 
          }).then((data)=>{
              history.replace('/login');
          });
    }

    return (
        <>
            <form className="form" method="POST" onSubmit={HandleSubmit}>
           
            
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" autocomplete="off" type="email" id="email" ref={emailInputRef}/>
                </div><br/>
                <div className="control">
                    <label htmlFor="password" >Password</label>
                    <input className="form-control" type="password" ref={passwordInputRef}/>
                </div><br/>
                <div className="control">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input className="form-control" type="password" ref={confirmpasswordInputRef}/>
                </div>&nbsp;
                <div className="action">
                    <button className="btn btn-primary">Reset Password</button>
                </div>
            </form>

</>
    );
}
