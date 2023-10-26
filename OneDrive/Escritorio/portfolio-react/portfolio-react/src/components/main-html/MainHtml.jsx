import HeroSection from "../hero-section/HeroSection";
import Tecnology from "../tecnology/Tecnology";
import Projects from "../projects/Projects";
import Form from "../form/Form";
import About from "../about-me/About";
import Separator from "../separator";
const MainHtml = () => {
  return (
    <>
      <main>
        <HeroSection></HeroSection>
        <Separator></Separator>
        <About></About>
        <Separator></Separator>
        <Tecnology></Tecnology>
        <Separator></Separator>
        <Projects></Projects>
        <Separator></Separator>
        <Form></Form>
      </main>
    </>
  );
};

export default MainHtml;
