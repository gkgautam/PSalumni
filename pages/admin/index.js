import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react';

export async function getServerSideProps(ctx) {
  const { adminToken } = parseCookies(ctx);

  if (adminToken) {
      return {
        redirect: {
          destination: '/admin/dashboard',
          statusCode: 307,
        }
      }
    }

  return {
    props: { },
  }
}

const index = () => {

  const router = useRouter();

  const [adminData, setAdminData] = useState({
    email:"",
    password:""
  });

  const getAdminData = (event)=>{
    setAdminData({...adminData, [event.target.name]:event.target.value});
  }
  
  const adminLogin = async (e)=>{
    e.preventDefault();

    const { email, password } = adminData;

    const res = await fetch("/api/adminLogin", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({email, password})
    });

    const data = await res.json();

    if(data.message == "Required Fields..."){
      window.alert("Required Fields...");
    }
    else if(data.message == "Please enter valid email address"){
      window.alert("Please enter valid email address");
    }
    else if(data.message == "unAuthorized Access"){
      window.alert("unAuthorized Access")
    }
    else if(data.message == "login success !"){
      window.alert("login success !");
      setCookie(null, 'adminToken', data.adminToken, {secure:true});
      router.push("/admin/dashboard");
    }
    else{
      window.alert("Server Error !");
    }
  }


  return (
    <>
      <div style={{margin:"20px 20px"}}>
        <h2>Login admin</h2>
        <form method='POST'>
          <input type="email" name="email" value={adminData.email} onChange={getAdminData} placeholder='admin email' /><br />
          <input type="password" name="password" value={adminData.password} onChange={getAdminData} placeholder='admin password' />
          <br />
          <button onClick={adminLogin}>Login</button>
        </form>
      </div>
    </>
  )
}

export default index