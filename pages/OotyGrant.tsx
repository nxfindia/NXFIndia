import React, { useState } from 'react';
import { CheckCircle, CheckCircle2, Download, CreditCard, ChevronRight } from 'lucide-react';

const OotyGrant: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment and submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-paper">
      {/* Header Section */}
      <section className="px-6 lg:px-12 py-20 border-b border-slate-200 bg-white">
         <div className="max-w-5xl mx-auto text-center">
            <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-4 block animate-fade-in-up">Grant Program</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-slate-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Ooty Short Film<br/>
              <span className="text-slate-400">Production Grant 2026</span>
            </h1>
            <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A national initiative to support emerging Indian filmmakers in developing and producing original short films.
            </p>
         </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Overview */}
        <section className="prose prose-lg prose-slate max-w-none">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 block">01. Introduction</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Overview</h2>
          <p className="text-slate-700 leading-relaxed">
            The Ooty Short Film Production Grant 2026 is an initiative of the Ooty Short Film Festival, designed to support emerging filmmakers by enabling the transition from script to screen. The program offers financial support, mentorship, and industry exposure to selected projects.
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-8">
            <p className="text-slate-700 font-medium">
              <strong className="text-brand-dark">Note:</strong> This grant is open exclusively to Indian filmmakers.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section>
          <span className="text-brand-purple font-bold uppercase tracking-widest text-xs mb-6 block">02. Benefits</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="text-4xl font-bold text-brand-teal mb-4 group-hover:scale-110 transition-transform origin-left">₹1,00,000</div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Production Grant</h3>
              <p className="text-sm text-slate-500">For one selected project</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="text-xl font-bold text-brand-purple mb-4 group-hover:scale-110 transition-transform origin-left">Post-Production</div>
              <p className="text-slate-600 text-sm leading-relaxed">Support including editing and sound guidance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
              <div className="text-xl font-bold text-brand-red mb-4 group-hover:scale-110 transition-transform origin-left">Festival Premiere</div>
              <p className="text-slate-600 text-sm leading-relaxed">Opportunity to showcase the completed film at the Ooty Short Film Festival.</p>
            </div>
          </div>
          <div className="mt-8 bg-brand-purple/5 p-6 rounded-2xl border border-brand-purple/10">
            <p className="text-slate-800 font-medium">
              <span className="text-brand-purple font-bold">Additionally:</span> Three shortlisted applicants will receive mentorship support.
            </p>
          </div>
        </section>

        {/* Submission Details */}
        <section>
          <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6 block">03. Requirements</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Submission Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Applicants must submit:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-brand-purple/10 p-1 rounded-full mr-3 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-brand-purple flex-shrink-0" />
                  </div>
                  <span className="text-slate-600">Original short film script (5–20 minutes recommended runtime)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-purple/10 p-1 rounded-full mr-3 mt-0.5">
                    <ChevronRight className="w-4 h-4 text-brand-purple flex-shrink-0" />
                  </div>
                  <span className="text-slate-600">Director's note explaining vision and execution</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Evaluation Criteria:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-brand-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  </div>
                  <span className="text-slate-600">Originality and storytelling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  </div>
                  <span className="text-slate-600">Cinematic vision</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-teal/10 p-1 rounded-full mr-3 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  </div>
                  <span className="text-slate-600">Feasibility of production</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Submission Fee & Participant Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <span className="text-brand-dark font-bold uppercase tracking-widest text-xs mb-6 block">04. Investment</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Submission Fee</h2>
            <div className="text-4xl font-bold text-slate-900 mb-6">₹1,500 <span className="text-base font-normal text-slate-500">per entry</span></div>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Note:</strong> The fee supports the administrative and review process of the grant and contributes to the sustainability of the initiative. The fee is non-refundable.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6 block">05. Perks</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Participant Benefits</h2>
            <p className="text-slate-700 mb-6 font-medium">All applicants will receive:</p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-3"></span> Free NXF Membership (1-year validity)</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-3"></span> Opportunity to be part of the Citizen Jury of OSFF</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-3"></span> Access to global networking opportunities</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-3"></span> Discounts on post-production services</li>
            </ul>
          </section>
        </div>

        {/* Timeline & Selection Process */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <span className="text-brand-teal font-bold uppercase tracking-widest text-xs mb-6 block">06. Schedule</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Timeline</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-600 font-medium">Call Opens</span>
                <span className="text-slate-900 font-bold">1 April 2026</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-slate-600 font-medium">Submission Deadline</span>
                <span className="text-brand-purple font-bold">30 April 2026</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-slate-600 font-medium">Announcement of Results</span>
                <span className="text-slate-900 font-bold">June 2026</span>
              </div>
            </div>
          </section>

          <section>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-6 block">07. Procedure</span>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Selection Process</h2>
            <ol className="relative border-l border-slate-200 ml-3 space-y-8">
              <li className="pl-8 relative">
                <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[8.5px] top-1"></div>
                <p className="text-slate-700 font-medium">Initial review by programming team</p>
              </li>
              <li className="pl-8 relative">
                <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[8.5px] top-1"></div>
                <p className="text-slate-700 font-medium">Shortlisting of entries</p>
              </li>
              <li className="pl-8 relative">
                <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[8.5px] top-1 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>
                <p className="text-slate-700 font-medium">Final selection by independent jury</p>
              </li>
            </ol>
            <p className="mt-8 text-sm text-slate-500 italic bg-slate-50 p-4 rounded-lg border border-slate-100">Selection is strictly merit-based.</p>
          </section>
        </div>

        {/* Call to Action */}
        <section className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          {!showForm && !isSuccess ? (
            <div className="max-w-2xl mx-auto animate-in fade-in zoom-in duration-500 relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to bring your script to screen?</h2>
              <p className="text-slate-300 mb-8 text-lg">Submit your project for the Ooty Short Film Production Grant 2026.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Apply Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <Download className="mr-2 w-5 h-5" />
                  Download Guidelines
                </button>
              </div>
            </div>
          ) : showForm && !isSuccess ? (
            <div className="max-w-xl mx-auto text-left bg-white text-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl animate-in slide-in-from-bottom-8 duration-500 relative z-10 border border-slate-100">
              <h3 className="text-3xl font-serif font-bold mb-8 text-slate-900">Grant Submission Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                  <input required type="text" className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input required type="email" className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Project Title</label>
                  <input required type="text" className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300" placeholder="Enter your short film title" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Script & Director's Note (Link)</label>
                  <input required type="url" className="w-full text-lg border-b-2 border-slate-200 py-3 focus:outline-none focus:border-slate-900 bg-transparent transition-colors placeholder:text-slate-300" placeholder="Google Drive / Dropbox link" />
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-slate-700 uppercase tracking-wide text-sm">Submission Fee</span>
                    <span className="text-2xl font-bold text-slate-900">₹1,500</span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <CreditCard className="mr-2 w-5 h-5" />
                        Pay ₹1,500 & Submit
                      </span>
                    )}
                  </button>
                </div>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="w-full text-slate-500 hover:text-brand-purple text-sm font-bold uppercase tracking-widest mt-4 transition-colors"
                >
                  Cancel
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-[2rem] shadow-2xl animate-in zoom-in duration-500 relative z-10 border border-slate-100">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-teal/10 text-brand-teal rounded-full mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900">Submission Successful!</h3>
              <p className="text-slate-600 text-lg mb-8">
                Thank you for applying to the Ooty Short Film Production Grant 2026. Your payment of ₹1,500 was successful. We have sent a confirmation email to your registered address.
              </p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setShowForm(false);
                }}
                className="bg-slate-900 hover:bg-brand-purple text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                Return to Grant Page
              </button>
            </div>
          )}
        </section>

        {/* Footer Note */}
        <div className="text-center pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            This initiative is conducted by a registered Section 8 not-for-profit organization based in Coimbatore, committed to supporting independent cinema and emerging filmmakers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OotyGrant;
