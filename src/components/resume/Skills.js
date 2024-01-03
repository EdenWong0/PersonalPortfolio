import React from 'react';
import {motion} from 'framer-motion';


export const Skills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className="w-full flex gap-20">
            <div className="w-1/3">
                <div className='py-12 font-titleFont'>
                    <h4 className="text-4xl font-bold">Languages</h4>
                </div>
                <div className="mt-14 w-full flex flex-col">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">HTML</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-full h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">CSS</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">JavaScript</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">TypeScript</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">70%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">SQL</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[95%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">95%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">DDL</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">DML</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[100%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">PL/SQL</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[85%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">85%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
            <div className='py-12 font-titleFont'>
                    <h4 className="text-4xl font-bold">Frameworks</h4>
                </div>
                <div className="mt-14 w-full flex flex-col">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">React.js</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Angular</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">70%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Next.js</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[80%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Tailwind CSS</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">BootStrap 5</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[75%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">75%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
            <div className='py-12 font-titleFont'>
                    <h4 className="text-4xl font-bold">Design</h4>
                </div>
                <div className="mt-14 w-full flex flex-col">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Adobe Photoshop</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[85%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">85%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Frigma</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[90%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium text-designColor">Canva</p>
                        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <motion.span 
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="w-[70%] h-full bg-gradient-to-r bg-white rounded-lg relative"
                            >
                                <span className="absolute -top-7 right-0 text-designColor">70%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
  )
}
