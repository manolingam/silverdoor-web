import { useState, useEffect } from 'react';

import { Door } from '../components/Door';
import { About } from '../views/About';
import { Clients } from '../views/Clients';
import { ClientsEdge } from '../views/ClientsEdge';
import { PartnershipEdge } from '../views/PartnershipEdge';

import { copyText } from '../config';

export default function Home() {
  const [section, updateSection] = useState(1);

  useEffect(() => {
    if (section == 1) {
      const button = document.getElementById('button');
      button.classList.add('blink');
    }
  }, [section]);

  return (
    <>
      {section == 1 && <Door updateSection={updateSection} />}

      {section == 2 && (
        <About
          updateSection={updateSection}
          title={copyText[section].title}
          content={copyText[section].content}
        />
      )}

      {section == 3 && (
        <Clients
          updateSection={updateSection}
          title={copyText[section].title}
          content={copyText[section].content}
        />
      )}

      {section == 4 && (
        <ClientsEdge
          updateSection={updateSection}
          title={copyText[section].title}
          content={copyText[section].content}
        />
      )}

      {section == 5 && (
        <PartnershipEdge
          updateSection={updateSection}
          title={copyText[section].title}
          content={copyText[section].content}
        />
      )}
    </>
  );
}
