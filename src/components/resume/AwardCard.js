import React from 'react'

const AwardCard = ( {title, des, secDes, src} ) => {

    const openImage = () => {
        window.open(src, '_blank');
    };

  return (
    <div className='w-full px-12 h-auto py-12 mt-12 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#404040] group hover:bg-gradient-to-b hover:from-[#12303b] hover:to-[#0c2027] transition-colors duration-1000'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img onClick={openImage} className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"src={src} alt="src"/>
        </div>
        <div className='w-full mt-10 flex flex-col gap-5'>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-base uppercase">{title}</h3>
                </div>
                <p className="text-sm tracking-wide mt-3 hover:text-white duration-300">
                    {des}
                </p>
                <p className="text-sm tracking-wide mt-3 hover:text-white duration-300">
                    {secDes}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AwardCard