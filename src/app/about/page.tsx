/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div
      id="about"
      className="mt-5 flex flex-column"
      style={{ alignItems: "center" }}
    >
      <div className="mx-auto p-2 ">
        <h1 className="mx-auto p-2 h1">Our Story</h1>
      </div>
     
      <div className="mx-auto p-2 ">
        <h2 className="h2" style={{color: 'olive'}}>Over 30 Years of Landscaping Excellence</h2>
      </div>

      <div className="card mb-5" style={{ border: "none", padding: "20px" }}>
        <div className="row g-1">
          <div className="col-md-4">
            <img
              src="/pond.png"
              className="img-fluid rounded-start"
              alt="Garden Retreat with Pond"
              style={{ marginLeft: "30px", marginTop: "50px" }}
            />
          </div>
          <div className="col-md-6">
            <div
              className="card-body"
              style={{ marginLeft: "70px", textAlign: "justify" }}
            >
              <p className="fs-4">
                At <strong>RDoucet Everterra Gardens & Lawn care</strong>, we bring over 30 years of expertise in transforming outdoor spaces with precision and care. 
                Our experience includes major projects for NNC Ottawa and the DND headquarters on Carling Avenue, showcasing our ability to deliver high-quality landscaping solutions on a large scale.
              </p>

              <p className="fs-4">
              What began as a part-time passion 15 years ago has flourished into a trusted, full-service landscaping business. 
              Backed by a skilled and dedicated team, we are committed to providing exceptional craftsmanship and outstanding customer service.
              </p>

              <p className="fs-4">
              We specialize in <strong>residential and commercial landscaping</strong>, offering tailored solutions to enhance your outdoor spaces. 
              Whether you need routine maintenance or a complete landscape transformation, we are here to bring your vision to life with professionalism and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 "></div>
    </div>
  );
  }