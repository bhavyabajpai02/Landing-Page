
import Headder from './Headder'
import Features from './Features'
import How_It_Works from './How_It_Works'
import img_ from './assets/robot.jpeg'
function App() {
  return (
    <div>
    <Headder/>
    <div className='flex justify-between'>
      <div className='p-[100px] ml-[150px]'>
        <h1 className="p-name text-[40px]">CompileIN</h1>
        <p className='lower-line'> Code Smarter, Debug Faster — in the Cloud </p>
      </div>
      <img className="flex space-x-9 w-[300px] rounded-[50%] mr-[300px] animate-bounce ease-in-out" src={img_} alt="" />
      {/* img need to be inserted */}
    </div>
    <Features/>
    <How_It_Works/>
    </div>
  )
}

export default App
