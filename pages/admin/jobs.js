import {React, useState} from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Link from 'next/link';


const Registercurrentemp = () => {

  const [signupData, setSignupData] = useState({
    job_title:"",
    apply_link:"",
    job_img:"",
    job_desc:"",
    no_vacancy:""
  });

  const getSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();


    const { job_title, apply_link, job_img ,job_desc,no_vacancy} = signupData;

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ job_title, apply_link, job_img ,job_desc,no_vacancy})
      });

      const data = await res.json();

      if(data.message == "Required field"){
        window.alert("Required field");
      }
      
      else if(data.message == "Job posted Successfully"){
        window.alert("Job posted Successfully");
        setSignupData({job_title:"", apply_link:"", job_img:"",job_desc:"",no_vacancy:""});
      }
      else{
        window.alert("Technical Error, try again later front")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />


      <div className="container-fluid my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <form method='POST'>
                <legend className='h1 text-center'>Post new job vacancies</legend>
                <div class="mb-3">
                  <label for="fullname1" class="form-label">Job title</label>
                  <input type="text" name='job_title' placeholder='Job title' style={{boxShadow:"none"}} class="form-control" id="fullname1" aria-describedby="emailHelp" value={signupData.job_title} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Apply link</label>
                  <input type="text" name="apply_link" placeholder='link' style={{boxShadow:"none"}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={signupData.apply_link} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Job image</label>
                  <input type="text" name="job_img" placeholder='image' style={{boxShadow:"none"}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={signupData.job_img} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Job description</label>
                  <input type="text" name="job_desc" placeholder="description" style={{boxShadow:"none"}} class="form-control" id="exampleInputPassword1" value={signupData.job_desc} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="fullname1" class="form-label">No. of vacancies</label>
                  <input type="text" name='no_vacancy' placeholder='vacancies' style={{boxShadow:"none"}} class="form-control" id="fullname1" aria-describedby="emailHelp" value={signupData.no_vacancy} onChange={getSignupData} />
                </div>

                
                <div className="mt-4">
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow:"none"}} onClick={signupUser}>Post job</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Registercurrentemp