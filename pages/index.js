import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Link from 'next/link';

export async function getServerSideProps(ctx) {
  const res = await fetch(`https://psalumni.vercel.app/api/allemp`);
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: { data },
  }
}

export default function Home({ data }) {
  return (
    <>
      <Navbar />

      <div className="container-fluid py-5" style={{ backgroundColor: "#FE414D" }}>
        <h1 className='text-center py-2 text-white'>Welcome to the <span style={{ color: "black", fontWeight: "900" }}> Publicis Sapient</span> Alumni Network</h1>
        <h3 className='text-center py-2 text-white'>Build existing connections you have now and make new ones.
          Receive exclusive member benefits. Become part of the community.
          Where colleagues unite for good.</h3>
        <div className='text-center mt-5'>
          <Link href="/signup">
            <button type="button" class="btn bg-black text-white rounded-pill" style={{ boxShadow: "none", width: "130px" }}>Join us</button>
          </Link>
        </div>
      </div>
      <div className="container-fluid p-0">
        <img src="/indexImg.jpg" alt="" width="100%" />
      </div>

      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
              <img src="/nizel.png" width="100%" alt="nizel" />
            </div>
            <div className="col-xl-6 col-lg-7 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
              <h2 className='mx-3 mb-5'>A Message from our CEO</h2>
              <p className='mx-3'>I have always been fascinated by technology. I always imagined it to be the thing that imbues people with modern-day superpowers, so I pursued that passion by starting a company all about how technology was going to change business I am now the Global Chief Executive Officer of Publicis Sapient. While the CEO role encompasses a breadth of responsibilities, I like to spend as much time as possible with our clients and our people. With clients., I enjoy discussing how their customers are evolving, new competitive threats, the role of technology in their business, and current and evolving business models.</p>
              <figure className='mx-3'>
                <blockquote class="blockquote">
                  <p>Nigel Vaz</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  CEO <cite title="Source Title">Publicis Sapient</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid" style={{backgroundColor:"#FFE63B"}}>
        <div className="container ">
          <div className="row  my-4">
          hello
            <h2 className=' m-0 my-5 text-center'>2022 Publicis Sapient Alumni Network Award Winners</h2>


            {
              data.length > 0 ?
                <>
                  {
                    data.map((val) => {
                      let prImage = val.profile_img ?val.profile_img :'https://static.licdn.com/aero-v1/sc/h/244xhbkr7g40x6bsu4gi6q4ry'
                      return (
                        <>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 my-3  d-flex justify-content-center">
                            <div class="card border-0 d-flex justify-content-center align-items-center" style={{ width: "18rem", backgroundColor:"#FFE63B" }}>
                              <img  src={prImage} style={{boxShadow:"0px 0px 0px 6px #FE414D"}} class="rounded-circle" width="220px" height="220px" alt="..." />
                              <div class="card-body text-center">
                                <h5 class="card-title">{val.name}</h5>
                                <p class="card-text text-center">{val.title}</p>
                                <p class="card-text text-center">{val.end_date}</p>

                              </div>
                            </div>
                          </div>

                        </>
                      )
                    })
                  }
                </>
                : null
            }









          </div>
        </div>
      </div>






      <Footer />

    </>
  )
}
