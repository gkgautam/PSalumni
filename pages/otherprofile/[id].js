import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export async function getServerSideProps(context) {

  const id = context.params.id;

  const res = await fetch(`http://localhost:3000/api/${id}`)
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

function otherprofile({ data }) {

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="container">
          <div className="row my-3 d-flex justify-content-center bg-light rounded-5">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
              <Image src={data.profile_img?data.profile_img:'https://static.licdn.com/aero-v1/sc/h/244xhbkr7g40x6bsu4gi6q4ry'} className="rounded-circle border border-primary border-5" width="300px" height="300px" alt="profileImage" />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 my-3">
            <h1 className=""><i>{data.name}</i></h1>
            <h5 className="card-text"><strong>Title :</strong> {data.title}</h5>
            <h5 className="card-text"><strong>PS Id :</strong> {data.ps_id}</h5>
            <h5 className="card-text"><strong>Email Id :</strong> {data.email}</h5>
            <h5 className="card-text"><strong>Current Status :</strong> {data.curr_status}</h5>
            <h5 className="card-text"><strong>Person Tpye :</strong> {data.person_type}</h5>
            <h5 className="card-text"><strong>Joining Date :</strong> {data.start_date}</h5>
            <h5 className="card-text"><strong>Leaving Date :</strong> {data.end_date}</h5>
            <h5 className="card-text"><strong>Business Unit :</strong> {data.business_unit}</h5>
            <h5 className="card-text"><strong>LinkedIn :</strong> <a href={data.social_media} target="_blank">{data.social_media}</a></h5>

            <Link href="#">
              <button className='btn rounded-pill my-3' style={{ boxShadow: "none", backgroundColor: "black", color: "white" }}>Contact</button>
            </Link>
            </div>
          </div>
        </div>
      </div>





      {/* <div className="card text-center">
        <div className="card-header">
          Full Profile
        </div>
        <div className="card-body">

          <h5 className="card-title">{data.name}</h5>

          <p className="card-text">{data.title}</p>
          <p className="card-text">{data.ps_id}</p>
          <p className="card-text">{data.person_type}</p>
          <p className="card-text">{data.start_date}</p>
          <p className="card-text">{data.end_date}</p>
          <p className="card-text">{data.business_unit}</p>
          <p className="card-text">{data.email}</p>
          <p className="card-text">{data.curr_status}</p>
          <a href="#" className="btn btn-primary">Message</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div> */}







      <Footer />
    </>
  )
}

export default otherprofile