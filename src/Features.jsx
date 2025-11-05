import React from 'react'
import images from './assets/image.png'
const featuresList = [
   {
      title: "AI powered debugging" ,
      description: "Real-time error ananlysis, explanations, and fix suggestions as you type" ,
      img:images
   },
   {
      title: "Zero Setup, Anywhere",
      description: "No installs or version headaches - just opes in your browser.",
      img:images
   },
   {
      title: "Smart Autocomplete",
      description: "Context-aware code completion to speed up writing and reduce bugs.",
      img:images
   },
   {
      title: "Cloud-Based Compilation",
      description: "Secured the user data in a MongoDB cloud databse , ensuring persistence, scalability, and quick access.",
      img:images
   },
   {
      title: "Real-Time Execution",
      description: "Compile and run code instantly with cloud-backed performance.",
      img:images
   }
];
const Features = () => {
  return (
    <div id='features' >

      <h1 className='text-[40px] font-[600] text-center'>FEATURES</h1>
      <div className='flex flex-col gap-8  mx-auto'>
         {featuresList.map((feature,index) =>{
            const isOdd = index%2 !== 0;
            return(
               <div key={feature.title} className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-lg ${isOdd ? 'md:flex-row-reverse' : ''}`}>

                  {/* IMAGE */}
                  <div className='flex-1'>
                     <img src={feature.img} alt ={feature.title}/>
                  </div>

                  {/* TEXT */}
                  <div className='flex-1'>
                     <h2>{feature.title}</h2>
                     <p>{feature.description}</p>
                  </div>
               </div>
            );
         })}
        
         
      </div>

    </div> 
  )
}

export default Features