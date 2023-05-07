import { React, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Link from 'next/link';


const Registercurrentemp = () => {

  const [signupData, setSignupData] = useState({
    name: "",
    title: "",
    ps_id: "",
    person_type: "",
    start_date: "",
    business_unit: "",
    email: "",
    p_id: "",
    people_mgr: "",
    profile_img: "",
    curr_status: "",
    curr_org: "",
    end_date: "",
    social_media: "",
    personal_email: "",
    mobile: "",
    office_location: "",
    skills: ""

  });

  const getSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();


    const { name, title, ps_id, person_type, start_date, business_unit, email, p_id, people_mgr, profile_img, curr_status, curr_org, end_date, social_media, personal_email, mobile, office_location, skills } = signupData;

    try {
      const res = await fetch("/api/curremp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, title, ps_id, person_type, start_date, business_unit, email, p_id, people_mgr, profile_img, curr_status, curr_org, end_date, social_media, personal_email, mobile, office_location, skills })
      });

      const data = await res.json();

      if (data.message == "Required field") {
        window.alert("Required field");
      }
      else if (data.message == "Please enter valid email address") {
        window.alert("Invalid email id");
      }
      else if (data.message == "pehle se hai user") {
        window.alert("User already exist");
      }
      else if (data.message == "User Saved Success") {
        window.alert("Registration success");
        setSignupData({ name: "", title: "", ps_id: "", person_type: "", start_date: "", business_unit: "", email: "", p_id: "", people_mgr: "", profile_img: "", curr_status: "", curr_org: "", end_date: "", social_media: "", personal_email: "", mobile: "", office_location: "", skills: "" });
      }
      else {
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
            <div className="col-8">
              <form method='POST'>
                <legend className='h1 text-center'>Register current employee</legend>
                <div className="mb-3">
                  <label for="fullname1" className="form-label">Full Name</label>
                  <input type="text" name='name' placeholder='Full Name' style={{ boxShadow: "none" }} className="form-control" id="fullname1" value={signupData.name} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>

                  <select className="form-select" style={{ boxShadow: "none" }} name="title" value={signupData.title} id="title" onChange={getSignupData}>
                    <option defaultValue="Associate Technology L1">Associate Technology L1</option>
                    <option value="Associate Technology L2">Associate Technology L2</option>
                    <option value="Senior Associate Technology L1">Senior Associate Technology L1</option>
                    <option value="Senior Associate Technology L2">Senior Associate Technology L2</option>
                    <option value="Senior Associate Experiecnce L1">Senior Associate Experiecnce L1</option>
                    <option value="Senior Associate Experiecnce L2">Senior Associate Experiecnce L2</option>
                    <option value="Senior Manager">Senior Manager</option>
                    <option value="Manager">Manager</option>
                  </select>


                </div>
                <div className="mb-3">
                  <label for="pid" className="form-label">Publicis sapient ID</label>
                  <input type="text" name="ps_id" placeholder='Publicis sapient Id' style={{ boxShadow: "none" }} className="form-control" id="pid" value={signupData.ps_id} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="personType" className="form-label">Person Type</label>
                  <select className="form-select" style={{ boxShadow: "none" }} name="person_type" value={signupData.person_type} id="personType" onChange={getSignupData}>
                    <option defaultValue="Sapient Staff">Sapient Staff</option>
                    <option value="Contractor">Contractor</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="fullname1" className="form-label">Start Date</label>
                  <input type="date" name='start_date' placeholder='Name' style={{ boxShadow: "none" }} className="form-control" id="fullname1" aria-describedby="emailHelp" value={signupData.start_date} onChange={getSignupData} />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Business Unit</label>
                  <input type="text" name="business_unit" placeholder='Email Id' style={{ boxShadow: "none" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={signupData.business_unit} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">email</label>
                  <input type="text" name="email" placeholder="Password" style={{ boxShadow: "none" }} className="form-control" id="exampleInputPassword1" value={signupData.email} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="fullname1" className="form-label">Project ID</label>
                  <input type="text" name='p_id' placeholder='Name' style={{ boxShadow: "none" }} className="form-control" id="fullname1" aria-describedby="emailHelp" value={signupData.p_id} onChange={getSignupData} />
                </div>

                <div className="mb-3">
                  <label for="People_manager" className="form-label">People manager</label>
                  <input type="text" name="people_mgr" placeholder='People manager' style={{ boxShadow: "none" }} className="form-control" id="People_manager"  value={signupData.people_mgr} onChange={getSignupData} />
                </div>


                <div className="mb-3">
                  <label for="Image" className="form-label">Image Link</label>
                  <input type="text" name="profile_img" placeholder="Image Link" style={{ boxShadow: "none" }} className="form-control" id="Image" value={signupData.profile_img} onChange={getSignupData} />
                </div>


                <div className="mb-3">
                  <label for="curr_status" className="form-label">Current Status</label>

                  <select className="form-select" name="curr_status" style={{ boxShadow: "none" }} value={signupData.curr_status} id="curr_status" onChange={getSignupData}>
                    <option defaultValue="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>

                </div>


                <div className="mb-3">
                  <label for="curr_org" className="form-label">Current organization</label>
                  <input type="text" name="curr_org" placeholder="Current Organization" style={{ boxShadow: "none" }} className="form-control" id="curr_org" value={signupData.curr_org} onChange={getSignupData} />
                </div>


                <div className="mb-3">
                  <label for="end_date" className="form-label">End date</label>
                  <input type="date" name="end_date" placeholder="End date" style={{ boxShadow: "none" }} className="form-control" id="end_date" value={signupData.end_date} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="social_media" className="form-label">Social media link</label>
                  <input type="text" name="social_media" placeholder="Social Media" style={{ boxShadow: "none" }} className="form-control" id="social_media" value={signupData.social_media} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="personal_email" className="form-label">Personal email</label>
                  <input type="text" name="personal_email" placeholder="Personal Email" style={{ boxShadow: "none" }} className="form-control" id="personal_email" value={signupData.personal_email} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="mobile" className="form-label">Mobile</label>
                  <input type="text" name="mobile" placeholder="Mobile Number" style={{ boxShadow: "none" }} className="form-control" id="mobile" value={signupData.mobile} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label for="office_location" className="form-label">Office Location</label>

                  <select className="form-select" name="office_location" style={{ boxShadow: "none" }} value={signupData.office_location} id="office_location" onChange={getSignupData}>
                    <option defaultValue="Gurgaon">Gurgaon</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Noida">Noida</option>
                  </select>

                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Skills</label>
                  <input type="text" name="skills" placeholder="skills" style={{ boxShadow: "none" }} className="form-control" id="exampleInputPassword1" value={signupData.skills} onChange={getSignupData} />
                </div>


                <div className="mt-4">
                  <button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow: "none" }} onClick={signupUser}>Register</button>
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