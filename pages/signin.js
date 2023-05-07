import {React,useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie, parseCookies } from 'nookies';

// export async function getServerSideProps(ctx) {
//   const res = await fetch(`http://localhost:3000/api/userLogin`);
//   const data = await res.json();
//   const { token } = parseCookies(ctx);

//   if (token) {
//     return {
//       redirect: {
//         destination: '/homepage',
//         statusCode: 307,
//       }
//     }
//   }
//   else{
//     return {
//       redirect: {
//         destination: '/login',
//         statusCode: 307,
//       }
//     }
//   }

//   // Pass data to the page via props
//   return {
//     props: { data },
//   }
// }


const Signin = () => {

  const router = useRouter();


  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const getLoginData = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }


  const userLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    try {
      const res = await fetch("/api/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if(data.message == "Required Fields..."){
        alert("Required field");
      }

      else if(data.message == "Please enter valid email address"){
        alert("Please enter valid email address");
      }

      else if(data.message == "user registered nhi hai...."){
        alert("user registered nhi hai....");
      }

      else if(data.message == "Email id or password not matched !"){
        alert("Email id or password not matched !");
      }

      else if(data.message == "login success !"){
        alert("login success !");
        setCookie(null, 'token', data.token, {secure:true});
        router.push("/userhome");
      }

      else{
        alert("Technical Error, try again later");
      }
      
      

    } catch (error) {
      console.log(error);
    }

  }


  return (
    <>
      <Navbar />



      <div className="container-fluid py-5" style={{backgroundColor:"#00E6C3"}}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <form>
                <legend className='h1 text-center'>Login </legend>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" name="email" placeholder='email' style={{ boxShadow: "none" }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={loginData.email} onChange={getLoginData} />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" name="password" placeholder='password' style={{ boxShadow: "none" }} class="form-control" id="exampleInputPassword1" value={loginData.password} onChange={getLoginData} />
                </div>

                <div className="mt-4">
  
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow: "none" }} onClick={userLogin}>Login</button>
                </div>

                <div className="mt-4">
                  <span>Not have an accout?</span> <Link href="/signup">Sign up</Link>
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

export default Signin