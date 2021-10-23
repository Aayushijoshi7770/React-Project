import {useRef} from 'react'
import './ForgotPassword.css';
import {useHistory} from 'react-router-dom';


 function ForgotPassword() {
    const emailInputRef=useRef();
    const history=useHistory();

  const   handleSubmit=(e)=>
  {
        e.preventDefault();

        const enteredEmail=emailInputRef.current.value;
           
        fetch('http://127.0.0.1:8000/api/forgot-password?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5', {
            method: 'POST',
            body: JSON.stringify({
        
                email:enteredEmail,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            // assumption: Always succeeds!
      
                 history.replace('/resetpassword');
          });

    }
    return (
        
            <form method='POST' className="submit" onSubmit={handleSubmit}>
             
                <div  className="form-group">
                    <label id="Label" htmlFor="forgot password"> Enter the Email </label><br/>&nbsp;
                    <input type="email" id="Input" autocomplete="off" className="form-control" ref={emailInputRef} />
                </div>&nbsp;
                <div className="form-group">
                    <button  id="perform" className="form-control" className="btn btn-primary" >Forgot Password</button>
                </div>
            </form>
        
    )
}
export default ForgotPassword;