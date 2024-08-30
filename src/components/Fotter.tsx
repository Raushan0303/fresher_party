'use client';
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';
import { Vortex } from './ui/vortex';
import IconFooter from './IconFooter';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="m-0 w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
          <h2 className="text-white lg:max-w-[45vw] text-2xl md:text-6xl font-bold text-center">
          Ready to elevate <span className="text-purple-500">your</span> brand through impactful sponsorship?
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Ready to Partner? Let’s Make It Happen!
          </p>
          <a
            href="/contact"
            className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </Vortex>
      </div>
      <IconFooter />
    </footer>
  );
};

export default Footer;
