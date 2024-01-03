import React from 'react';
import TItle from '../layouts/TItle';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const Contact = () => {
  return (
    <section id="contacts" className="w-full py-20">
        <div className='flex justify-center items-center'>
            <TItle 
            des="Let's talk with me"
            />
        </div>
        <div className="w-full">
            <div className="w-full h-auto flex justify-between">
                <ContactLeft />
                <ContactRight />
            </div>
        </div>
    </section>
  )
}

export default Contact