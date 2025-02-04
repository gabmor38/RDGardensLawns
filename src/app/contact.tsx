import "bootstrap/dist/css/bootstrap.min.css"; 
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contact" className="mt-5 flex flex-column" >
     
      <div className="mx-auto p-2">
          <h2 className="mx-auto p-2 mb-5">Get in touch with us</h2>
      </div>

      <div className="container text-center">
        

      <div style={{display: 'flex', alignItems: 'center', width: '500px', marginTop:'20px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'white',width:'50px', height:'50px', borderRadius: '5px',backgroundColor: '#5C7285', padding: '10px'}}/>
          <div style={{textAlign: 'justify'}}>
            <p style={{fontSize: '18px',  margin:'0px 10px'}}><strong>Call us</strong></p>
            <p style={{margin:'0px 10px'}}>613-290-8191</p>
          </div>
      
      </div>

      <div style={{display: 'flex', alignItems: 'center', width: '500px', marginTop:'20px'}}>
          <FontAwesomeIcon icon={faEnvelope} style={{color:'white',width:'50px', height:'50px', borderRadius: '5px',backgroundColor: '#5C7285', padding: '10px'}}/>
          <div style={{textAlign: 'justify'}}>
            <p style={{fontSize: '18px',  margin:'0px 10px'}}><strong>Send an email</strong></p>
            <p style={{margin:'0px 10px'}}>rickdsoftscaping@gmail.com</p>
          </div>
      
      </div>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
      </div>
    </div>
   
  );
}
