import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Events = () => {
  return (
    <>
      <Navbar />

      <div className="container-fluid my-3" style={{backgroundColor:"#07A0FE"}}>

        <div className="row my-4">
          <div className="col-10 mx-auto text-center">
            <h3 className="px-1 py-1 mb-3" style={{fontFamily:"Roboto", fontSize:"30px", textShadow:"1px 1px 1px rgba(0,0,0,0.1)"}}>Thank you for the overwhelming participation in <strong>HACKATHON</strong> 2022</h3>
            <p style={{fontFamily:"Roboto", fontSize:"24px", textShadow:"1px 1px 1px rgba(0,0,0,0.1)"}}>With pandemic situation getting better, we encourage you all to go ahead with  fulfulling your offersing, get to know more people and expand your circle!</p>
            <p style={{fontFamily:"Roboto", fontSize:"26px", textShadow:"1px 1px 1px rgba(0,0,0,0.1)"}}>And don't forget to have fun</p>
            <h3 style={{fontFamily:"Roboto", fontSize:"30px", color:"#FFE63B", textShadow:"1px 1px 1px rgba(0,0,0,0.1)"}}>We will back in 2024! Stay safe and do good!</h3>
          </div>
        </div>

      </div>




      <Footer />
    </>
  )
}

export default Events