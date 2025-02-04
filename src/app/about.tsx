import "bootstrap/dist/css/bootstrap.min.css"; 


export default function About() {
  return (
    <div id="about"  className="mt-5 flex flex-column" style={{  alignItems:'center'}}>
       <h2 className="mb-5 h1">Our Story</h2>
       <div className="container mt-3" style={{display:'flex'}}>
        <div>
          <p className="fs-4"><strong>Richard D Softscape & Landscaping</strong> was built from a passion for transforming outdoor spaces. With <strong>30+ years of experience</strong>, I’ve worked on major projects, including contracts for <strong>NNC Ottawa</strong> and <strong>DND headquarters</strong> on Carling Avenue.</p>
          
          <p className="fs-4">What started as a part-time passion <strong>15 years ago</strong> has grown into a trusted landscaping service, backed by a <strong>skilled, dedicated team</strong> committed to quality and excellence. Now, I’m taking the next step—running the business <strong>full-time</strong> to better serve our clients.</p>
          
          <p className="fs-4">We specialize in <strong>custom landscaping solutions</strong> tailored to your unique needs. Whether it's routine maintenance or a full garden transformation, we’re here to bring your vision to life.</p>
        </div>


      </div>
    </div>
   
  );
}
