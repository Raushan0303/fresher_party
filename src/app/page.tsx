import {AppleCardsCarouselDemo }from '@/components/Approach';
import FeaturedCourses from '@/components/FeaturedProject';
import Footer from '@/components/Fotter';
import HeroSection from '@/components/HeroSection';
import {Aboutus} from '@/components/Aboutus';
import WhyChooseMe from '@/components/WhyChooseMe';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseMe />
      <AppleCardsCarouselDemo/>
      <Aboutus />
      
      <Footer />
    </main>
  );
}
