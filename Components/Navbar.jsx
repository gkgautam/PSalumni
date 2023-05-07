import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { parseCookies, destroyCookie } from 'nookies';
import { useEffect, useState } from 'react';

function Navbar() {


    const router = useRouter();

    const { token } = parseCookies();

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const loggedOut = (e) => {
        destroyCookie(null, "token");
        router.push('/')
    }

    useEffect(() => {
        if (token) {
            setUserLoggedIn(true)
        }
        else {
            setUserLoggedIn(false)
        }
    }, [token]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-4 bg-white shadow-sm">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" href="/">
                        <img src="/logo.svg" alt="" width="95"  style={{cursor:"pointer"}} height="52" />
                    </Link>
                    <button style={{ boxShadow: "none" }} className="border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav mx-auto me-0 mb-2 mb-lg-0">

                        {
                            userLoggedIn == true ? 
                            <>
                             <li className="nav-item mx-3">
                                <Link href="/userhome">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Home</a>
                                </Link>
                            </li>
                             <li className="nav-item mx-3">
                                <Link href="/referrals">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Referral</a>
                                </Link>
                            </li>
                             <li className="nav-item mx-3">
                                <Link href="/jobopp">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Job Opportunities</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/aboutus">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>About us</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/events">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Events</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">

                                  <button onClick={loggedOut} className="btn border px-3 py-1 rounded-pill" style={{ color: "white", backgroundColor:"#079FFF", fontSize: "20px", fontWeight: "700", boxShadow:"none" }}>Logout</button>
 
                            </li>
                            </>:
                            <>
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/aboutus">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>About us</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/events">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Events</a>
                                </Link>
                            </li>
                              <li className="nav-item mx-3">
                                <Link href="/signin">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Sign in</a>
                                </Link>
                            </li>
                            </>
                        }





                

                          
                        </ul>




                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar