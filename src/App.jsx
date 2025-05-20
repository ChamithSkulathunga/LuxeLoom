import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import NewItems from './components/NewItems'
import FeaturesSecond from './components/FeaturesSecond'
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Header from './components/Header'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

const App = () => {
  const [showTopButton, setShowTopButton] = React.useState(false);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    // Show button when scrolled down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen"
       style={{ backgroundImage: "url('/pattern.jpg')", backgroundRepeat: 'repeat' }}
      >
      <div className='w-full border max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Hero/>
        <Features/>
        <NewItems/>
        <FeaturesSecond />
        <Products />
        <Testimonial />
        <Newsletter />
        <Footer/>

        {/* Back to Top Button */}
        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-10 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg z-50 transition duration-300"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

export default App