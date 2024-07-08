import React from 'react'
import { BsCloudFog } from 'react-icons/bs'
import { FaArrowRightLong, FaDatabase } from 'react-icons/fa6'
import { FcSettings, FcSupport } from 'react-icons/fc'
import { GrDatabase, GrSystem } from 'react-icons/gr'
import { ImDatabase } from 'react-icons/im'

function Home() {
  return (
    <>
      <section className='text-hero-wrapper'>

        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='header-top-text'>
                <h6 className='text-center mt-5'>Offshore Software Development Services</h6>
                <h2 className=' text-center header-big-text'>
                  We Deploy World Class Agile <br /> Product Teams on Demand
                </h2>
                <p className='text-center mt-3'>
                  Unlock superior software solutions with Vivasoft,
                  a leading offshore development firm delivering
                  <br /> creativity and expertise.
                </p>

                <button className='button-home d-flex align-items-center gap-3'>
                  Hire The Best Team<FaArrowRightLong className='fs-5' /> </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='image-hero-wrapper'>
        <div className="container-xxl  ">
          <div className="row">
            <div className="col-3">
              <div className='d-flex gap-3'>
                <img src="images/hero-image-1.jpg" className=" image-1 img-fluid" alt="" />
                <h3 className='d-flex flex-column gap-2 top-text'><span className='fs-5 text-start ' > Top <br /> Talents </span> 300+</h3>
              </div>
              <img src="/images/hero-image-6.webp" className=" image-2 img-fluid mt-1" alt="" />
            </div>

            <div className="col-2">
              <div className='d-flex flex-column'>
                <img src="/images/hero-image-2.webp" className=" image-3 img-fluid" alt="" />
                <h3 className='d-flex flex-column gap-2 top-text-2'><span className='fs-5 text-start ' > Top <br /> Talents </span> 80+</h3>
              </div>
            </div>

            <div className="col-2">
              <div className=''>
                <img src="/images/hero-image-3.webp" className=" image-4 img-fluid" alt="" />
              </div>
            </div>

            <div className="col-2">
              <div className='d-flex flex-column'>
                <h3 className='d-flex flex-column gap-2 top-text-3'><span className='fs-5 text-start ' > Top <br /> Talents </span> 7+</h3>
                <img src="/images/hero-image-7.webp" className=" image-5 img-fluid" alt="" />
              </div>
            </div>

            <div className="col-3">
              <div className='d-flex gap-3'>
                <img src="/images/hero-image-4.webp" className=" image-6 img-fluid" alt="" />
                <h3 className='d-flex flex-column gap-2 top-text-4'><span className='fs-5 text-start ' > Top <br /> Talents </span> 300+</h3>
              </div>
              <img src="/images/hero-image-8.webp" className=" image-7 img-fluid mt-1" alt="" />
            </div>



          </div>
        </div>
      </section>

      <section className='companies-home-wrapper'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='text-center'>
                <h5 className='main-text'>50+ companies rely on our top 1% talent to scale their dev teams.
                </h5>
              </div>
              <div className='companies-list mt-5 d-flex flex-wrap justify-content-center gap-5'>
                <div className='d-flex flex-wrap gap-5'>
                  <img src="/images/compani-1.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-2.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-3.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-4.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-5.webp" alt="" className='img-fluid' />
                </div>
                <div className='d-flex flex-wrap gap-5 mt-4'>
                  <img src="/images/compani-6.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-7.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-8.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-9.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-10.webp" alt="" className='img-fluid' />
                  <img src="/images/compani-11.webp" alt="" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='card-home-wrapper'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="animation-card-top-text d-flex align-items-center justify-content-center gap-5">
                <h3 className=''>Our Methodology to Collaboration</h3>
                <h6>We follow an agile development methodology
                  and guarantee the timely delivery of high-quality
                  software products.</h6>
              </div>
            </div>

            <div className="col-12">
              <div className="animation-card-container px-5 d-flex align-items-center justify-content-between gap-3">
                <div className="animation-card mt-4">
                  <div className="animation-cart-content">
                    <h1 >01</h1>
                    <h4>Team <br />Augmentation</h4>
                  </div>
                </div>

                <div className="animation-card-2 mt-4">
                  <div className="animation-cart-content-2">
                    <h1 >02</h1>
                    <h4>MVP <br />Services
                    </h4>
                  </div>
                </div>

                <div className="animation-card-3 mt-4">
                  <div className="animation-cart-content-3">
                    <h1 >03</h1>
                    <h4>End to End <br />Development</h4>
                  </div>
                </div>

                <div className="animation-card-4 mt-4">
                  <div className="animation-cart-content-4">
                    <h1 >04</h1>
                    <h4>Offshore Office <br />Expansion</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='custom-services-wrapper'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services-card-top-text d-flex align-items-center justify-content-center gap-5">
                <h2 className=''>Premium Custom <br /> Software Development Services</h2>
                <h6>We prioritize cultivating lasting business partnerships as
                  your trusted software development partner</h6>
              </div>
            </div>
            <div className="col-12">
              <div className="services-card-container px-5 py-3 d-flex align-items-center justify-content-between gap-3">
                <div className="services-card d-flex flex-column gap-3">
                  <FcSupport className='icon' />
                  <h3>Scalable System Design
                  </h3>
                  <p>High-performing product giving you <br /> tailored
                    solution for your business.</p>

                </div>
                <div className="services-card d-flex flex-column gap-3">
                  <BsCloudFog className='icon' />
                  <h3>Cloud Services
                  </h3>
                  <p>Cloud outsourcing provider managed <br /> tcloud services for businesses.</p>

                </div>
                <div className="services-card d-flex flex-column gap-3">
                  <FcSettings className='icon' />

                  <h3>Consultation Service

                  </h3>
                  <p>DevOps consulting services based<br /> tailored
                    on modern tools & technologies.</p>

                </div>
              </div>


              <div className="services-card-container px-5 mt-5 d-flex align-items-center justify-content-between gap-3">
                <div className="services-card d-flex flex-column gap-3">
                  <FaDatabase className='icon' />
                  <h3>Big Data & Data Science

                  </h3>
                  <p>High-performing product giving you <br /> tailored
                    solution for your business.</p>

                </div>
                <div className="services-card d-flex flex-column gap-3">
                  <GrDatabase className='icon' />

                  <h3>Database Management
                  </h3>
                  <p>Cloud outsourcing provider managed <br /> tcloud services for businesses.</p>

                </div>
                <div className="services-card d-flex flex-column gap-3">
                  <GrSystem className='icon' />

                  <h3>Embedded System Design

                  </h3>
                  <p>DevOps consulting services based<br /> tailored
                    on modern tools & technologies.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='product-card-home-wrapper'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="animation-card-top-text d-flex align-items-center justify-content-center gap-5">
                <h3 className='w-100'>Our Custom Software Development Products</h3>
                <h6 className='w-50'>We are the best custom software development company for custom
                  software development outsourcing.And we provide robust, scalable,
                  and efficient solutions to various clients around the world</h6>
              </div>
            </div>

            <div className="col-12">
              <div className="animation-card-container py-4 px-5 d-flex align-items-center justify-content-between gap-3">
                <div className="product-card">
                  <div className="product-cart-content">
                    <h3>Klikit</h3>
                    <p>A virtual money based app where the users can deposit
                     and use their money whenever it's needed.
                    </p>
                  </div>
                  <div className="product-card-image">
                    <img src="/images/Klikit.webp" className=' img-fluid' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Home




