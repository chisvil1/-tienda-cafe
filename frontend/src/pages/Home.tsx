import React from 'react';
import '../components/Hero'; // Adjust path for components
import '../components/AboutUs';
import '../components/ProductList';
import '../components/Contact';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main>
        <AboutUs />
        <ProductList />
        <Contact />
      </main>
    </>
  );
};

export default Home;
