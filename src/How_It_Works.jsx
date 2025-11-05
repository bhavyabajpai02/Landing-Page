import React from 'react';

const points = [
  {
    title: 'AI Chatbot',
    shortDescription: 'Instant, conversational error explanations.',
    longDescription: 'Get step-by-step explanations for your errors. Our chatbot breaks down complex problems into simple, understandable guidance.',
  },
  {
    title: 'Simple Errors',
    shortDescription: 'Error messages you can actually understand.',
    longDescription: 'We translate confusing compiler jargon into plain English, so you get clear guidance on what went wrong and how to fix it.',
  },
  {
    title: 'AI Mode Switch',
    shortDescription: 'Toggle real-time code suggestions.',
    longDescription: 'Enable intelligent code suggestions and autocompletion when you need a boost, or toggle it off for a distraction-free experience.',
  },
  {
    title: 'Multi-Language',
    shortDescription: 'One compiler for all your languages.',
    longDescription: 'Seamlessly switch between Python, Java, C++, and more—all in one place without juggling different setups.',
  },
  {
    title: 'Cloud Accessibility',
    shortDescription: 'Code anywhere, anytime, without setup.',
    longDescription: 'Our cloud platform eliminates setup or version management, ensuring seamless use across all your devices.',
  },
  {
    title: 'Beginner-Friendly',
    shortDescription: 'Guided help for new coders.',
    longDescription: 'New to coding? Our simplified guidance and clear explanations will help you learn the fundamentals faster.',
  },
];

const How_It_Works = () => {
  return (
    <section id='how_works' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6 text-center'>
        
        <h2 className='text-[40px] font-bold'>
          How It Works
        </h2>
        <p className=''>
          Explore our powerful features designed to make your coding experience smoother and more efficient.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
          
          {points.map((feature, index) => (
            <div
              key={index}
              className='
                group relative bg-white rounded-xl shadow-lg p-6 
                flex flex-col items-center 
                transition-all duration-300 ease-in-out transform 
                hover:-translate-y-2 hover:shadow-2xl hover:scale-105
                overflow-hidden border border-gray-100
              '
            >
              <div className='flex flex-col items-center text-center transition-opacity duration-300 group-hover:opacity-0'>
                <div className='text-5xl mb-4 p-4  rounded-full'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-10'>{feature.title}</h3>
                <p className='text-gray-500'>
                  {feature.shortDescription}
                </p>
              </div>

              <div 
                className='
                  absolute inset-0 p-6 flex items-center justify-center 
                  opacity-0 transition-opacity duration-300 
                  group-hover:opacity-100
                '
              >
                <p className=''>{feature.longDescription}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default How_It_Works;