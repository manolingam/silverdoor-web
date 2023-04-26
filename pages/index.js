import { Team } from '../views/Team';
import { Intro } from '../views/Intro';
import { Mission } from '../views/Mission';
import { Clients } from '../views/Clients';
import { Strategy } from '../views/Strategy';
import { Projects } from '../views/Projects';
import { Timeline } from '../views/Timeline';

export default function Home() {
  return (
    <>
      <Intro />

      <Mission />

      <Clients />

      <Strategy />

      <Timeline />

      <Projects />

      <Team />
    </>
  );
}
