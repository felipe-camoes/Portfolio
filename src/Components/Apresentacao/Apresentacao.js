import './Apresentacao.css'
import FrontendImg from '../../Imagens/frontend.png'

export default function Apresentacao() {
    return (
        <section className="presentation">
            <div>
                <h1 className="presentation__title" title="Apresentação">Sobre mim</h1>
                <p className="presentation__text">
                    Olá, meu nome é Felipe Camões e sou um desenvolvedor front-end com muita paixão e
                    vontade de aprender. Embora eu não tenha experiência profissional anterior em desenvolvimento
                    front-end, estou comprometido em aprender rapidamente e trabalhar duro para atender às necessidades dos meus
                    clientes.

                    Tenho habilidades técnicas sólidas em HTML, CSS, JavaScript e ReactJS, e estou constantemente
                    aprendendo novas tecnologias e técnicas para melhorar minhas habilidades. Estou ansioso para ter a oportunidade de trabalhar em projetos emocionantes e desafiadores.</p>
            </div>
            <div className="presentation__img">
                <img src={FrontendImg} alt="Imagen_front_end" />
            </div>
        </section>
    )
}

