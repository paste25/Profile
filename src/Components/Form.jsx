import React, {useRef, useState} from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Form = () => {
  let [isOpen, setIsOpen] = useState(false)

  const formRef = useRef(null)
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsOpen(true)
      setTimeout(()=>{
        setIsOpen(false)
      }, 3000)
      console.log("Success", res);
      formRef.current.reset();
    }
  };

  return (
    <>
      <h1 className='font-semibold text-2xl'>Contact Me</h1>
      <p className='text-xs mt-3 text-[#6b6b6b]'>You Can Also Get In Touch With Me Through This Form Below</p>
      <form onSubmit={onSubmit} className='mt-2' ref={formRef}>
        <input type="text" name="name" className='bg-[#1d1d1d] focus:outline-none w-full rounded-md h-10 px-2' required  placeholder='John Doe'/>
        <input type="email" name="email" className='bg-[#1d1d1d] focus:outline-none w-full rounded-md mt-2 h-10 px-2' required placeholder='JohnDoe@mail.com'/>
        <textarea name="message" className='bg-[#1d1d1d] focus:outline-none w-full rounded-md mt-2 px-2 h-40 py-2' required placeholder='Hey! there'></textarea>
        <button type="submit" className='bg-[#1d1d1d] w-full rounded-md mt-2 py-2'>Send</button>
      </form>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
        <motion.div className="fixed p-4 bottom-0 right-0 overflow-hidden"
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{ease:'easeOut',duration:0.5}}>
          <DialogPanel className="max-w-lg space-y-4 text-white bg-[#1d1d1d] p-4 rounded-lg">
            <DialogTitle className="font-bold">Thank you for reaching out!</DialogTitle>
          </DialogPanel>
        </motion.div>
      </Dialog>
    </>
  );
}

export default Form
