import {React, useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Link from 'next/link';


const Signup = () => {

  const [signupData, setSignupData] = useState({
    name: "",
    emailorpersonal: "",
    password: ""
  });

  const getSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();


    const { name, emailorpersonal, password } = signupData;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, emailorpersonal, password })
      });

      const data = await res.json();

      if(data.message == "Required field"){
        window.alert("Required field");
      }
      else if(data.message == "Please enter valid email address"){
        window.alert("Invalid email id");
      }
      else if(data.message == "You are already Registered"){
        window.alert("You are already Registered");
      }
      else if(data.message == "You are not an employee for this company"){
        window.alert("You are not an employee for this company");
      }
      else if(data.message == "User already exist"){
        window.alert("User already exist");
      }
      else if(data.message == "User Saved Success"){
        window.alert("Registration success");
        setSignupData({name:"", emailorpersonal:"", password:""});
      }
      else{
        window.alert("Technical Error, try again later")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />


      <div className="container-fluid py-5" style={{backgroundColor:"#FFE63B"}}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <form method='POST'>
                <legend className='h1 text-center'>Sign up</legend>
                
                <div class="mb-3">
                  <label for="fullname1" class="form-label">Full Name</label>
                  <input type="text" name='name' placeholder='Name' style={{boxShadow:"none"}} class="form-control" id="fullname1"  value={signupData.name} onChange={getSignupData} />
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Personal Email Id or Company Email Id</label>
                  <input type="email" name="emailorpersonal" placeholder='Email address' style={{boxShadow:"none"}} class="form-control" id="email" value={signupData.emailorpersonal} onChange={getSignupData} />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" name="password" placeholder="Password" style={{boxShadow:"none"}} class="form-control" id="password" value={signupData.password} onChange={getSignupData} />
                </div>

                <div className="mt-4">
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow:"none"}} onClick={signupUser}>Sign up</button>
                </div>

                <div className="mt-4">
                  <span>Already have an accout?</span> <Link href="/signin">Login</Link>
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

export default Signup