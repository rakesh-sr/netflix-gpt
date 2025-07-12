import React from 'react'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";


const VideoTitle = (props) => {
    const { title, overview } = props;
    return (
        <div className='w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='font-bold text-6xl'>{title}</h1>
            <p className='mt-2 text-base w-1/4 text-white'>{overview}</p>
            <div className='flex mt-4'>
                <button className="bg-white text-black font-bold text-base p-3 px-10 rounded-lg flex items-center gap-2 hover:bg-opacity-80">
                    <FaPlay />
                    Play
                </button>
                <button className="bg-gray-500 text-white font-bold text-base bg-opacity-50 mx-2 p-3 px-10 rounded-lg flex items-center gap-2 hover:bg-opacity-80">
                    <AiOutlineInfoCircle fontSize={22} />

                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle