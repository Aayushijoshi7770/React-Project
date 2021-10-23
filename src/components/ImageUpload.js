import {useRef} from 'react'
import {useHistory} from 'react-router-dom';
import './ImageUpload.css';

export default function ImageUpload() {




     const history=useHistory();
     const FileInputRef=useRef();
  

	const HandleSubmission = (e) => {
        e.preventDefault();

        const enteredFileInputRef=FileInputRef.current.files[0];
        const formData = new FormData();
        formData.append('file', enteredFileInputRef);
	

		fetch(
			'http://127.0.0.1:8000/api/upload?key=5uSf8UznkQ5/wkWmH+QId7r54cq+rpoTmbwnu86BUfQ5',
			{ 
                method:'POST',
                body: formData,
            }
            )
                .then((response) => response.json())
                .then((result) => {
                    console.log('Success:', result);
                    history.replace('/');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });    
			
	}
	return(
   <div>
       <form id="filesubmit" method="POST" onSubmit={HandleSubmission}>
           <h1 id="head">Upload a image here</h1>
			<input type="file" id="file" name="file"  ref={FileInputRef} />
         
           
			
			<div>
				<button className="btn btn-primarty" id="press">Upload Image</button>
			</div>
            </form>
		</div>
	);
}
