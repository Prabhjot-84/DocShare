import React from 'react'
import Column from './Column'

const Home = () => {
    return (
        <>
            <div className='p-10 pb-0 h-[88%] w-screen flex items-start justify-start overflow-scroll custom-scrollbar'>
                <div className='h-full flex'>
                <Column />
                <Column />
                </div>
            </div>
        </>
    )
}

export default Home