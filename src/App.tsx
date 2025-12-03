import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Building2, Globe2, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { ContactSection } from './components/ContactSection';
import { InquiryType, type InquiryTypeValue } from './types';
import { services } from './data/services';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState<InquiryTypeValue | undefined>(undefined);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreService = (serviceId: string) => {
    let type: InquiryTypeValue = InquiryType.PROJECT;
    if (serviceId === 'ict') {
      type = InquiryType.SUPPORT;
    }
    
    setSelectedInquiryType(type);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center bg-brand-red rounded-full">
               <span className="font-bold text-white text-lg">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none text-gray-900">
                TSHIKAMISAVA
              </span>
              <span className="text-[9px] tracking-widest text-brand-red font-semibold uppercase">Holdings</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Partnership', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <Button variant="primary" onClick={() => scrollToSection('contact')} className="px-6 py-2.5 text-sm font-medium rounded-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            {['Home', 'Services', 'Partnership', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-gray-800 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-100 text-brand-red rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
                Service At Its Best
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Innovating <span className="text-brand-red">Tomorrow</span>,<br />
                Supporting Today.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                We connect expert software engineering, creative design, and reliable ICT support to empower your business. Partner with Tshikamisava Holdings for comprehensive digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('services')} className="px-6 py-3">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('partnership')} className="px-6 py-3">
                  Become a Partner
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                   {[
                     "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=64&h=64&q=80",
                     "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=64&h=64&q=80",
                     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64&q=80"
                   ].map((src, i) => (
                     <img key={i} src={src} alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                   ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Trusted by 50+</div>
                  <div className="text-gray-500">Businesses across SA</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern office workspace" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <p className="text-gray-900 font-medium">Excellence in every line of code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Expertise</h2>
            <p className="text-gray-600 text-lg">
              We deliver integrated solutions designed to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onExplore={() => handleExploreService(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Background Accents with Animation */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse-slow animation-delay-2000"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6 text-brand-red">
                <Building2 className="w-6 h-6" />
                <span className="font-bold tracking-wider uppercase">Partnership Program</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Scale Your Business Through <span className="text-brand-red">Collaboration</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Do you have a project that requires specialized skills? Or perhaps you're an agency needing overflow support? 
                Tshikamisava Holdings partners with other businesses to deliver excellence without boundaries.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'White-label software development',
                  'Dedicated remote support teams',
                  'Joint venture opportunities',
                  'Access to specialized design talent'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-brand-red shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" onClick={() => scrollToSection('contact')}>
                Partner With Us
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                 <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" 
                    alt="Professional diverse corporate meeting" 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay"></div>
                 
                 {/* Overlay Card */}
                 <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                         <Globe2 className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-lg">Global Reach</h4>
                         <p className="text-gray-300 text-sm">Expanding horizons together.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection preselectedType={selectedInquiryType} />

      {/* Footer */}
      <footer className="bg-gray-950 text-white border-t border-gray-900">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full border-2 border-brand-red flex items-center justify-center">
                    <span className="font-bold text-sm">T</span>
                 </div>
                 <h3 className="text-xl font-bold">TSHIKAMISAVA</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                Empowering businesses through innovative software, compelling design, and robust IT infrastructure support. Service at its best.
              </p>
              
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/TshikamisavaHoldings" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all duration-300" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/Tshikamisava" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all duration-300" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/tshikamisava-holdings" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/tshikamisava" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('services')}>Web Development</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('services')}>Mobile Apps</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('services')}>Graphic Design</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('services')}>Remote Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('partnership')}>Partnership</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
                <li className="hover:text-brand-red transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-900 mt-16 pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <span>&copy; {new Date().getFullYear()} Tshikamisava Holdings. All rights reserved.</span>
            <span className="mt-2 md:mt-0">Designed by Tshikamisava Holdings.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;