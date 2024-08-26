
const Experience = () => {
  return (
    <div id="experience" className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="flex flex-col items-center max-w-full ">

         <h2 className="max-w-full mb-8 text-3xl font-semibold text-center text-gray-300 sm:text-4xl">Experience</h2>

         <p className="max-w-full mb-8 text-base text-center text-neutral-400 sm:text-xl">
         A snapshot of my journey, marked by passion, creativity, and impactful projects.
        </p>
    </div>
    

    {/* experiance section */}

    
    <div className='flex flex-col items-center justify-between w-full h-auto px-2 py-2 mx-auto mb-4 text-gray-800 transition-all duration-500 ease-in-out bg-white bg-opacity-0 border border-gray-200 shadow-md dark:text-gray-200 dark:border-gray-600 rounded-xl hover:shadow-md hover:shadow-orange-400 backdrop-blur-md'>
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center px-2 md:px-6'>
                <img className='hidden w-16 m-2 rounded-full shadow-lg ring-2 ring-green-600 shadow-green-600 md:block' src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg' alt="" />
                <div className='text-left '>
                    <h4 className='text-lg uppercase duration-1000 ease-in-out md:text-2xl lg:text-3xl'><span className='text-red-500'>Code</span>101</h4>
                    <h4 className='text-sm font-medium md:text-base dark:text-gray-200'>Software Engineer</h4>
                </div>
            </div>
            <div className='gap-4 p-2 text-sm text-right duration-500 ease-in-out md:text-base'>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-200'>July 2022 - Present </p>
                <p className='text-sm text-gray-800 md:text-base dark:text-gray-200'>Techtopia, Digital Realm</p>
            </div>
        </div>
        <div className='p-2 text-left'>
            <p className='pb-4 text-sm text-gray-600 lg:text-base dark:text-gray-400'>I am a Software Engineer currently employed at Code101, where I work as a full-stack developer as part of the Web Application Development team. Together, we utilize ReactJS and NodeJS to create software solutions that provide users with a seamless and enjoyable experience.</p>
            <h4 className='text-base font-semibold text-green-400'>Key Responsibilities</h4>
            <ul className='ml-6 text-sm list-disc'>
                <li>Develop and maintain the NodeJS server and backend of the Web Application software solutions.</li>
                <li>Collaborate with the full-stack developer to contribute to the  frontend development.</li>
                <li>Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
            </ul>
        </div>
    </div>


    
    </div>
  )
}

export default Experience
