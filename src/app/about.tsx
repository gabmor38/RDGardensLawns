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
        <h2 className="mx-auto p-2 h1">Our Story</h2>
      </div>

      <div className="card mb-3" style={{ border: "none", padding: "20px" }}>
        <div className="row g-1">
          <div className="col-md-4">
            <img
              src="/pond.png"
              className="img-fluid rounded-start"
              alt="pond"
              style={{ marginLeft: "30px", marginTop: "50px" }}
            />
          </div>
          <div className="col-md-6">
            <div
              className="card-body"
              style={{ marginLeft: "70px", textAlign: "justify" }}
            >
              <p className="fs-4">
                <strong>Richard D Softscape & Landscaping</strong> was built
                from a passion for transforming outdoor spaces. With{" "}
                <strong>30+ years of experience</strong>, I’ve worked on major
                projects, including contracts for <strong>NNC Ottawa</strong>{" "}
                and <strong>DND headquarters</strong> on Carling Avenue.
              </p>

              <p className="fs-4">
                What started as a part-time passion{" "}
                <strong>15 years ago</strong> has grown into a trusted
                landscaping service, backed by a{" "}
                <strong>skilled, dedicated team</strong> committed to quality
                and excellence. Now, I’m taking the next step—running the
                business <strong>full-time</strong> to better serve our clients.
              </p>

              <p className="fs-4">
                We specialize in <strong>residential and commercial landscaping solutions</strong>{" "}
                tailored to your unique needs. Whether it&apos;s routine maintenance
                or a full garden transformation, we’re here to bring your vision
                to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
