

import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkill from './components/skillsSection/SubSkill';
import ExperienceMain from './components/exprienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route/>
      </Routes>
    <main className='font-body'>
<NavbarMain/>
<HeroMain/>
<HeroGradient/>
<SubHeroSection/>
<AboutMeMain/>
<SkillsMain/>
<SubSkill/>
<ExperienceMain/>
<ProjectsMain/>
<ContactMeMain/>
<FooterMain/>

    </main>
    </Router>
  )
}

export default App
