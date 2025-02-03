import "bootstrap/dist/css/bootstrap.min.css"; 


export default function Services() {
  return (
    <div id="services" >
        <div className="mx-auto p-2">
          <h2 className="mx-auto p-2">Our Services</h2>
        </div>


        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card h-100 " style={{width: '18rem'}}>
                <img src="/pic1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4>Lawn Mowing</h4>
                 <p className="card-text">Lawn mowing available weekly or biweekly, with optional spring and fall cleanups.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 " style={{width: '18rem'}}>
                <img src="/pic2.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4>Garden Maintenance</h4>
                 <p className="card-text">Continuous garden maintenance with optional spring and fall cleanups.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 " style={{width: '18rem'}}>
                <img src="/pc3.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4>Garden Installation</h4>
                  <p className="card-text">Offering professional installation of new and updated garden plantings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   
  );
}
