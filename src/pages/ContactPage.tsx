import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact Us - Stone Style';
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mb-12">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-400 uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-primary-100 text-lg">
              We're here to answer your questions and help with your project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-accent-600 mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-primary-600">
                      123 Marble Road, Sathorn<br />
                      Bangkok 10120, Thailand
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-accent-600 mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-primary-600">
                      <a href="tel:+6622345678" className="hover:text-accent-600 transition-colors duration-300">
                        +66 2 234 5678
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-accent-600 mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-primary-600">
                      <a href="mailto:info@stonestyle.co.th" className="hover:text-accent-600 transition-colors duration-300">
                        info@stonestyle.co.th
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-accent-600 mr-4 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <p className="text-primary-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 9am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-64 bg-primary-100">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-primary-600">Interactive map would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1" htmlFor="name">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-primary-200 focus:ring-accent-200'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1" htmlFor="email">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.email ? 'border-red-500 focus:ring-red-200' : 'border-primary-200 focus:ring-accent-200'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-200"
                        placeholder="+66 81 234 5678"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1" htmlFor="subject">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-primary-200 focus:ring-accent-200'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Project Consultation">Project Consultation</option>
                        <option value="Request a Quote">Request a Quote</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-primary-700 mb-1" htmlFor="message">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-500 focus:ring-red-200' : 'border-primary-200 focus:ring-accent-200'
                      }`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent-600 uppercase tracking-widest mb-2">Visit Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Showroom
            </h2>
            <p className="text-primary-600">
              Visit our showroom to see our extensive collection of stone materials and speak with our experts in person.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="rounded-lg overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/3932966/pexels-photo-3932966.jpeg" 
                  alt="Stone Style Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-semibold mb-6">Showroom Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent-600 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Over 200 stone samples on display</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent-600 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Experienced consultants available</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent-600 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Full-scale kitchen and bathroom displays</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent-600 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Design consultation area</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent-600 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Convenient central Bangkok location</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center bg-primary-800 text-white px-6 py-3 rounded hover:bg-primary-900 transition-colors duration-300"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent-600 uppercase tracking-widest mb-2">Frequently Asked</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Common Questions
            </h2>
            <p className="text-primary-600">
              Find answers to the most common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What types of stone do you offer?",
                  answer: "We offer a wide range of natural stones including marble, granite, limestone, travertine, onyx, and quartzite. We also provide engineered stone products like quartz surfaces."
                },
                {
                  question: "How do I choose the right stone for my project?",
                  answer: "The right stone depends on factors like the application (countertop, flooring, etc.), the environment (indoor/outdoor, wet/dry), maintenance preferences, and aesthetic goals. Our consultants can help you select the best option based on these considerations."
                },
                {
                  question: "What is your typical lead time for projects?",
                  answer: "Lead times vary depending on the scope of the project, the materials selected, and our current workload. Simple countertop projects typically take 2-3 weeks from template to installation, while larger or more complex projects may take 4-6 weeks or more."
                },
                {
                  question: "Do you provide installation services?",
                  answer: "Yes, we have our own team of skilled installers who ensure your stone is perfectly installed. We handle the entire process from measurement and templating to installation and finishing."
                },
                {
                  question: "How should I maintain my stone surfaces?",
                  answer: "Maintenance requirements vary by stone type. Generally, we recommend using a pH-neutral cleaner specifically designed for natural stone, avoiding acidic or abrasive cleaners, and sealing as needed (typically every 1-3 years depending on use and stone type). We provide detailed care instructions for your specific stone."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-primary-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-primary-600 mb-4">
                Have more questions? We're here to help!
              </p>
              <a 
                href="tel:+6622345678" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
                Call Us: +66 2 234 5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;