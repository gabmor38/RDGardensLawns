'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import { CldImage } from "next-cloudinary";



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
                <CldImage
                  src="pic1"
                  width="500"
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"garden with rocks"}
                  className={"radiusTop"}
                  
                />
                <div className="card-body cardBorderBottom" >
                  <h4>Lawn Mowing</h4>
                  <p className="card-text">Lawn mowing available weekly or biweekly, with optional spring and fall cleanups.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <CldImage
                  src="pic2_fftakc"
                  width="500" 
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"zen garden"}
                  className={"radiusTop"}
                />
                <div className="card-body cardBorderBottom">
                  <h4>Retaining Walls & Patios</h4>
                 <p className="card-text">Installation of patios and retaining walls for functional and attractive garden spaces.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <CldImage
                  src="ymvdc9naixeskcavvvo6"
                  width="500" 
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"entrance garden"}
                  className={"radiusTop"}
                />
                <div className="card-body cardBorderBottom ">
                  <h4>Garden Installation</h4>
                  <p className="card-text">Offering professional garden installation projects, including the design and installation of new and updated gardens.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
              <CldImage
                  src="iivnqoqvrsez6ok3xbpq"
                  width="500" 
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"Natural evergreen privacy fence"}
                  className={"radiusTop"}
                />
                
                <div className="card-body cardBorderBottom ">
                  <h4>Yard Work (On-Demand)</h4>
                  <p className="card-text">Flexible, on-demand yard work services to meet your immediate landscaping needs.</p>
                </div>
              </div>
            </div>
            <div className="col  mb-5">
              <div className="card h-100 ">
                <CldImage
                  src="rn5ryke4e1ey5b0ceanv" 
                  width="500" 
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"flower bed"}
                  className={"radiusTop"}
                />
                <div className="card-body cardBorderBottom">
                  <h4>Spring & Fall Clean-Ups</h4>
                  <p className="card-text">Comprehensive seasonal clean-ups to refresh and prepare your yard for the changing seasons.</p>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100 ">
                <CldImage
                  src="xzos6wuyt1alxp5cbqsi"
                  width="500" 
                  height="320"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                  alt={"new sod installation"}
                  className={"radiusTop"}
                />
                <div className="card-body cardBorderBottom" >
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
