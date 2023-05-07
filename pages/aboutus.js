import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="container">
          <div className="row my-5">
            <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 col-12 mx-auto text-center">
              <h2>About Us</h2>
              <p >For more than 30 years, we’ve helped some of the world’s biggest organizations build a competitive advantage through digital.</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 col-12 mx-auto text-center">
              <h4 className='text-center' style={{ fontWeight: "900", color: "#FE414D" }}>Our purpose</h4>
              <h5 className='text-center' style={{ fontWeight: "800" }}>We help people thrive in the brave pursuit of next</h5>
              <p style={{textShadow:"1px 1px 1px rgba(0,0,0,0.1)", fontSize:"20px"}}>
                At Publicis Sapient, we help companies and the public sector keep up with the pace of technological, societal and cultural change—all while meeting the ever-evolving demands and expectations of their customers. How? By elevating customer experiences, modernizing organizations and unlocking value through technology and data. By setting bold but achievable visions for digital transformation, we empower our business partners with true speed and agility. </p>
            </div>
          </div>
        </div>
      </div>




      <Footer />
    </>
  )
}

export default Aboutus