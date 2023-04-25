import { useState, useEffect } from 'react';

import { Door } from '../components/Door';
import { Slider } from '../components/Slider';

import { About } from '../views/About';
import { Clients } from '../views/Clients';
import { ClientsEdge } from '../views/ClientsEdge';
import { PartnershipEdge } from '../views/PartnershipEdge';
import { Projects } from '../views/Projects';
import { Team } from '../views/Team';

export default function Home() {
  const [doorUnlocked, setDoorUnlocked] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    if (!doorUnlocked) {
      const button = document.getElementById('button');
      button.classList.add('blink');
    }
  }, [doorUnlocked]);

  useEffect(() => {
    if (doorUnlocked) {
      const container = document.querySelector('.scroll-container');
      const sections = document.querySelectorAll('.section');

      const handleScroll = () => {
        const scrollPosition = container.scrollTop;

        for (const section of sections) {
          const sectionPosition = section.offsetTop - container.offsetTop;
          if (
            sectionPosition <= scrollPosition + 100 &&
            sectionPosition + section.offsetHeight > scrollPosition
          ) {
            setSelectedSection(`#${section.id}`);
          }
        }
      };
      container.addEventListener('scroll', handleScroll);
    }
  }, [doorUnlocked]);

  return (
    <>
      {!doorUnlocked && (
        <Door
          setDoorUnlocked={setDoorUnlocked}
          setSelectedSection={setSelectedSection}
        />
      )}

      {doorUnlocked && (
        <div className='scroll-container'>
          <About />
          <Clients />
          <ClientsEdge />
          <PartnershipEdge />
          <Projects />
          <Team />
        </div>
      )}

      <Slider doorUnlocked={doorUnlocked} selectedSection={selectedSection} />
    </>
  );
}
