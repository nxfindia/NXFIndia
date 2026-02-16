import React from 'react';
import { BookOpen, Heart, Users, Briefcase, GraduationCap, Activity } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      id: 1,
      title: 'Digital Literacy Drive',
      category: 'Education',
      icon: <BookOpen className="w-6 h-6 text-white" />,
      color: 'bg-blue-500',
      description: 'Equipping rural schools with computer labs and internet connectivity to ensure every child has access to digital learning tools.',
      image: 'https://picsum.photos/600/400?random=20'
    },
    {
      id: 2,
      title: 'Mobile Health Clinics',
      category: 'Healthcare',
      icon: <Activity className="w-6 h-6 text-white" />,
      color: 'bg-green-500',
      description: 'Reaching the unreached with our mobile van clinics that provide basic checkups, medicines, and maternal care in remote villages.',
      image: 'https://picsum.photos/600/400?random=21'
    },
    {
      id: 3,
      title: 'Women Entrepreneurship',
      category: 'Livelihood',
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: 'bg-orange-500',
      description: 'Training women in vocational skills like tailoring, handicrafts, and food processing, and helping them set up small businesses.',
      image: 'https://picsum.photos/600/400?random=22'
    },
    {
      id: 4,
      title: 'Scholarship Program',
      category: 'Education',
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      color: 'bg-indigo-500',
      description: 'Providing financial aid to meritorious students from economically weaker sections to pursue higher education.',
      image: 'https://picsum.photos/600/400?random=23'
    },
    {
      id: 5,
      title: 'Youth Mentorship',
      category: 'Development',
      icon: <Users className="w-6 h-6 text-white" />,
      color: 'bg-purple-500',
      description: 'Connecting corporate professionals with underprivileged youth for guidance on career paths and soft skills development.',
      image: 'https://picsum.photos/600/400?random=24'
    },
    {
      id: 6,
      title: 'Nutrition for Kids',
      category: 'Healthcare',
      icon: <Heart className="w-6 h-6 text-white" />,
      color: 'bg-red-500',
      description: 'Addressing malnutrition by providing nutritious mid-day meals and supplements to children in government schools.',
      image: 'https://picsum.photos/600/400?random=25'
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Initiatives</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore the various initiatives we undertake to build a more equitable society.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 ${program.color} p-2 rounded-lg shadow-lg`}>
                  {program.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">{program.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>
                <button className="w-full py-2 px-4 rounded-lg border-2 border-slate-100 text-slate-600 font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;