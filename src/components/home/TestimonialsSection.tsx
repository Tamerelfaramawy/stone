import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Interior Designer",
    company: "Modern Spaces Studio",
    content: "Working with Stone Style has been a fantastic experience. Their marble selection is unparalleled, and the quality of their craftsmanship is evident in every project we've collaborated on. Highly recommended for any luxury interior project.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    name: "Michael Chang",
    position: "Project Manager",
    company: "Elite Construction Co.",
    content: "Stone Style delivered exceptional quality for our hotel renovation project. Their team was professional from selection to installation, and they completed the work on time and within budget. The stone countertops and flooring look stunning.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Homeowner",
    company: "",
    content: "I couldn't be happier with my kitchen renovation. The granite countertops from Stone Style transformed the entire space. Their design team helped me choose the perfect stone, and the installation was flawless. Worth every penny!",
    rating: 5,
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Architect",
    company: "Wilson & Associates",
    content: "As an architect, I value partners who deliver consistent quality. Stone Style has been our go-to stone supplier for over 5 years. Their attention to detail and ability to source unique materials has made them an invaluable resource for our firm.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];

const TestimonialsSection: React.FC = () => {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-600 uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            We take pride in delivering exceptional service and results. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination',
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
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-primary-50 rounded-lg p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "text-accent-500 fill-accent-500" : "text-primary-300"}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-primary-600 mb-6 flex-grow">"{testimonial.content}"</p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">
                        {testimonial.position}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <div 
              ref={navigationPrevRef}
              className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-all duration-300"
            >
              <ChevronLeft className="text-primary-800" size={20} />
            </div>
            <div 
              ref={navigationNextRef}
              className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center cursor-pointer hover:bg-primary-200 transition-all duration-300"
            >
              <ChevronRight className="text-primary-800" size={20} />
            </div>
          </div>
          
          {/* Custom Pagination */}
          <div className="testimonials-pagination text-center mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;