import 'animate.css';
import logo from '../Img/logo.png'
import { FaLocationDot } from "react-icons/fa6";

function Hero() {

    return (
        <>
        <section className="hero">
            <div className="container-hero" id="home">
            <div className="text-hero">
                <img src={logo} alt="" />
                <div className="location">
                <FaLocationDot style={{ color: 'red' }} className='ico' />
                <h1>Av. Pedro Lazar 815, Lago Jacarey</h1>
                </div>
                <p2 className='p2'>Reserve seu Horario. Agende agora!</p2>
                <a target='blank' href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0"><button className='btn-flex'>WhatsApp</button></a>
            </div>
        </div>
        </section>      
        </>
        
    )
}

export default Hero;