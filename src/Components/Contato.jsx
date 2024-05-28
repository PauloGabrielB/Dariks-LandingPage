import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [arquivo, setArquivo] = useState(null);

    function sendEmail(e) {
        e.preventDefault();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const templateParams = {
            from_name: nome,
            message: mensagem,
            email: email
        };

        emailjs.send('service_m1ve454', 'template_hjku15w', templateParams, 'XDNdIaWb3KTwEvdIB')
            .then((response) => {
                console.log('Email Enviado', response.status, response.text);
                setEmail('');
                setMensagem('');
                setNome('');
                setArquivo(null);
            }, (err) => {
                console.log('Erro ao Enviar', err);
            });
    }

    return (
        <section id='contato' className='Contato'>
            <h1 className="contato-h1">Workshop de Barbeiro: Oportunidade de Crescimento Profissional</h1>
            <div className="contato-container">
                <form className='form-container' onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            className='nome-input'
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='email-input'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            className='textarea'
                            id="mensagem"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <div className="contato-text">
                <p>Descubra a arte e a técnica do barbear em nosso workshop exclusivo para barbeiros.</p>
                <p> Este treinamento intensivo é projetado para profissionais que desejam aprimorar suas habilidades e aprender as tendências mais recentes do mercado.</p>
                <p> Com instrutores experientes, você terá a oportunidade de praticar cortes, modelagens e técnicas de cuidados com a barba em um ambiente prático e colaborativo.</p>
                <p> Seja você um barbeiro iniciante ou um veterano em busca de atualização, nosso workshop oferece ferramentas e conhecimentos essenciais para elevar sua carreira ao próximo nível.</p>
                <p> Não perca esta chance de transformar sua paixão em excelência profissional. Inscreva-se agora e junte-se a nós nessa jornada de aperfeiçoamento!</p>
                <p>Na Dariks Barbershop, valorizamos cada cliente e estamos sempre prontos para ouvir suas necessidades e responder suas dúvidas.</p>
                <p> Seja para agendar um horário, conhecer nossos serviços, ou simplesmente para dar um feedback, estamos à disposição para atendê-lo.</p>
                </div>
            </div>

            
            <div className="contato-icons">
                <a href="https://api.whatsapp.com/send/?phone=5585988392477&text&type=phone_number&app_absent=0">
                <button className="Btn btnw">
                <span className="svgContainer">
                    <svg
                    viewBox="0 0 448 512"
                    fill="white"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    ></path>
                    </svg>
                </span>
                <span className="BG"></span>
                </button>
                </a>
               
                <a href="https://www.instagram.com/dariksbarbershop">
                <button className="Btn btni">
                <span className="svgContainer">
                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </span>
                <span className="BG"></span>
                </button>
                </a>
                

                <a href="https://open.spotify.com/playlist/0aPTAIi5p5R7nuiJbGCINF?si=953600a9e31141b4">
                <button className="Btn btns">
                <span className="svgContainer">
                    <svg
                    viewBox="0 0 496 512"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1db954"
                    >
                    <path
                        d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                    ></path>
                    </svg>
                </span>
                <span className="BG"></span>
                </button>
                </a>
                
                </div>
        </section>
    );
}

