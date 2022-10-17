import React,{Fragment} from 'react'
import "../CSS/Home.css"

const Home = () => {
  return (
    <Fragment>
    {/* 
 
 import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Fragment>    

    <section className='counter'>

    <div className="counter-container">
        <div className="counter-row">

            <div className="counter-column">
                <strong data-number='305'> 
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={305} >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className='number' ref={countUpRef} />
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                </strong>
                <span>Area <br /> population</span>
            </div>
1050  <span>  Total <br /> Properties </span>
206  <span> Average <br /> House </span>
27 <span> Total <br /> Branches </span>
    </section>
 
     */}

    <section className="home">

    <div className="container">

        <h1>nós construímos <br /> sonhos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Illo accusamus iusto odit distinctio esse</p>

         <div className="link">
            <a href="#" className="explore"> Explorar </a>
            <a href="#" className="contact"> Contato </a>
         </div>

    </div>

    </section>

    </Fragment>
  )
}

export default Home