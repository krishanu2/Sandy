import { CursorProvider } from "./context/CursorContext";
import CustomCursor from "./components/CustomCursor";
import Spotlight from "./components/Spotlight";
import IntroRitual from "./components/IntroRitual";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Transformation from "./components/Transformation";
import Proof from "./components/Proof";
import CTAButton from "./components/CTAButton";
import Person from "./components/Person";
import Offer from "./components/Offer";
import Close from "./components/Close";

export default function App() {
  return (
    <CursorProvider>
      <IntroRitual />
      <CustomCursor />
      <Spotlight />
      <div className="grain-overlay" />
      <main className="bg-bg">
        <Hero />
        <Pain />
        <Transformation />
        <Proof />
        <div className="flex justify-center bg-bg pb-32">
          <CTAButton />
        </div>
        <Person />
        <Offer />
        <Close />
      </main>
    </CursorProvider>
  );
}
