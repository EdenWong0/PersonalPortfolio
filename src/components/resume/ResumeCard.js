import React from 'react'

const ResumeCard = ({title, subTitle, gpaOrlocation}) => {
  return (
    <div className="w-full h-1/3 group flex">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative ">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-cyan-200 bg-opacity-60">
                <span  className="w-3 h-3 rounded-full bg-cyan-900 inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
        </div>
        <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne">
            <div className="flex items-center justify-between">
                <div>
                    <div>
                    <h3 className="text-xl font-semibold group-hover:text-white duration-300">{title}</h3>
                    <p className="text-sm my-2 text-white group-hover:text-white duration-300">{subTitle}</p>
                    </div>
                </div>
                <div>
                    <p className="w-20 h-10 text-designColor bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">{gpaOrlocation}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard