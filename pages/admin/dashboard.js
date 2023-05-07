import Link from 'next/link';
import { parseCookies } from 'nookies';
import React from 'react';
import AdminNavbar from './components/AdminNavbar';

export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:3000/api/`)

  const { adminToken } = parseCookies(ctx);

  if (!adminToken) {

    return {
      redirect: {
        destination: '/admin',
        statusCode: 307,
      }
    }
  }
  return {
    props: {},
  }
}

const dashboard = () => {
  return (
    <>
      <AdminNavbar />
      <Link href="/admin/registercurrentemp">
      <div className="mt-4">
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow:"none"}}>Add employee</button>
                </div>
      </Link>
      <Link href="/admin/jobs">
      <div className="mt-4">
                  <button type="submit" class="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow:"none"}}>post new vacancies</button>
                </div>
      </Link>
    </>
  )
}

export default dashboard