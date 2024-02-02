import './Projetos.css'
import { Link } from 'react-router-dom'

export default function Projeto() {
    return (
        <section className="project">
            <h1 className="project__tittle" title="Projetos">Projetos</h1>
            <div className='project__container'>
                <Link to="/pdv" className='project__une'>Pdv</Link>
                <Link to="/pdv" className='project__une'>Em construção...</Link>
                <Link to="/pdv" className='project__une'>Em construção...</Link>
            </div>
        </section>
    )
}
