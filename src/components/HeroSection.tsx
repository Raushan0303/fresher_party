import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FlipWords } from './ui/flip-words';

const word = `Join us at Purnea College of Engineering on 15th September for a grand fresher's party featuring cultural events, sports, and unlimited food!`;

function HeroSection() {
  const words = [
    'From_Pce_2k22_Seniors',
    'We_Are_Presenting',
    'Cultural_Events',
    'Sports_Events',
  ];

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center mt-9">
        <h1 className="mt-50 pt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi 👋🏻, 2k23 Pce Fresher 
        </h1>
        <div className="h-[10rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} /> <br />
          </div>
        </div>
        <TextGenerateEffect className="pt-0 pl-20 pr-20 pb-10" words={word} />
        <div className="mt-4">
          <Link href={'/events'}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
              Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
