import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Heart, Handshake, Building2, ArrowRight, ArrowLeft, CheckCircle2, 
  Loader2, Sparkles, MapPin, Mail, AlertCircle 
} from 'lucide-react';
import { submitInquiry } from '../services/supabase';

type IntentType = 'general' | 'sponsor' | 'host' | null;

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  // Specific fields
  location?: string;
  sponsorType?: string;
  interestArea?: string;
}

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<number>(1);
  const [intent, setIntent] = useState<IntentType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
    location: '',
    sponsorType: 'financial',
    interestArea: 'volunteer'
  });

  // Check for 'intent' in URL on mount
  useEffect(() => {
    const intentParam = searchParams.get('intent');
    if (intentParam && ['general', 'sponsor', 'host'].includes(intentParam)) {
      setIntent(intentParam as IntentType);
      setStep(2);
    }
  }, [searchParams]);

  const handleIntentSelect = (selectedIntent: IntentType) => {
    setIntent(selectedIntent);
    setStep(2);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Map form data to specific database columns based on intent
      const payload = {
        type: intent || 'general',
        name: formData.name,
        email: formData.email,
        organization: (intent !== 'general' && formData.organization) ? formData.organization : null,
        message: formData.message,
        // Specific fields
        location: intent === 'host' ? formData.location : null,
        sponsor_type: intent === 'sponsor' ? formData.sponsorType : null,
        interest_area: intent === 'general' ? formData.interestArea : null
      };

      const { error } = await submitInquiry(payload);

      if (error) {
        throw new Error(error.message || "Unknown error occurred.");
      }
      
      setIsSuccess(true);
      setStep(3);
    } catch (error: any) {
      console.error('Submission error:', error);
      setErrorMessage(error.message || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setIntent(null);
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData({
      name: '', email: '', organization: '', message: '', 
      location: '', sponsorType: 'financial', interestArea: 'volunteer'
    });
  };

  // --- Render Steps ---

  // Step 1: Intent Selection
  const renderStep1 = () => (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-center mb-6">Let's create something meaningful.</h1>
      <p className="text-xl text-center text-slate-500 mb-16 max-w-2xl mx-auto">
        How would you like to engage with NilgirisNext Foundation? Select a path below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* General / Volunteer */}
        <button 
          onClick={() => handleIntentSelect('general')}
          className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all text-left flex flex-col items-start hover:-translate-y-1"
        >
           <div className="bg-brand-purple/10 p-4 rounded-2xl mb-8 group-hover:bg-brand-purple group-hover:text-white transition-colors">
             <Heart size={32} className="text-brand-purple group-hover:text-white" />
           </div>
           <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">Get Involved</h3>
           <p className="text-slate-500 leading-relaxed mb-8">
             Volunteer, join as an artist, or simply say hello. We are always looking for passionate individuals.
           </p>
           <div className="mt-auto flex items-center text-brand-purple font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
             Start Inquiry <ArrowRight size={16} className="ml-2"/>
           </div>
        </button>

        {/* Sponsor */}
        <button 
          onClick={() => handleIntentSelect('sponsor')}
          className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all text-left flex flex-col items-start hover:-translate-y-1"
        >
           <div className="bg-brand-gold/10 p-4 rounded-2xl mb-8 group-hover:bg-brand-gold group-hover:text-white transition-colors">
             <Handshake size={32} className="text-brand-gold group-hover:text-white" />
           </div>
           <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">Inquire Sponsorship</h3>
           <p className="text-slate-500 leading-relaxed mb-8">
             Partner with our festivals and programs. Align your brand with culture, ecology, and youth.
           </p>
           <div className="mt-auto flex items-center text-brand-gold font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
             Become a Partner <ArrowRight size={16} className="ml-2"/>
           </div>
        </button>

        {/* Host */}
        <button 
          onClick={() => handleIntentSelect('host')}
          className="group relative bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all text-left flex flex-col items-start hover:-translate-y-1"
        >
           <div className="bg-brand-teal/10 p-4 rounded-2xl mb-8 group-hover:bg-brand-teal group-hover:text-white transition-colors">
             <Building2 size={32} className="text-brand-teal group-hover:text-white" />
           </div>
           <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900">Host a Festival</h3>
           <p className="text-slate-500 leading-relaxed mb-8">
             Bring ATOM or OSFF to your institution. We provide the content; you provide the venue.
           </p>
           <div className="mt-auto flex items-center text-brand-teal font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
             Host Edition <ArrowRight size={16} className="ml-2"/>
           </div>
        </button>
      </div>

      <div className="mt-20 text-center">
         <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Or reach us directly</p>
         <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-600">
            <span className="flex items-center gap-2 justify-center"><Mail size={16} /> contact@nxfindia.org</span>
            <span className="flex items-center gap-2 justify-center"><MapPin size={16} /> Coimbatore, India</span>
         </div>
      </div>
    </div>
  );

  // Step 2: The Form
  const renderStep2 = () => (
    <div className="max-w-2xl mx-auto animate-slide-up">
      <button 
        onClick={() => setStep(1)} 
        className="flex items-center gap-2 text-slate-400 hover:text-brand-purple mb-8 transition-colors text-sm font-bold uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back to options
      </button>

      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
        
        <div className="mb-10">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 
            ${intent === 'general' ? 'bg-brand-purple/10 text-brand-purple' : 
              intent === 'sponsor' ? 'bg-brand-gold/10 text-brand-gold' : 
              'bg-brand-teal/10 text-brand-teal'}`}>
            {intent === 'general' ? 'General Inquiry' : intent === 'sponsor' ? 'Sponsorship Inquiry' : 'Host Application'}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            {intent === 'general' && "Tell us a bit about yourself."}
            {intent === 'sponsor' && "Let's discuss partnership opportunities."}
            {intent === 'host' && "Bring the festival to your campus."}
          </h2>
        </div>

        {errorMessage && (
          <div className="mb-8 bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-100 animate-in fade-in slide-in-from-top-2">
            <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm font-medium">{errorMessage}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Common Fields */}
          <div className="space-y-6">
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
               <input 
                 type="text" 
                 name="name" 
                 required
                 value={formData.name}
                 onChange={handleInputChange}
                 className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300"
                 placeholder="Jane Doe"
               />
            </div>
            
            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
               <input 
                 type="email" 
                 name="email" 
                 required
                 value={formData.email}
                 onChange={handleInputChange}
                 className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300"
                 placeholder="jane@example.com"
               />
            </div>

            {/* Intent Specific Fields */}
            {intent !== 'general' && (
              <div className="animate-fade-in-up">
                 <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                   {intent === 'host' ? 'Institution Name' : 'Company / Organization'}
                 </label>
                 <input 
                   type="text" 
                   name="organization" 
                   required
                   value={formData.organization}
                   onChange={handleInputChange}
                   className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300"
                   placeholder={intent === 'host' ? 'University of Arts...' : 'Acme Corp...'}
                 />
              </div>
            )}

            {intent === 'host' && (
              <div className="animate-fade-in-up">
                 <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">City / Location</label>
                 <input 
                   type="text" 
                   name="location" 
                   required
                   value={formData.location}
                   onChange={handleInputChange}
                   className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300"
                   placeholder="e.g. Ooty, Tamil Nadu"
                 />
              </div>
            )}

            {intent === 'sponsor' && (
              <div className="animate-fade-in-up">
                 <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Type of Support</label>
                 <select 
                   name="sponsorType" 
                   value={formData.sponsorType}
                   onChange={handleInputChange}
                   className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors text-slate-700"
                 >
                   <option value="financial">Financial Sponsorship</option>
                   <option value="inkind">In-Kind (Product/Service)</option>
                   <option value="media">Media Partnership</option>
                   <option value="other">Other</option>
                 </select>
              </div>
            )}

             {intent === 'general' && (
              <div className="animate-fade-in-up">
                 <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">I am interested in</label>
                 <select 
                   name="interestArea" 
                   value={formData.interestArea}
                   onChange={handleInputChange}
                   className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors text-slate-700"
                 >
                   <option value="volunteer">Volunteering</option>
                   <option value="artist">Showcasing Art/Film</option>
                   <option value="membership">Membership</option>
                   <option value="other">Other</option>
                 </select>
              </div>
            )}

            <div>
               <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
               <textarea 
                 name="message" 
                 required
                 rows={3}
                 value={formData.message}
                 onChange={handleInputChange}
                 className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors resize-none placeholder:text-slate-300"
                 placeholder="Tell us more about your interest..."
               ></textarea>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-5 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2
              ${intent === 'general' ? 'bg-brand-purple' : 
                intent === 'sponsor' ? 'bg-brand-gold text-brand-dark' : 
                'bg-brand-teal'}`}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );

  // Step 3: Success
  const renderStep3 = () => (
    <div className="max-w-2xl mx-auto text-center py-12 animate-fade-in-up">
       <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8 shadow-inner">
          <CheckCircle2 size={48} />
       </div>
       <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Received!</h2>
       <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto">
         Thank you for reaching out. Our team will review your inquiry and get back to you shortly at <span className="font-bold text-slate-900">{formData.email}</span>.
       </p>
       
       <button 
         onClick={resetForm}
         className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-purple font-bold uppercase tracking-widest transition-colors"
       >
         <ArrowLeft size={16} /> Return Home
       </button>
    </div>
  );

  return (
    <div className="bg-paper min-h-screen pt-28 pb-20 px-6">
       <div className="max-w-7xl mx-auto">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
       </div>
    </div>
  );
};

export default Contact;