/* eslint-disable react/no-unescaped-entities */
import synergenicx from '../assets/Experience/synergenicx.png'

const ExSynergenicx = () => {
  return (
    <div>

        {/* experiance section - Synergenicx------------------------------------------------------- */}

        <div className='flex flex-col items-center justify-between w-full h-auto px-2 py-2 mx-auto mb-4 text-gray-800 transition-all duration-500 ease-in-out bg-white bg-opacity-0 border border-gray-200 shadow-md dark:text-gray-200 dark:border-gray-600 rounded-xl hover:shadow-md hover:shadow-orange-400 backdrop-blur-md'>
        <div className='flex flex-wrap items-center justify-between w-full'>
            <div className='flex items-center justify-center px-2 md:px-6'>
                <img className='hidden w-16 m-2 mr-3 rounded-full shadow-lg ring-2 ring-orange-600 md:block' src={synergenicx} alt="" />
                <div className='text-left '>
                    <h4 className='text-lg uppercase duration-1000 ease-in-out md:text-2xl lg:text-2xl'><span className='text-orange-500'>SynergenicX</span></h4>
                    <h4 className='text-sm font-medium md:text-base dark:text-gray-200'>Product Lead</h4>
                </div>
            </div>
            <div className='inline-block gap-4 p-2 text-sm duration-500 ease-in-out md:text-right md:text-base'>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-200'>April 2024 - Present </p>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-400'>Remote-Part time</p>
            </div>
        </div>
        <div className='p-2 text-left'>
            <p className='pb-4 text-sm text-gray-600 lg:text-base dark:text-gray-400'> SynergenicX is a budding software solutions startup focused on delivering innovative and customized digital solutions. As a Product Lead at SynergenicX, I work closely with our talented team to ensure we provide exceptional technology solutions tailored to our clients' needs.</p>
            {/* <h4 className='text-base font-semibold text-orange-500'>Key Responsibilities</h4>
            <ul className='ml-6 text-sm list-disc'>
                <li>Develop and maintain the NodeJS server and backend of the Web Application software solutions.</li>
                <li>Collaborate with the full-stack developer to contribute to the  frontend development.</li>
                <li>Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
            </ul> */}
        </div>
    </div>

    </div>
  )
}

export default ExSynergenicx