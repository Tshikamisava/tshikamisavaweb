import React, { useState, useEffect } from 'react';
import { Send, Wand2, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { refineProposalWithAI } from '../services/geminiService';
import { InquiryType, type InquiryTypeValue } from '../types';

interface ContactSectionProps {
  preselectedType?: InquiryTypeValue;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedType }) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    type: InquiryTypeValue;
    message: string;
  }>({
    name: '',
    email: '',
    type: InquiryType.PROJECT,
    message: ''
  });
  const [isRefining, setIsRefining] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  // Update form type when prop changes
  useEffect(() => {
    if (preselectedType) {
      setFormData(prev => ({ ...prev, type: preselectedType }));
    }
  }, [preselectedType]);

  const handleRefine = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.message || formData.message.length < 5) return;

    setIsRefining(true);
    const refined = await refineProposalWithAI(formData.message, formData.type);
    setFormData(prev => ({ ...prev, message: refined }));
    setIsRefining(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setSentSuccess(false), 5000);
      setFormData({ name: '', email: '', type: InquiryType.PROJECT, message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6">Let's Build Something Great</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need custom software, stunning branding, or reliable IT support, 
              Tshikamisava Holdings is ready to deliver service at its best.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span>info@tshikamisavaholdings.co.za</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span>Johannesburg, South Africa</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span>0670962825</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-gray-200/50">
            {sentSuccess ? (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">I'm interested in</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all bg-white"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value as InquiryTypeValue})}
                  >
                    <option value={InquiryType.PROJECT}>New Project (Software/Design)</option>
                    <option value={InquiryType.PARTNERSHIP}>Business Partnership</option>
                    <option value={InquiryType.SUPPORT}>IT Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-medium text-gray-700">Your Message</label>
                    {import.meta.env.VITE_GEMINI_API_KEY && (
                      <button 
                        type="button"
                        onClick={handleRefine}
                        disabled={isRefining || !formData.message}
                        className="text-xs flex items-center gap-1.5 text-brand-red hover:text-red-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isRefining ? <Loader2 className="w-3 h-3 animate-spin"/> : <Wand2 className="w-3 h-3" />}
                        {isRefining ? 'Refining...' : 'Refine with AI'}
                      </button>
                    )}
                  </div>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all resize-none"
                    placeholder="Tell us about your project or partnership idea..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  <p className="text-xs text-gray-400 text-right">
                    Powered by tshikamisava holdings
                  </p>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={isSending}
                >
                  {isSending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
