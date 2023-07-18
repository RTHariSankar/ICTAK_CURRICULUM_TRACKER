import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'
import Footer from './Footer'
const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="bg-info col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className='text-decoration-none text-white d-flex d-none d-sm-inline align-itemcenter ms-3 mt-2' href='#'>
              <span className='ms-1 fs-4 d-none d-sm-inline'>Logo</span>
              </a>
              <hr className='text-secondary d-none d-sm-block' />
           
             <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">

                <i className='bi bi-house'></i>  
                <span className='ms-3 d-none d-sm-inline'>Home</span>  
                </a>
                         
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-person-circle'></i>  
                <span className='ms-3 d-none d-sm-inline'>Profile</span>  
                </a>
                         
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-journal-text'></i>  
                <span className='ms-3 d-none d-sm-inline'>Form</span>   
                </a>
                        
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-pencil-square'></i>  
                <span className='ms-3 d-none d-sm-inline'>Curriculum</span>  
                </a>
                       
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className='bi bi-envelope-exclamation'></i>  
                <span className='ms-3 d-none d-sm-inline'>Pending</span>   
                </a>
                        
              </li>
              
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                <i className="bi bi-door-closed"></i>  
                <span className='ms-3 d-none d-sm-inline'>Logout</span>   
                </a>
                        
              </li>

             </ul>
             </div>


        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Sidebar