
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (

    <div
  id="about"
  className="mt-5 flex flex-col items-center"
>
  <div className="mx-auto p-2">
    <h1 className="mx-auto p-2 text-3xl font-bold">Our Story</h1>
  </div>

  <div className="mx-auto p-2">
    <h2 className="text-2xl text-olive-600 text-center">
      Over 30 Years of Landscaping Excellence
    </h2>
  </div>

  <div className="card mb-5 p-5" style={{border: '0px'}}>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="/pond.png"
          className="img-fluid rounded"
          alt="Garden Retreat with Pond"
        />
      </div>
      <div className="w-full md:w-2/3">
        <div className="card-body text-justify">
          <p className="text-lg">
            At <strong>RD Everterra Gardens & Lawns</strong>, we bring over 30 years of expertise in transforming outdoor spaces with precision and care. 
            Our experience includes major projects for NNC Ottawa and the DND headquarters on Carling Avenue, showcasing our ability to deliver high-quality landscaping solutions on a large scale.
          </p>

          <p className="text-lg mt-4">
            What began as a part-time passion 15 years ago has flourished into a trusted, full-service landscaping business. 
            Backed by a skilled and dedicated team, we are committed to providing exceptional craftsmanship and outstanding customer service.
          </p>

          <p className="text-lg mt-4">
            We specialize in <strong>residential and commercial landscaping</strong>, offering tailored solutions to enhance your outdoor spaces. 
            Whether you need routine maintenance or a complete landscape transformation, we are here to bring your vision to life with professionalism and expertise.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-5 mb-5"></div>
</div>

  );
  }