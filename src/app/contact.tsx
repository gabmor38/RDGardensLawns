/* eslint-disable @typescript-eslint/no-explicit-any */
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactProps {
  handleSubmitForm:(value: any) => void;
  formData: any;
  updateFormData:(field:any, value:any)=> void;
}

export default function Contact({ handleSubmitForm, formData, updateFormData }: ContactProps) {

  const onChangeField = (e: any) :void => {
    updateFormData(e.target.id, e.target.value);
  }

 


  return (
    <div id="contact" className="mt-5 flex flex-column">
      <div className="mx-auto p-2">
        <h2 className="mx-auto p-2 mb-5">Get in touch with us</h2>
      </div>

      <div className="container text-center">
        <div className="row g-1">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "500px",
                marginTop: "20px",
              }}
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  backgroundColor: "#5C7285",
                  padding: "10px",
                }}
              />
              <div style={{ textAlign: "justify" }}>
                <p style={{ fontSize: "18px", margin: "0px 10px" }}>
                  <strong>Call us</strong>
                </p>
                <p style={{ margin: "0px 10px" }}>613-290-8191</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "500px",
                marginTop: "20px",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "5px",
                  backgroundColor: "#5C7285",
                  padding: "10px",
                }}
              />
              <div style={{ textAlign: "justify" }}>
                <p style={{ fontSize: "18px", margin: "0px 10px" }}>
                  <strong>Send an email</strong>
                </p>
                <p style={{ margin: "0px 10px" }}>rickdsoftscaping@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 rounded-2 p-3" style={{background: 'rgb(226 224 200 / 36%)'}}>

          <form className="row g-3" action={"mailto:gabrielamorenor@gmail.com"}>
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label" >First Name</label>
              <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={onChangeField} required/>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" value={formData.lastName}  onChange={onChangeField} required/>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="email@example.com" value={formData.email}  onChange={onChangeField} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="phone" placeholder="(613)-XXX-XXXX" value={formData.phone} onChange={onChangeField} required/>
            </div>
            <div className="col-md-6">
              <label htmlFor="service" className="form-label">Service</label>
              <select id="service" className="form-select" aria-label="Services" value={formData.services} onChange={onChangeField}>
                <option value="0">Please select an option</option>
                <option value="Yard Work">Yard Work</option>
                <option value="Garden Maintenance">Garden Maintenance</option>
                <option value="Garden Cleanups">Garden Cleanups</option>
                <option value="Sod Installation">Sod Installation</option>
                <option value="Retaining Walls and Patios">Retaining Walls & Patios</option>
                <option value="Seasonal garden clean-up">Seasonal garden clean-up</option>
                <option value="Custom Garden Care">Custom Garden Care</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" placeholder="Leave us a message" value={formData.message}  onChange={onChangeField}/>
            </div>
            
           
            <div className="col-12 flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label ms-3" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn" style={{backgroundColor:"#5C7285", color: 'white'}} onClick={handleSubmitForm}>Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
