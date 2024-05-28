import img1 from '../Img/img1.jpg'
import img2 from '../Img/img2.jpg'
import img3 from '../Img/img3.png'
import img4 from '../Img/img4.jpg'
import img5 from '../Img/img5.jpg'


const Service = () => {

  return (
    <section id='service' className="service">
    <h1  id="serviços" className="title-s">Nossos Serviços</h1>
    <div className="container-service">
    <div className="card">
    <div className="card-image"><img src={img1} alt="" /></div>
    <div className="category"> Illustration </div>
    <div className="heading"> Corte Tradicional
        <div className="author"> A <span className="name">Partir :</span> R$ 40,00</div>
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
        <button>Agendar Serviço</button>
        </a>
    </div>
    </div>

    <div className="card">
    <div className="card-image"><img src={img2} alt="" /></div>
    <div className="category"> Illustration </div>
    <div className="heading"> Barboterapia
        <div className="author"><span className="name">Valor :</span> R$ 40,00</div>
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
        <button>Agendar Serviço</button>
        </a>
    </div>
    </div>
    
    <div className="card">
    <div className="card-image"><img src={img3} alt="" /></div>
    <div className="category"> Illustration </div>
    <div className="heading"> Sobrancelha
        <div className="author"><span className="name">Valor :</span> R$ 25,00</div>
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
        <button>Agendar Serviço</button>
        </a>
    </div>
    </div>

    <div className="card">
    <div className="card-image"><img src={img4} alt="" /></div>
    <div className="category"> Illustration </div>
    <div className="heading"> Corte & Barba
        <div className="author"> A <span className="name">Partir :</span> R$ 85,00</div>
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
        <button>Agendar Serviço</button>
        </a>
    </div>
    </div>

    <div className="card">
    <div className="card-image"><img src={img5} alt="" /></div>
    <div className="category"> Illustration </div>
    <div className="heading"> Argiloterapia
        <div className="author"><span className="name">Valor :</span> R$ 80,00</div>
        <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
        <button>Agendar Serviço</button>
        </a>
    </div>
    </div>
    
  </div>
   
    </section>
  );
};

export default Service;
