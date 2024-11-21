import React from 'react'
import { CiUser } from 'react-icons/ci'
import { SiWhatsapp } from 'react-icons/si'

const PopupForm = () => {
    return (
        <div className='sm:w-[350px] p-10 bg-white shadow-md rounded-lg border'>
            <div className='text-2xl flex gap-10'>
                <div>
                    <div className='w-28 h-28 rounded bg-red-600'></div>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-3xl flex font-semibold gap-1'> <CiUser /> Sundram Jatav</p>
                    <p style={{ color: "var(--primary-yellow)" }}>View Listings</p>
                </div>
            </div>
            <form className='text-2xl mt-4'>
                <div className='flex gap-4 flex-col'>
                    <input type="text" className='boder w-full px-4 rounded-md outline-none py-3 border' placeholder='Name' />
                    <input type="text" className='boder w-full px-4 rounded-md outline-none py-3 border' placeholder='Phone' />
                    <input type="text" className='boder w-full px-4 rounded-md outline-none py-3 border' placeholder='Email' />
                    <textarea className='boder w-full px-2 py-2 border rounded-md outline-none h-32' placeholder='Hello, I am interested in [Modern apartment on the bay]'></textarea>
                    <select className='boder w-full px-4 rounded-md outline-none py-3 border'>
                        <option value="plot1" selected disabled>selected</option>
                        <option value="plot1">Plot1</option>
                        <option value="plot2">Plot2</option>
                        <option value="plot3">Plot3</option>
                    </select>


                    <p>By submitting this form I agree to <span style={{ color: "var(--primary-yellow)" }}>Terms of Use</span></p>
                    <div className='flex gap-5'>
                        <button
                            className='w-full py-4 rounded-md text-white'
                            style={{ background: "var(--primary-yellow)" }}
                        >
                            Send Message
                        </button>
                        <button
                            className='w-full py-4 rounded-md'
                            style={{
                                color: "var(--primary-yellow)",
                                border: "1px solid var(--primary-yellow)",
                            }}
                        >
                            Call
                        </button>
                    </div>
                    <button
                        className='w-full py-4 rounded-md'
                        style={{
                            color: "var(--primary-yellow)",
                            border: "1px solid var(--primary-yellow)",
                        }}
                    >
                        <div className='flex items-center justify-center gap-2'>
                            <SiWhatsapp />
                            Whatsapp
                        </div>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default PopupForm