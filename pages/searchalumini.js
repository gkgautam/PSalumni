import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link';


export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:3000/api/allemp`);
    const data = await res.json();

    // Pass data to the page via props
    return {
        props: { data },
    }
}
function searchalumini({ data }) {


    const [searchValue, setSearchValue] = useState("");

    const getSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
            <Navbar />
            <h3 className='text-center my-5 '>Search aluminies here</h3>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <form className="d-flex w-50">
                            <input className="form-control me-2" style={{ boxShadow: "none" }} value={searchValue} onChange={getSearchValue} type="search" placeholder="Search by name..." aria-label="Search" />
                            {/* <button className="btn" onClick={getString} style={{ boxShadow: "none", backgroundColor: "black", color: "white" }} type="submit">Search</button> */}
                        </form>

                    </div>

                </div>
                <div className='row d-flex justify-content-center my-5'>
                    <div className='col-xl-8 col-lg-9 col-md-10 col-sm-11 col-12 '>
                        {
                            data.length > 0 ? <>
                                {
                                    data.filter((val) => {
                                        if (searchValue == "") {
                                            return val
                                        }
                                        else if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                                            return val
                                        }
                                    }).map((item) => {
                                        return (

                                            <div className="card border-5 mb-3">
                                                <div className="card-header" style={{ fontSize: "28px", fontWeight: "bold" }}>{item.name}</div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Title : {item.title}</h5>
                                                    <h5 className="card-title my-3">People Manager : {item.people_mgr}</h5>
                                                    {
                                                        item.curr_status == "active" ? <>Status : <h5 className="card-title d-inline px-3 py-1" style={{ backgroundColor: "#00ff99" }}>{item.curr_status}</h5><br /></> : <>Status : <h5 className="card-title d-inline px-3 py-1" style={{ backgroundColor: "#FE414D" }}>{item.curr_status}</h5><br /></>
                                                    }
                                                    <a href={`/otherprofile/${item._id}`} className="btn mt-5 rounded-pill " style={{ boxShadow: "none", backgroundColor: "black", color: "white" }}>More Details...</a>
                                                </div>
                                            </div>

                                        )
                                    })

                                }
                            </> : null
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default searchalumini