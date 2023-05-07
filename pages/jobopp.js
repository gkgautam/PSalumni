import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import Image from 'next/image';


export async function getServerSideProps(ctx) {
  // const res = await fetch(`http://localhost:3000/api/jobs`);
  const res = await fetch(`${process.env.NODE_ENV=="production"?"https://psalumni.vercel.app/api/jobs":"http://localhost:3000/api/jobs"}`);
  const data = await res.json();
  return {
    props: { data },
  }
}

const Jobs = ({ data }) => {
  return (
    <>
      <Navbar />


      <div className="container-fluid">
        <div className="container">
          <div className="row my-4">
            <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 col-12 mx-auto my-2">
            <h2>Jobs...</h2>
              {
                data.length > 0 ?
                  <>
                    {
                      data.map((val) => {
                        return (
                          <div className="card my-3" style={{width: "100%"}} key={val._id}>
                            <img src={val.job_img} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title"> <strong>Post -</strong> {val.job_title}</h5>
                                <p className="card-text"> <strong>Description :</strong> {val.job_desc}</p>
                                <p className="card-text"> <strong>Number of Vacancies :</strong> {val.no_vacancy}</p>
                                <a href={val.apply_link} className="btn btn-primary">Apply Now</a>
                              </div>
                          </div>
                        )
                      })
                    }
                  </>
                  : null
              }




            </div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Jobs