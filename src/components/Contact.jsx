import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Using Formspree as a free alternative
        // Replace with your Formspree endpoint: https://formspree.io/
        fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            }),
        })
            .then((response) => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);

                alert("Ahh, something went wrong. Please try again.");
            });
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75 }}
                className='flex-[0.75] glass-strong p-8 rounded-2xl'
            >
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
                    Get in touch
                </p>
                <h3 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
                    Contact.
                </h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='glass py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:border-[#915EFF] focus:border-2 transition-all'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='glass py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:border-[#915EFF] focus:border-2 transition-all'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='glass py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:border-[#915EFF] focus:border-2 transition-all'
                        />
                    </label>

                    <motion.button
                        type='submit'
                        className='glass-strong py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all duration-300 glow'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {loading ? "Sending..." : "Send"}
                    </motion.button>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75 }}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <div className='h-full w-full bg-gradient-to-br from-[#915EFF] to-[#1d1836] rounded-2xl flex items-center justify-center p-8'>
                    <div className='text-center'>
                        <h3 className='text-white text-[32px] font-bold mb-4'>Let's Connect!</h3>
                        <p className='text-secondary text-[18px] mb-4'>
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                        <a href='mailto:vishnuprahalathan1@gmail.com' className='text-[#915EFF] text-[18px] font-semibold hover:underline block mb-8'>
                            vishnuprahalathan1@gmail.com
                        </a>
                        <div className='flex gap-6 justify-center'>
                            <a
                                href='https://github.com/vishnuprahalathan'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-[#915EFF] transition-colors duration-300'
                                aria-label='GitHub'
                            >
                                <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/vishnuprahalathan/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-[#915EFF] transition-colors duration-300'
                                aria-label='LinkedIn'
                            >
                                <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                            <a
                                href='https://www.behance.net/gallery/223811791/PORTFOLIO'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-[#915EFF] transition-colors duration-300'
                                aria-label='Behance Portfolio'
                            >
                                <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' />
                                </svg>
                            </a>
                            <a
                                href='https://www.instagram.com/supasutarajinikanto'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-[#915EFF] transition-colors duration-300'
                                aria-label='Instagram'
                            >
                                <svg className='w-10 h-10' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
