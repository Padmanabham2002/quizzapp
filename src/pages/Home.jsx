import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz'); // Navigate to the quiz page when the button is clicked
  };
  return (
    <div className='container'>
      <div className="Home text-center my-5">
        <h1 className='fw-bold fs-1'> SKILL TESTS TO HIRE</h1>
        <h1 className='fw-bold fs-1 my-3'>TO BEST</h1>

        <p className='fw-bold fs-4  my-5'>Talent Assessmwnts That Replace Resumes With Results</p>
        <button className='p-3 rounded-5 btn btn-danger fw-bold fs-5 my-4'>For employers & Recruiters</button>
        <button className='mx-3 p-3 rounded-5 fw-bold fs-5 my-3'>For Job Seekers</button>



      </div>
      <div className='text-center ' >
        <img src='./src/assets/images/1.jpg' style={{ width: '100%' }, { height: '600px' }}  />
      </div>
      <div className='text-center fw-bold fs-2 my-5 bg-black text-white'>
        <h1>JOIN 10,000+ COMPANIES WHO</h1>
        <h1> HIRE WITH TECHNO</h1>

        <section className='d-flex justify-content-evenly my-5 text text-opacity-75 p-3'>
          <h2>PayPal</h2>
          <h2>EQUIFAX</h2>
          <h2>PEPSICO</h2>
          <h2>InstaCart</h2>
          <h2>Revoult</h2>
        </section>
      </div>
      <div className='text-center '>
        <h1 className='fw-bold '> Let their skills do the talking</h1>

        <p className='fw-bold fs-5'>A resume only tells you what a candidate wants you to hear. Our talent assessment goes deeper,</p>
        <p className='fw-bold fs-5'> evaluating skills, behavior, and culture add to make hiring less gut feeling. More great feeling</p>
        <button onClick={startQuiz} className="start-quiz-btn my-3 p-3 rounded-5 fw-bold fs-5 btn btn-success" >
          Try Our Quizz
        </button>
      </div>

      <div className=' fs-4 bg-white mt-5 ' style={{ width: "770px" }}>
        <p>➡️Predict job success, with 400+ tests</p>
      </div>
      <section className=' fs-4 bg-white  ' style={{ width: "770px" }} >
        <p>➡️Handle thousands of applicants with ease, with ranked shortlists in minutes</p>
      </section>
      <section className='fs-4 bg-white  ' style={{ width: "770px" }}>
        <p>➡️Predict job success, with 400+ tests</p>
      </section>
      <div className='fs-4 bg-white ' style={{ width: "770px" }} >
        <p>➡️Predict job success, with 400+ tests</p>
      </div>

      <div className='text-center mt-4'>
        <h1 className=' fs-1 fw-bold'>See what happens when you</h1> <h1 className='fs-1 fw-bold'>put skills first</h1>
        <button className='btn btn-danger fw-bold fs-5 rounded-5 p-2'>Calculate Your ROI</button>
        <div className='d-flex justify-content-evenly mt-4 mb-5' >
          <section className='card p-3 '>
            <h1 className='fw-bold fs-1 ' >90%</h1>
            <p className='fs-5'>of companies reduced their mis-hires</p>
          </section>
          <section className='card p-3'>
            <h1 className='fw-bold fs-1'>400% </h1>
            <p className='fs-5'>more candidates assesses </p>
          </section>
          <section className='card p-3'>
            <h1 className='fw-bold fs-1'>34%</h1>
            <p className='fs-5'>reduction in time-to-hire by using our platform</p>
          </section>

        </div>


        <div className=''>
          <footer className="text-center text-lg-start bg-black text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between  text-white p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              <div className='text-white'>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>

            <section className="text-white">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3"></i>Social Prachar
                    </h6>
                    <p>We Are Hiring! FullStack Freshers for our client Advanced & core ,Good Communication Skills, Freshers

                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Angular</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">React</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Vue</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Laravel</a>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Orders</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Help</a>
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3">🏡</i> Hyderabad, Jnt,Kphb Road</p>
                    <p>
                      <i className="fas fa-envelope me-3">✉️</i>
                      info@example.com
                    </p>
                    <p><i className="fas fa-phone me-3">📞</i> + 01 234 567 88</p>
                    <p><i className="fas fa-print me-3">📳</i> + 01 234 567 89</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-center text-white p-4" style={{}}>
              <a className="text-reset fw-bold" href="https://mdbootstrap.com/">2024-SocialPrachar.com</a>
            </div>
          </footer>
        </div>



      </div>
    </div>


  )
}

export default Home
