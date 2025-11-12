
import newlogo from './assets/newlogo.png'
import cmpltlogo from './assets/cmplt-logo.png' 
const Footer = () => {
  return (
    <footer className='top-0 flex flex-row py-5 px-9 justify-between items-center bg-[#0a224c] shadow-sm shadow-blue-900 '>
      
        {/* LOGO */}
        <div className='flex top-0  '>
              <img className='logo w-[22px] md:w-[38px]' src={newlogo} alt="logo" />
              <img className='logo w-[120px] md:w-[150px] mt-1 ' src={cmpltlogo} alt="logo" />
        </div>
        <div className=' text-gray-400 '>
        <p> &copy; 2025 CompileIn. All rights reserved. | Terms | Privacy </p>
        </div>
        <div className='flex space-x-8 text-gray-400 text-base'>
        <a href="#" className="hover:text-[#3194ce] transition-colors">Twitter</a>
        <a href="#" className="hover:text-[#3194ce] transition-colors">GitHub</a>
        <a href="#" className="hover:text-[#3194ce] transition-colors">LinkedIn</a>
      </div>
      
    </footer>
  )
}

export default Footer