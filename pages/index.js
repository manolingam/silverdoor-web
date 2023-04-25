import { useState, useEffect } from 'react';
import { Center, Divider, Flex, Image } from '@chakra-ui/react';

import { Door } from '../components/Door';
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

  const handleSectionClick = (sectionId) => {
    const container = document.querySelector('.scroll-container');
    const sectionPosition = document.querySelector(sectionId).offsetTop;

    container.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  };

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

      <Flex
        direction='column'
        justifyContent='center'
        position='fixed'
        right='2rem'
        top='40%'
        display={{ sm: doorUnlocked ? 'block' : 'none', lg: 'block' }}
      >
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#about' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#about');
          }}
        />
        <Center>
          <Divider orientation='vertical' h='30px' />
        </Center>
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#clients' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#clients');
          }}
        />
        <Center>
          <Divider orientation='vertical' h='30px' />
        </Center>
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#clientsedge' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#clientsedge');
          }}
        />
        <Center>
          <Divider orientation='vertical' h='30px' />
        </Center>
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#partnershipedge' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#partnershipedge');
          }}
        />
        <Center>
          <Divider orientation='vertical' h='30px' />
        </Center>
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#projects' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#projects');
          }}
        />
        <Center>
          <Divider orientation='vertical' h='30px' />
        </Center>
        <Image
          src='/door_light_blue.png'
          alt='pointer'
          w={{ lg: '20px', sm: '15px' }}
          cursor='pointer'
          opacity={selectedSection === '#team' ? '1' : '0.3'}
          onClick={() => {
            if (doorUnlocked) handleSectionClick('#team');
          }}
        />
      </Flex>
    </>
  );
}
