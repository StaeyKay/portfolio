import { Scroll } from 'lucide-react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScrollLink } from 'react-scroll';

const Navbar = () => {

  const { pathname } = useLocation();
  const scroller = Scroll.scroller;
  const navigate = useNavigate();

  const goToPageAndScroll = async (selector) => {
    await navigate('/');
    scroller.scrollTo(selector, {
      duration: 200,
      smooth: true,
      offset: -75,
      spy: true,
    });
  }

  return (

    <div className='text-white flex justify-between mx-auto px-6'>
      <h1 className='text-white-900 text-4xl font-bold'>profession.</h1>
      {pathname === '/' ?
      (
        <div className='flex font-semibold text-white'>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300}
          className='p-2 text-white'>
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300}
          className='p-2 text-white'>
          About
        </ScrollLink>
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300} className='p-2 text-white'>
          Services</ScrollLink>
        <ScrollLink
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300} className='p-2 text-white'>
            Portfolio</ScrollLink>
        <ScrollLink
          to="experiences"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300} className='p-2 text-white'>
            Experiences</ScrollLink>
        <ScrollLink
          to="contact us"
          spy={true}
          smooth={true}
          offset={-75}
          duration={300}
          className='p-2 text-white'>
            Contact Us</ScrollLink>
      </div>
      ) : (
        <div className="flex font-semibold text-white">
          <span className="p-2 text-white cursor-pointer"
          onClick={() => {
            goToPageAndScroll('home');
          }}>
            Home
          </span>
          <span className="p-2 text-white cursor-pointer"
          onClick={() => {
            goToPageAndScroll('about');
          }}>
            About
          </span>
          <span className="p-2 text-white cursor-pointer"
          onClick={() => {
            goToPageAndScroll('services');
          }}>
            Services
          </span>
          <span
          onClick={() => {
            goToPageAndScroll('portfolio');
          }}>
            Portfolio
          </span>
          <span className="p-2 text-white cursor-pointer"
          onClick={() => {
            goToPageAndScroll('experiences');
          }}>
            Experiences
          </span>
          <span className="p-2 text-white cursor-pointer"
          onClick={() => {
            goToPageAndScroll('contact us');
          }}>
            Contact us
          </span>
        </div>
      )};
      
    </div>
  )
}

export default Navbar