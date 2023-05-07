import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-0" style={{ backgroundColor: '#FE414D', marginTop: "auto" }}>
        <div className="container">
          <div className="row mt-4 mb-1">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <ul style={{listStyle:"none"}}>
                <li class="my-2" style={{fontWeight:"900", fontSize:"23px"}}>LINKS</li>
                <li class="my-2 text-white fw-bold">Home</li>
                <li class="my-2 text-white fw-bold">Sign in</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <ul style={{listStyle:"none"}}>
              <li class="my-2" style={{fontWeight:"900", fontSize:"23px"}}>JOIN US</li>
              <li class="my-2 text-white fw-bold">Sign up</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <ul style={{listStyle:"none"}}>
              <li class="my-2" style={{fontWeight:"900", fontSize:"23px"}}>VIEW MORE</li>
                <li class="my-2 text-white fw-bold">About</li>
                <li class="my-2 text-white fw-bold">Events</li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <ul style={{listStyle:"none"}}>
              <li class="my-2" style={{fontWeight:"900", fontSize:"23px"}}>FOLLOW US</li>
                <li class="my-2 text-white fw-bold">Instagram</li>
                <li class="my-2 text-white fw-bold">Twitter</li>
                <li class="my-2 text-white fw-bold">Facebook</li>
                <li class="my-2 text-white fw-bold">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer