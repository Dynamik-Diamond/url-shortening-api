import Hero from '../Components/Hero';
import Stats from '../Components/Stats';
import Boost from '../Components/Boost';

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Stats />
      <Boost />
    </main>
  );
};

export default Home;
