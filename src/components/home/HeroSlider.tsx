import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Premium Stone Solutions",
    subtitle: "For Luxury Interiors & Exteriors",
    description: "Transform your space with elegant marble, granite and stone solutions.",
    image: "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg",
    buttonText: "Explore Products",
    buttonLink: "/products",
  },
  {
    id: 2,
    title: "Exquisite Craftsmanship",
    subtitle: "Bringing Nature's Beauty Indoors",
    description: "Each stone tells a story, crafted with precision and artistic excellence.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    buttonText: "View Gallery",
    buttonLink: "/gallery",
  },
  {
    id: 3,
    title: "Custom Stone Design",
    subtitle: "Tailored to Your Vision",
    description: "From concept to completion, we bring your stone design dreams to life.",
    image: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const HeroSlider: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Content */}
              <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center">
                <div className="max-w-3xl text-white">
                  <p className="text-accent-400 uppercase tracking-widest mb-3 text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    {slide.title}
                  </h1>
                  <p className="text-primary-100 text-base md:text-lg mb-6 max-w-xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    {slide.description}
                  </p>
                  <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
                    <a 
                      href={slide.buttonLink} 
                      className="inline-block bg-accent-600 hover:bg-accent-700 text-white py-3 px-8 rounded transition-colors duration-300"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation */}
        <div className="absolute bottom-8 right-8 z-10 flex space-x-4">
          <div 
            ref={navigationPrevRef}
            className="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronLeft className="text-white" size={24} />
          </div>
          <div 
            ref={navigationNextRef}
            className="w-12 h-12 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
          >
            <ChevronRight className="text-white" size={24} />
          </div>
        </div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;