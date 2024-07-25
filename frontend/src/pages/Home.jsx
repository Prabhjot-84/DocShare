import React from 'react'
// import Column from './Column'
import File from './File'

const Home = () => {
    return (
        <>
            {/* <div className='p-10 pb-0 h-[88%] w-screen flex items-start justify-start overflow-scroll custom-scrollbar'>
                <div className='h-full flex'>
                    <Column />
                    <Column />
                </div>
            </div> */}
            <div className='p-8 h-[90%] overflow-y-scroll'>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] gap-4 md:gap-y-8 justify-center items-center'>
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                    <File />
                </div>
            </div>
        </>
    )
}

export default Home