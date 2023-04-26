import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import Text from "./components/Text";

export default function Home () {
    return(
        <section>
            <Navbar/>
            <Intro/>
            <Pages/>
            <Text/>
            <GetInTouch/>
            <Footer/>
        </section>
    )
}