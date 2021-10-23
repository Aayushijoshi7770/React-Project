import {useRef} from 'react';
import './ChangePassword.css';

import {useHistory} from 'react-router-dom';

export default function ChangePassword() {

        const EmailRef=useRef();
        const OldPasswordRef=useRef();
        const NewPasswordRef=useRef();
        const ConfirmPasswordRef=useRef();
        const history=useHistory();



    const SubmitHandler=(e)=>{
        e.preventDefault();
        const enteredEmailRef=EmailRef.current.value;
        const enteredOldPasswordRef=OldPasswordRef.current.value;
        const enteredNewPasswordRef=NewPasswordRef.current.value;
        const enteredConfirmPasswordRef=ConfirmPasswordRef.current.value;
     
      

    fetch('http://127.0.0.1:8000/api/change-password?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5',{
            method: 'POST',
            body: JSON.stringify({
                    email:enteredEmailRef,
                    old_password:enteredOldPasswordRef,
                      new_password:enteredNewPasswordRef,
                      confirm_password:enteredConfirmPasswordRef      
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            // assumption: Always succeeds!
                   
                 
          }).then((data)=>{
              history.replace("/profile");
          });
    }
    return (
         <form method="POST" onSubmit={SubmitHandler} className="change">
             <h1 id="heading" >Your Profile Page</h1>
             <div className="change-p">
          <label id="new-p" htmlFor='new-password'>Email</label>
          <input className="form-control" autocomplete="off" type='email' ref={EmailRef} id='new' />
        </div><br/>
        <div className="change-p">
          <label id="new-p" htmlFor='new-password'>Old Password</label>
          <input className="form-control" autocomplete="off" type='password' ref={OldPasswordRef} id='new' />
        </div><br/>
        <div className="change-p">
          <label id="new-p" htmlFor='new-password'>New Password</label>
          <input className="form-control" type='password' ref={NewPasswordRef} id='new' />
        </div><br/>
        <div className="change-p">
          <label id="new-p" htmlFor='new-password'>Confirm  Password</label>
          <input className="form-control" type='password' ref={ConfirmPasswordRef} id='new' />
        </div><br/>&nbsp;
        <div className="something">
          <button className="btn btn-primary" id="something">Change Password</button>
        </div>
      </form> 
        
    );
}
