import React,{Fragment} from 'react'
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <Fragment>
{/* 

.footer{
    display: grid;
    place-items: center;
    padding: 7rem 2rem;
    background: #F5FBFF;
}
.footer-container{
    max-width: 1250px;
}
.footer-row{
    display: flex;
    flex-wrap: wrap;
}
.footer-column{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.column-content h2{
    color: #000000;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Nunito Sans', sans-serif;
}
.column-content p{
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Nunito Sans', sans-serif;
}
.column-content ul{
    margin-top: 3rem !important
}
.column-content .footer-link{
   display: flex;
}
.column-content .footer-link li{
    margin: 0 30px 0 0;
    color: #919191;
}
.column-content .footer-link li a{
    font-size: 15px;
    font-weight: 400;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    background: transparent;
    border-radius: 50%;
    margin-right: 7px;
    line-height: 42px !important;
    border: 1px solid #E8E8E8;
}
.column-content .footer-link li a i{
    font-size: 20px;
    color: #919191;
    color: #FD955D;
}
.column-content ul li{
   padding-bottom: 10px;
}
.column-content ul li a{
    color: rgba(0, 0, 0, 0.8);
    font-family: 'Nunito Sans', sans-serif;
}
.column-content ul li a span{
    color: #FD955D; 
    padding-right: 5px;
}
.column-content ul li span{
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Nunito Sans', sans-serif;
}
.column-content ul .list{
    display: table;
    line-height: 1.5;
    margin-bottom: 15px;
}
.list .number{
    color: #FD955D; 
    font-family: 'Nunito Sans', sans-serif;
}
.list .email{
    color: #FD955D; 
    font-family: 'Nunito Sans', sans-serif;
}
.column-content ul .list{
    display: table;
}
.column-content ul .list .footer-icon{
    display: table-cell;
    vertical-align: top;
    width: 40px;
    font-size: 18px; 
    padding-top: 2px;
    color: #FD955D; 
}
.column-content ul .list .text{
    display: table-cell;
    vertical-align: top;
    font-family: 'Nunito Sans', sans-serif;
}
.footer-2{
    padding: 2rem 0;
    display: grid;
    place-items: center;
}
.footer-container-2 i{
    color: #FD955D; 
}
@media screen and (max-width:768px) {
    .footer{
        display: flex;
        padding: 3rem 2rem;
    }
    .footer-row{
       display: flex;
       flex-direction: column;
    }
    .footer-column{
        padding-top: 2rem;
    }
}

 */}
    <section className="footer">

    <div className="footer-container">
    <div className="footer-row">

    {/* column-1 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Downtown</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis.</p>
        <ul className="footer-link">
           <li> <a href="#"><i class="fa-brands fa-facebook-f"></i></a> </li>
           <li> <a href="#"><i class="fa-brands fa-twitter"></i></a> </li>
           <li> <a href="#"> <i class="fa-brands fa-instagram"></i> </a> </li>
        </ul>
        </div>
    </div>

    {/* column-2 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Communidade</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Procurar Propriedades
              </a>
            </li>
           <li> 
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Agentes
              </a>
            </li>
           <li>
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Avaliações
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* column-3 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Sobre nós</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Nossa história
              </a>
            </li>
           <li> 
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Conheça o time
              </a>
            </li>
           <li>
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Avaliações
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* column-4 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Companhia</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Sobre nós 
              </a>
            </li>
           
           <li>
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Contato
              </a>
            </li>
            <li>
              <a href="#">
                <span> <i class="fa-solid fa-arrow-right-long"></i> </span>
                Carreira
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* Column-5 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Tem alguma pergunta?</h2>
        <ul>
           <li> 
                <span className='footer-icon'> <i class="fa-solid fa-location-dot"></i> </span>
                <span className="text">São Paulo - SP, Brasil</span>
            </li>
           <li> 
                <span className='footer-icon'> <i class="fa-solid fa-phone"></i> </span>
                <span className="text">+2 292 2088 234</span>
            </li>
           <li>
                <span className='footer-icon'> <i class="fa-solid fa-envelope"></i> </span>
                <span className="text">info@seudominio.com</span>
            </li>
        </ul>
        </div>
    </div>

    </div>

    <div className="footer-2">
        <div className="footer-2-container">
        <p>Copyright ©2022 All rights reserved</p>
        </div>
    </div>

    </div>

    </section>

    </Fragment>
  )
}

export default Footer