import {React, useState} from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Link from 'next/link';

const Referrals = () => {

  const [signupData, setSignupData] = useState({
    person_name:"",
    person_email:"",
    person_resume:"",
  });

  const getSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();


    const { person_name, person_email, person_resume } = signupData;

    try {
      const res = await fetch("/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ person_name, person_email, person_resume })
      });

      const data = await res.json();

      if(data.message == "Required field"){
        window.alert("Required field");
      }
      
      else if(data.message == "Referral submitted Successfully"){
        window.alert("Referral submitted Successfully");
        setSignupData({person_name:"", person_email:"", person_resume:""});
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
                <legend className='h1 text-center'>Refer someone you know</legend>
                <div class="mb-3">
                  <label for="fullname1" class="form-label">Person name</label>
                  <input type="text" name='person_name' placeholder='Person name' style={{boxShadow:"none"}} class="form-control" id="fullname1" aria-describedby="emailHelp" value={signupData.person_name} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Person email</label>
                  <input type="text" name="person_email" placeholder='person email' style={{boxShadow:"none"}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={signupData.person_email} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Resume</label>
                  <input type="file" name="person_resume" placeholder='Resume' style={{boxShadow:"none"}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={signupData.person_resume} onChange={getSignupData} />
                </div>
               
                <div className="mt-4">
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow:"none"}} onClick={signupUser}>Referral</button>
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

export default Referrals