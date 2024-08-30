'use client';

import Image from 'next/image';
import { Tabs } from './ui/tabs';

function FeaturedCourses() {
  const tabs = [
    {
      title: 'Cultural',
      value: 'Cultural',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black">
          <p>Cultural Event</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Indoor',
      value: 'Indoor',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-950 ">
          <p>Indoor Game</p>
          <Youtube />
        </div>
      ),
    },
    {
      title: 'Outdoor',
      value: 'outdoor game',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-slate-950">
          <p>Outdoor_Game</p>
          <Namastefood />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40   from-slate-950">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="https://media.istockphoto.com/id/491050030/photo/lantern.webp?a=1&b=1&s=612x612&w=0&k=20&c=6PvlRWlEIruS3RZhFz8YbEeyDpaCU1ABQHNyxJkq8fI="
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Youtube = () => {
  return (
    <Image
      src="https://plus.unsplash.com/premium_photo-1661541280106-6a9414bf40c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Namastefood = () => {
  return (
    <Image
      src="https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default FeaturedCourses;
