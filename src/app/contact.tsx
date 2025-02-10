import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {

  const onHandleSubmit = (value: string) :void => {
    console.log(value)
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
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName"/>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="email@example.com"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="(613)-XXX-XXXX"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="service" className="form-label">Service</label>
              <input type="text" className="form-control" id="service"/>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" placeholder="Leave us a message"/>
            </div>
            
           
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn" style={{backgroundColor:"#5C7285", color: 'white'}} onClick={() => onHandleSubmit}>Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
