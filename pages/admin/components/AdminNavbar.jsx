import Link from 'next/link'
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React, { useState, useEffect } from 'react';

const AdminNavbar = () => {

  const router = useRouter();

  const { adminToken } = parseCookies();

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const adminLogout = () => {
    destroyCookie(null, "adminToken");
    router.push('/admin');
  }

  useEffect(() => {
    if (adminToken) {
      setUserLoggedIn(true)
    }
    else {
      setUserLoggedIn(false)
    }
  }, [adminToken]);



  return (
    <>
      {
        userLoggedIn == false ?
          <>
            <Link href="/">
              Login
            </Link>
          </>
          :
          <>
          <nav className="navbar navbar-expand-lg navbar-light py-4 shadow-sm">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">
                        <img src="/logo.svg" alt="" width="95" height="52" />
                    </a>
                    <button style={{ boxShadow: "none" }} className="border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-0 mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Dashboard</a>
                                </Link>
                            </li>
                           
                            <li className="nav-item mx-3">
                                <Link href="/admin/allemp">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>All Employees</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/news">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>News</a>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/events">
                                    <a className="nav-link" style={{ color: "black", fontSize: "20px", fontWeight: "700" }}>Events</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Link href="/">
              <button onClick={adminLogout}>Logout</button>
            </Link>
          </>
      }
    </>
  )
}

export default AdminNavbar