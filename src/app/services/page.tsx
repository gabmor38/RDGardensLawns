/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from '../../../public/pic1.png'
import pic2 from '../../../public/pic2a.jpg'
import pic3 from '../../../public/pic3.png'
import pic4 from '../../../public/pic4.jpg'
import pic9 from '../../../public/pic9.png'
import pic5 from '../../../public/pic5b.jpg'
import Image from 'next/image'



export default function Services() {
  return (
    <div id="services" className="mt-5 mb-5" style={{display: 'flex', flexDirection: 'column'}}>

        <div className="mx-auto p-2 flex flex-column">
          <h2 className="text-2xl text-center h2 mb-5">Residential and Commercial Landscaping Services</h2>
        </div>

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100">
                <Image src={pic1} className="card-img-top card-img-fixed" alt="Mulched stone garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Lawn Mowing</h4>
                  <p className="card-text">Lawn mowing available weekly or biweekly, with optional spring and fall cleanups.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <Image src={pic2} className="card-img-top card-img-fixed" alt="Earthy Zen garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Retaining Walls & Patios</h4>
                 <p className="card-text">Installation of patios and retaining walls for functional and attractive garden spaces.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <Image src={pic3} className="card-img-top card-img-fixed" alt="Low-maintenance garden"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Garden Installation</h4>
                  <p className="card-text">Offering professional garden installation projects, including the design and installation of new and updated gardens.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
                <Image src={pic9} className="card-img-top card-img-fixed" alt="Natural evergreen privacy fence"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Yard Work (On-Demand)</h4>
                  <p className="card-text">Flexible, on-demand yard work services to meet your immediate landscaping needs.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
                <Image src={pic5} className="card-img-top card-img-fixed" alt="flower bed"/>
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Spring & Fall Clean-Ups</h4>
                  <p className="card-text">Comprehensive seasonal clean-ups to refresh and prepare your yard for the changing seasons.</p>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 ">
                <Image src={pic4} className="card-img-top  card-img-fixed" alt="sod and soil transformation" />
                <div className="card-body" style={{borderBottom: '5px solid #818C78', borderRadius: '5px'}}>
                  <h4>Sod Installation</h4>
                  <p className="card-text">Proven installation of sod to create new lawns or replace existing ones.</p>
                </div>
              </div>
            </div>
            <div className=" mb-5"></div>
          </div>
        </div>
    </div>
   
  );
}
