import heroImage from '../assets/heroImage.png'
import {MdArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'


export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a full stack Developer </h2>
          <p className='text-gray-500 py-4 max-w-md'>I have over 7 years of experience of overall programming. Currently I am focusing on full stack development using react.js, next.js, node.js, express.js and AWS technologies</p>

          <div>
            <button>
            <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 curson-pointer'>
              Portfolio
              <span className='hover:rotate-90 duration-300'><MdArrowRight size={30}/></span>
            </Link>
            </button>
          </div>
        </div>

        <div>
          <img src={heroImage} alt="profile" className='rounded-2xl mx-auto w-1/3 md:w-30'/>
        </div>
      </div>
    </div>
  )
}
