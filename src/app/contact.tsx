/* eslint-disable @typescript-eslint/no-explicit-any */
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormDataType } from "./page";

interface ContactProps {
  handleSubmitForm: (value: any) => void;
  formData: FormDataType;
  updateFormData: (field: any, value: any) => void;
  errors: any;
}

export default function Contact({handleSubmitForm,formData, errors, updateFormData,}: ContactProps) {

  const onChangeField = (e: any): void => {
    updateFormData(e.target.id, e.target.value);
  };

  const validateSubmitForm = (e: any):void => {
    e.preventDefault();

    const fieldErrors: Record<string, string> = {};
    const phonePattern = /^(\+1\s?)?(\()?([2-9][0-9]{2})(\))?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 
    Object.entries(formData).forEach(([key, value]) => {
       if (value.trim() === "") {
        fieldErrors[key] = "Required field"
       }
      else if (key === "phone" && !phonePattern.test(value)) {
        fieldErrors[key] = "Enter a valid phone number"
       }
       else if (key === 'email' && !emailPattern.test(value)) {
        fieldErrors[key] = "Enter a valid email address"
       } 

    });

    handleSubmitForm(fieldErrors)
  }

  return (
    <div id="contact" className="mt-5 flex flex-column">
      <div className="mx-auto p-2">
        <h2 className="mx-auto p-2 mb-5">Get in touch with us</h2>
      </div>

      <div className="container text-center mb-5">
        <div className="row g-1">
          <div className="col-md-1"></div>
          <div className="col-md-4 mb-3">
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
          <div
            className="col-md-5 rounded-2 p-3"
            style={{ background: "rgb(226 224 200 / 36%)" }}
          >
            <form className="row g-3 " >
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={formData.firstName}
                  onChange={onChangeField}
                  required
                  style={{ border: errors.firstName ? "2px solid #840c0c" : "" }}
                />
                {errors.firstName && (
                  <div className="inputInvalid" >{errors.firstName}</div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={formData.lastName}
                  onChange={onChangeField}
                  required
                  style={{ border: errors.lastName? "2px solid #840c0c" : "" }}
                />
                {errors.lastName  && (
                  <div className="inputInvalid">{errors.lastName}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={onChangeField}
                  required
                  style={{ border: errors.email ? "2px solid #840c0c" : "" }}
                />
                { errors.email && (
                  <div className="inputInvalid">{errors.email}</div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control"
                  id="phone"
                  placeholder="(613)-XXX-XXXX"
                  value={formData.phone}
                  onChange={onChangeField}
                  required
                  style={{ border: errors.phone ? "2px solid #840c0c" : "" }}
                />
                { errors.phone && (
                  <div className="inputInvalid">{errors.phone}</div>
                )}
                
              </div>
              <div className="col-md-6">
                <label htmlFor="service" className="form-label">
                  Service
                </label>
                <select
                  id="service"
                  className="form-select"
                  aria-label="Services"
                  value={formData.service}
                  onChange={onChangeField}
                  style={{ border: errors.service? "2px solid #840c0c" : "" }}
                >
                  <option value="0">Please select an option</option>
                  <option value="Yard Work">Yard Work</option>
                  <option value="Garden Maintenance">Garden Maintenance</option>
                  <option value="3">Garden Cleanups</option>
                  <option value="4">Sod Installation</option>
                  <option value="5">Retaining Walls & Patios</option>
                  <option value="6"> Seasonal garden clean-up</option>
                  <option value="7">Custom Garden Care</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Leave us a message"
                  value={formData.message}
                  onChange={onChangeField}
                  required
                  style={{ border: errors.message ? "2px solid #840c0c" : "" }}
                />
                {errors.message && (
                  <div className="inputInvalid">{errors.message}</div>
                )}
              </div>

              <div className="col-12 flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label ms-3" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#5C7285", color: "white" }}
                  onClick={validateSubmitForm}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-5"></div>
    </div>
  );
}
