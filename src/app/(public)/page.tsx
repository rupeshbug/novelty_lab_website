import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/Problems";
import BringingValue from "../components/BringingValue";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import FromOurLab from "../components/FromOurLab";
import NoveltyJourney from "../components/NoveltyJourney";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BringingValue />
      <NoveltyJourney />
      <ProblemSection />
      <FromOurLab />
      <GetInTouch />
      <Footer />
    </div>
  );
}
