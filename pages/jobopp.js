import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';



export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:3000/api/jobs`);
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
                          <div class="card my-3" style={{width: "100%"}}>
                            <img src={val.job_img} class="card-img-top" alt="..." />
                              <div class="card-body">
                                <h5 class="card-title"> <strong>Post -</strong> {val.job_title}</h5>
                                <p class="card-text"> <strong>Description :</strong> {val.job_desc}</p>
                                <p class="card-text"> <strong>Number of Vacancies :</strong> {val.no_vacancy}</p>
                                <a href={val.apply_link} class="btn btn-primary">Apply Now</a>
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