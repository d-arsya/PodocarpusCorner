import Gallery from "../components/Gallery"
import Testi from "../components/Testi"
import Team from "../components/Team"
import Facility from "../components/Facility"
import Menu from "../components/Menu"
import About from "../components/About"
import Jumbotron from "../components/Jumbotron"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Home(){
    return (
        <>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <About></About>
            <Menu></Menu>
            <Facility></Facility>
            <Team></Team>
            <Testi></Testi>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    )
}