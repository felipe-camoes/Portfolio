import Header from '../Components/Header/Header';
import Apresentacao from '../Components/Apresentacao/Apresentacao';
import Footer from '../Components/Footer/Footer';
import Projeto from '../Components/Projetos/Projetos';
import '../Components/Root/Layout.css'
import '../Components/Root/Root.css'

export default function Layout() {
    return (
      <>
        <Header />
        <Apresentacao />
        <Projeto />
        <Footer />
      </>
    )
  }
  