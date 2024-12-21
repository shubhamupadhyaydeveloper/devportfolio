import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react'

const ProjectItem = () => {
    return (
        <div className="border-[2px] border-[#a6a7d8] border-dashed rounded-[10px] w-full h-fit p-[30px]"
        >
            <div className='flex flex-col  md:flex-row gap-[30px]'>
                <img src='https://images.unsplash.com/photo-1733234976396-87cf34ae6038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8' className='rounded-[8px] md:w-[55vw] w-[90vw] h-[30vh]' />
                <div className='gap-[15px] items-center '>
                    <div>
                        <div className='flex flex-row justify-between items-center'>
                            <h3 className='text-white font-poppins text-[40px] font-bold'>Timeloon</h3>
                            <div>
                                <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#a6a7d8]">
                                    <IconBrandGithub
                                        size={25}
                                        className="text-neutral-500 dark:text-neutral-300"
                                    />
                                </button>

                            </div>
                        </div>
                        <h3 className='text-[20px]' style={{ fontFamily: "Space Grotesk" }}>Design + Development</h3>
                    </div>
                    <div className='mt-[10px]'>
                        <h3 className='text-white font-poppins text-[19px]'>
                            Timeloom helps you to document your technical journey in an activity timeline like page. You can create your own page and craft it as you like.
                        </h3>
                    </div>
                    <div className='flex flex-row flex-wrap gap-[15px] mt-[15px]'>

                        <div className=''>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                        <div>
                            <div className='w-fit p-2 h-[4vh] rounded-full bg-[#a6a7d8]'>
                                <h3 className='text-[#c8c8ca] ' style={{ fontFamily: "Space Grotesk" }}>Next.js</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;