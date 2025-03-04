/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormDataType } from "../page";
import {  useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";





export default function Contact( ) {


    const [formData, setFormData] = useState<FormDataType>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "0",
        message: "",
      });

    const [fieldError, setFieldError] = useState<Record<string, string>>({});
    const [captchaToken, setCaptchaToken] = useState(null);
    

    const handleCaptcha = (token:any) => setCaptchaToken(token);
  
    const onChangeField = (e: any): void => {
      const field = e.target.id;
      const fieldValue = e.target.value;
      setFormData({ ...formData, [field]: fieldValue });

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
       else if(key === 'service' && value === '0') {
        fieldErrors[key] = "Please select an option"
       }
      else if (key === "phone" && !phonePattern.test(value)) {
        fieldErrors[key] = "Enter a valid phone number"
       }
       else if (key === 'email' && !emailPattern.test(value)) {
        fieldErrors[key] = "Enter a valid email address"
       } 

    });
    

    onSubmitForm(fieldErrors)
  }



  const onSubmitForm = async (values:any) => {
    if (!captchaToken) {
      return;
    }

    if (!values || Object.keys(values).length === 0) {

      const response = await axios({
        method: "POST",
        url: "/contact/api/",
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          service: formData.service,
          gRecaptchaToken: captchaToken,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        
      });
      // console.log("res", response)
      if (response.status === 200) {
       
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "0",
          message: "",
        });
        setCaptchaToken(null);
        window.location.reload()
        
      } else {
        console.log("Failed to send message.");
      }
    } else {
      setFieldError(values)
    }
 
  };



  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''; 

  return (
    <div id="contact" className="mt-5 flex flex-column">
      <div className="mx-auto p-2">
        <h2 className="mx-auto p-2 mb-5 h2">Get in touch with us</h2>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "500px",
                marginTop: "20px",
              }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
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
                  <strong>Location</strong>
                </p>
                <p style={{ margin: "0px 10px" }}>Kemptville, ON</p>
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
                 <span className="text-danger">*</span> First Name 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={formData.firstName}
                  onChange={onChangeField}
                  required
                  style={{ border: fieldError.firstName ? "2px solid #840c0c" : "" }}
                />
                {fieldError.firstName && (
                  <div className="inputInvalid" >{fieldError.firstName}</div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                <span className="text-danger">*</span>Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={formData.lastName}
                  onChange={onChangeField}
                  required
                  style={{ border: fieldError.lastName? "2px solid #840c0c" : "" }}
                />
                {fieldError.lastName  && (
                  <div className="inputInvalid">{fieldError.lastName}</div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                <span className="text-danger">*</span>Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={onChangeField}
                  required
                  style={{ border: fieldError.email ? "2px solid #840c0c" : "" }}
                />
                { fieldError.email && (
                  <div className="inputInvalid">{fieldError.email}</div>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                <span className="text-danger">*</span>Phone
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
                  style={{ border: fieldError.phone ? "2px solid #840c0c" : "" }}
                />
                { fieldError.phone && (
                  <div className="inputInvalid">{fieldError.phone}</div>
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
                  style={{ border: fieldError.service? "2px solid #840c0c" : "" }}
                >
                  <option value="0">Please select an option</option>
                  <option value="Yard work">Yard Work</option>
                  <option value="Garden maintenance">Garden Maintenance</option>
                  <option value="Garden cleanups">Garden Cleanups</option>
                  <option value="Sod installation">Sod Installation</option>
                  <option value="Retaining walls and patios">Retaining Walls & Patios</option>
                  <option value="Season garden clean-up"> Seasonal garden clean-up</option>
                  <option value="Custom garden care">Custom Garden Care</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                <span className="text-danger">*</span>Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Leave us a message"
                  value={formData.message}
                  onChange={onChangeField}
                  required
                  style={{ border: fieldError.message ? "2px solid #840c0c" : "" }}
                />
                {fieldError.message && (
                  <div className="inputInvalid">{fieldError.message}</div>
                )}
              </div>
              
              <div>
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={handleCaptcha}
                />
              </div>
{/* 
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
              </div> */}
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
