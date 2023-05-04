import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    let url = 'https://api.github.com/users'

    //    GET or POST?
    axios.get(url)
      .then((item) => {
        console.log(item.data)
        setData(item.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <>
{console.log(  searchInput)}
    {/* HEADING ALI BAHADUR  START */}
      <hr className='border' style={{ color: "blue" }} />
      <h2 className=" display-4 
fw-bold text-align-center text-muted text-center" >There are Simple React Cards </h2>
      <hr className='border' style={{ color: "blue" }} />
    {/* HEADING ALI BAHADUR  END */}

  {/* Search Input START */}
      <div className="form-outline conta mb-4 container ">
         
            <label className="form-label user h5 " htmlFor="searchInput"  >Search  Your Account:</label>
            <div className="input-group">
            <input type="text" onChange={(e)=>{setSearchInput(e.target.value)}}  id="searchInput" placeholder='Search...' className="form-control ps-4 form-control-md col-5  mx-auto "  />
            <span className='input-group-text'>
              <i class="bi bi-search"></i>
              </span>
            </div>
           
          </div>
  {/* Search Input End */}
      <div className="row ">

        {
          data.filter((item)=>{return(item.login.toLowerCase().includes(searchInput))}).map(
            (item) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 container my-0 ">

                  <div className="container  ">
                    <div class="card-group mt-5">
                      <div class="card bg-dark text-light">
                        <img src={item.avatar_url} class="card-img-top img-fluid " alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">{item.login}</h5>
                          <p class="card-text">More About Sir,{item.login} Please Click the button</p>
                          <div>
                            <button class="btn btn-light " ><a class="text-dark text-decoration-none" href={item.html_url}>GitHub</a></button>
                          </div>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )
            }
          )
        }
<div className="fixed-top  py-1 ps-5 text-dark bg-light"> princeali4503050@gmail.com <span><i class="bi bi-envelope-at-fill"></i></span>  Ali Bahadur &copy;
<span class='justify-content-center ms-3  '> 03472024381<i class="bi bi-telephone-fill"></i></span>
</div>
     
      </div>
    </>
  )
}

export default App;
