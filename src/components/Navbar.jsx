import React from 'react'

import { useNavigate, NavLink } from 'react-router-dom'



const Navbar = () => {
  const navigate=useNavigate();
  // Navigate to the QuizApp page
  function handleQuizClick () {
    navigate('/quiz'); 
  };

  return (
    <nav className="navbar navbar-expand-lg border rounded-5 bg-teritary shadow">
      <div className="container p-4">
        <NavLink className="navbar-brand fw-bold fs-1" to='/'>Quiz</NavLink>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarText" 
        aria-controls="navbarText" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link active fw-bold fs-4" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  fw-bold fs-4" to='/product'>Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  fw-bold fs-4" to='/pricing'>Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  fw-bold fs-4" to='/resources'>Resources</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link  fw-bold fs-4" to='/jobseekers'>JobSeekers</NavLink>
            </li>
          </ul>
          
          <button className='btn btn-primary' onClick={handleQuizClick}>Try Our Platfrom</button>
          
        </div>
      </div>
  </nav>
  )
}

export default Navbar