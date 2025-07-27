'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
        <div className="flex flex-col gap-4">
            {/* face */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            >
                <div className="flex w-full pt-15 animation">
                    <div className="w-[40%] flex items-center justify-center">
                        <Image alt="face" src="/face.png" width={200} height={20} className='rounded-full'/>
                    </div>
                    <div className="w-[60%] flex items-center justify-center pr-15">
                        <h1 className='text-3xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                            Hello! I&apos;m Suhas, a student at the University of Waterloo studying Computer Engineering. <br/> Some of my interests include...
                        </h1>
                    </div>
                </div>
            </motion.div>
            
            {/* programming */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            >   
                <div className="divider"/>
                <div className="flex w-full py-10 animation">
                    <div className="w-[50%] flex items-center justify-end px-10">
                        <h1 className='text-2xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                            Programming
                        </h1>
                    </div>
                    <div className="w-[50%] flex items-center justify-start px-10">
                        <Image alt="computer" src="/computer.png" width={200} height={200} className='rounded-lg'/>
                    </div>
                </div>
            </motion.div>
            {/* tennis */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            >
                <div className="divider"/>
                <div className="flex w-full py-10 animation">
                    <div className="w-[50%] flex items-center justify-end px-10">
                        <Image alt="tennis" src="/tennis.png" width={200} height={200} className='rounded-full'/>
                    </div>
                    <div className="w-[50%] flex items-center justify-start px-10">
                        <h1 className='text-2xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                            Tennis
                        </h1>
                    </div>
                </div>
            </motion.div>
            {/* pool */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            >
                <div className="divider"/>
                <div className="flex w-full py-10 animation">
                    <div className="w-[50%] flex items-center justify-end px-10">
                        <h1 className='text-2xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                            Pool
                        </h1>
                    </div>
                    <div className="w-[50%] flex items-center justify-start px-10">
                        <Image alt="pool" src="/pool.jpg" width={200} height={200} className='rounded-full'/>
                    </div>
                </div>
            </motion.div>
            {/* doggo */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
            >
                <div className="divider"/>
                <div className="flex w-full py-10 animation">
                    <div className="w-[50%] flex items-center justify-end px-10">
                        <Image alt="doggo" src="/doggo.jpg" width={200} height={200} className='rounded-full'/>
                    </div>
                    <div className="w-[50%] flex items-center justify-start px-10">
                        <h1 className='text-2xl font-semibold text-gray-800 leading-snug text-center font-mono'>
                            My Cute Doggo
                        </h1>
                    </div>
                </div>
            </motion.div>
        </div>
    </>
  )
}

export default AboutMe;