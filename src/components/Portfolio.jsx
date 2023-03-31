import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


export default function Portfolio() {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            href:""
        },
        {
            id: 2,
            src: installNode,
            href:""
        },
        {
            id: 3,
            src: navbar,
            href:""
        },
        {
            id: 4,
            src: reactParallax,
            href:""
        },
        {
            id: 5,
            src: reactSmooth,
            href:""
        },
        {
            id: 6,
            src: reactWeather,
            href:""
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>   
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Chech out my projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src, href})=>{
                    return(
                        
                        <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">Demo</a>    
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={href} className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">Code</a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
