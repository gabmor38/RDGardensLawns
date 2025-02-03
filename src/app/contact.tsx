import "bootstrap/dist/css/bootstrap.min.css"; 
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div style={{display: 'flex', alignItems: 'center', width: '500px', marginTop:'20px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'white',width:'50px', height:'50px', borderRadius: '5px',backgroundColor: 'green', padding: '10px'}}/>
          <div>
            <p style={{fontSize: '18px',  margin:'0px 10px'}}><strong>Call us</strong></p>
            <p style={{margin:'0px 10px'}}>613-333-3333</p>
          </div>
      
      </div>

      <div style={{display: 'flex', alignItems: 'center', width: '500px', marginTop:'20px'}}>
          <FontAwesomeIcon icon={faPhone} style={{color:'white',width:'50px', height:'50px', borderRadius: '5px',backgroundColor: 'green', padding: '10px'}}/>
          <div>
            <p style={{fontSize: '18px',  margin:'0px 10px'}}><strong>Send </strong></p>
            <p style={{margin:'0px 10px'}}>613-333-3333</p>
          </div>
      
      </div>
      
    </div>
   
  );
}
