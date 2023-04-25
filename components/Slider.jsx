import { Flex, Image, Center, Divider } from '@chakra-ui/react';

export const Slider = ({ selectedSection, doorUnlocked }) => {
  const handleSectionClick = (sectionId) => {
    const container = document.querySelector('.scroll-container');
    const sectionPosition = document.querySelector(sectionId).offsetTop;

    container.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  };

  return (
    <Flex
      direction='column'
      justifyContent='center'
      position='fixed'
      right='2rem'
      top='30%'
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
  );
};
