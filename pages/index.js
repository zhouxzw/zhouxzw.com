import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Social from "../components/Social/Social";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";
import Socialfooter from "../components/Social-Footer/Socialfooter";

export default function Home() {
  return (
    <div className="main-page">
      <title>zhouxzw</title>
      <Navbar></Navbar>
      <Intro></Intro>
      <Project></Project>
      <Social></Social>
      <Socialfooter></Socialfooter>
      <Footer></Footer>
    </div>
  );
}
