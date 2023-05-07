import React from 'react';
import AdminNavbar from './components/AdminNavbar';

export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:3000/api/allemp`);
    const data = await res.json();

    // Pass data to the page via props
    return {
        props: { data },
    }
}

function allemp({ data }) {




    return (
        <>
            <AdminNavbar />
            <h1 className='text-center my-5'>All emplyees List</h1>
            <div className='container-fluid'>
               
                    {
                        data.length > 0 ? <>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className='row '>
                                        <div className='col-6 '>

                                            <div class="card w-100">
                                                <div class="card-body">
                                                    <p class="card-text">Database Id : {item._id}</p>
                                                    <p class="card-text">Name : {item.name}</p>
                                                    <p class="card-text">PS Id : {item.ps_id}</p>
                                                    <p class="card-text">Title : {item.title}</p>
                                                    <p class="card-text">Person Type : {item.person_type}</p>
                                                    <p class="card-text">Joining Date : {item.start_date}</p>
                                                    <p class="card-text">Business Unit : {item.business_unit}</p>
                                                    <p class="card-text">Employee Email Id: {item.email}</p>
                                                    <p class="card-text">Personal Email Id: {item.personal_email}</p>
                                                    <p class="card-text">Project Id : {item.p_id}</p>
                                                    <p class="card-text">People Manager : {item.people_mgr}</p>
                                                    <a href="#" class="btn btn-primary">Update</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6 d-flex justify-content-center'>
                                        <img style={{height:"400px", width:"400px", borderRadius:"50%"}}  src={item.profile_img}/>
                                        </div>
                                        </div>
                                    )

                                })
                            }
                        </> : <p>No Data found</p>
                    }





                

            </div>

        </>
    )
}

export default allemp