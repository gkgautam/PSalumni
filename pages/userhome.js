import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Link from 'next/link';


export default function Userhome() {
  return (
    <>
      <Navbar />

      <div className="container-fluid py-5" style={{ backgroundColor: "#FE414D" }}>
        <h1 className='text-center py-2 text-white'>Welcome to the <span style={{ color: "black", fontWeight: "900" }}> Publicis Sapient</span> Alumni Network</h1>
        <h3 className='text-center py-2 text-white'>Build existing connections you have now and make new ones.
          Receive exclusive member benefits. Become part of the community.
          Where colleagues unite for good.</h3>
        <div className='text-center mt-5'>
          <Link href="/searchalumini">
          <button type="button" class="btn bg-black text-white rounded-pill" style={{ boxShadow: "none", width: "130px" }}>Search Alumni</button>
          </Link>
        </div>
      </div>
      <div className="container-fluid p-0">
        <img src="/indexImg.jpg" alt="" width="100%" />
      </div>

      

      <Footer />
     

    </>
  )
}
