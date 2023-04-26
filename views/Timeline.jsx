import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

export const Timeline = () => {
  return (
    <Tabs px='3rem' variant='enclosed' py='5rem' isFitted h='300px'>
      <TabList color='#9cbece'>
        <Tab fontSize={{ lg: '20px', sm: '12px' }}>Feb 28th</Tab>
        <Tab fontSize={{ lg: '20px', sm: '12px' }}>March 15th</Tab>
        <Tab fontSize={{ lg: '20px', sm: '12px' }}>March 18th</Tab>
        <Tab fontSize={{ lg: '20px', sm: '12px' }}>March 27th</Tab>
        <Tab fontSize={{ lg: '20px', sm: '12px' }}>April 20th</Tab>
      </TabList>

      <TabPanels
        opacity='0.5'
        color='#9cbece'
        fontSize={{ lg: '28px', sm: '22px' }}
        mt='2rem'
        maxW={{ lg: '60%', sm: '100%' }}
      >
        <TabPanel>
          <p>First partnership negotiation with a visionary tech founder.</p>
        </TabPanel>
        <TabPanel>
          <p>Silver Door founded.</p>
        </TabPanel>
        <TabPanel>
          <p>
            First equity partnership with a mainstream culture outlet in
            Hollywood.
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Second equity partnership with a Florida based fiat gateway
            provider.
          </p>
        </TabPanel>
        <TabPanel>
          <p>First MVP deployed to mainnet Ethereum.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
