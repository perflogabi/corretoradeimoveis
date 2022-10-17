import React,{Fragment, useState, useEffect} from 'react'
import ServicesDetail from "../Detail/ServicesDetail"
import Aos from 'aos'
import "aos/dist/aos.css"
import "../CSS/Services.css"

const Services = () => {
    const [detail, setDetail] = useState(ServicesDetail)

    useEffect(()=>{

      Aos.init({ duration:2000, once:true, easing:"ease" })

    },[])

  return (

    <Fragment>

    <section data-aos= "fade-up" className="services">

    <div className="heading">
      <span>Nossos Serviços</span>
      <h2> A maneira mais inteligênte de comprar uma casa </h2>
    </div>

    <div className="services-row">

    {
      detail.map((detail)=>{
        return(
          <div className="services-card">
          <div className="services-column">
            <div className="content">
                <div className="services-icon">
                    <img src={detail.Image} alt="icon" />
                </div>
                <div className="services-content">
                    <h3>{detail.heading}</h3>
                    <p>{detail.info}</p>
                </div>
            </div>
        </div>
          </div>
        )
      })
    }

    </div>

    </section>
    
    </Fragment>
  )
}

export default Services