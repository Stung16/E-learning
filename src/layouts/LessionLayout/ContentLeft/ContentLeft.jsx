import React from 'react'
import "./ContentLeft.css"
const ContentLeft = () => {
  return (
    <div className='content_left'>
        <div className="Video_wrapper">
            <div className='learning-center'>
                <div className='VideoPlayer_wrapper pt-[56.25%] relative'>
                    <div className="VideoPlayer_player w-[100%] h-[100%] inset-0 overflow-hidden absolute">
                        <div className='video'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Video_content min-h-[400px] py-0 px-[8.5%]">
            <div className="Video_contentTop items-center flex justify-between relative">
                <header className='wrapper'>
                    <h1 className='text-[28px] mt-12 mx-0 mb-2'>Mô hình Client - Server là gì?</h1>
                </header>
            </div>
        </div>
    </div>
  )
}

export default ContentLeft