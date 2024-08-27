import ceyentra from '../assets/Experience/ceyentra.png'

const ExCeyentra = () => {
  return (
    <div>

<div className='flex flex-col items-center justify-between w-full h-auto px-2 py-2 mx-auto mb-4 text-gray-800 transition-all duration-500 ease-in-out bg-white bg-opacity-0 border border-gray-200 shadow-md dark:text-gray-200 dark:border-gray-600 rounded-xl hover:shadow-md hover:shadow-orange-400 backdrop-blur-md'>
        <div className='flex flex-wrap items-center justify-between w-full'>
            <div className='flex items-center justify-center px-2 md:px-6'>
                <img className='hidden w-16 m-2 mr-3 rounded-full shadow-lg ring-2 ring-orange-600 md:block' src={ceyentra} alt="" />
                <div className='text-left '>
                    <h4 className='text-lg uppercase duration-1000 ease-in-out md:text-2xl lg:text-2xl'><span className='text-orange-500'>Ceyentra Technologies</span></h4>
                    <h4 className='text-sm font-medium md:text-base dark:text-gray-200'>Trainee UI/UX Designer</h4>
                </div>
            </div>
            <div className='inline-block gap-4 p-2 text-sm duration-500 ease-in-out md:text-right md:text-base'>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-200'>Nov 2023 - June 2024 </p>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-400'>Hybrid</p>
            </div>
        </div>
        <div className='p-2 text-left'>
            <p className='pb-4 text-sm text-gray-600 lg:text-base dark:text-gray-400'>I worked as a Trainer UI/UX Designer at Ceyentra Technologies, where I led the design of a complete ERP system for Live Nation Entertainment in Denmark. In this role, I collaborated closely with the client to understand their requirements and translated them into user-friendly, visually appealing interfaces. Throughout the project, I worked with cross-functional teams, using tools like Figma to create wireframes, prototypes, and high-fidelity designs, ensuring an intuitive and seamless user experience.</p>
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

export default ExCeyentra