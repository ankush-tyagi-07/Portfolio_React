import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resumeImage from '../../assets/resume_image.png';

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields here before submitting
    if (formData.name && formData.email && formData.subject && formData.message) {
      // Submit the form
      alert('Form submitted successfully!');
      // Reset form after submission (optional)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className='
      text-[#454e5]
      border-[2px] rounded-[20px]
      px-[30px] pt-[10px]
      bg-gradient-to-r from-[#a17fe0] to-[#5D26C1]
      flex flex-col gap-[60px]
      h-full
    '>
      <h1 className='
        text-[#111] font-bold text-[2.5rem] sm:text-[3.5rem]
        flex justify-center
      '>
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[20px] items-center ">

          <div className="flex gap-[10px] w-full">
            <div className='
              border-[1px] rounded-[15px]
              bg-[rgb(217,217,217)]
              p-[8px]
              w-[50%]
            '>
              <input
                type="text"
                className='bg-transparent focus:outline-none '
                placeholder='Enter Name *'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className='
              border-[1px] rounded-[15px]
              bg-[#d9d9d9]
              p-[8px]
              w-[50%]
            '>
              <input
                type="email"
                className='bg-transparent focus:outline-none '
                placeholder='Enter Email *'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className='
            border-[1px] rounded-[15px]
            bg-[#d9d9d9]
            p-[8px]
            w-full
          '>
            <input
              type="text"
              className='bg-transparent focus:outline-none '
              placeholder='Subject of Message *'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className='
            border-[1px] rounded-[15px]
            bg-[#d9d9d9]
            p-[8px]
            w-full
          '>
            <textarea
              rows={5}
              cols={25}
              className='bg-transparent focus:outline-none '
              placeholder='Message Here... *'
              name='message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex 
          flex-col sm:flex-row
          gap-[20px] w-full mt-[30px] mb-[-20px]">
          <div className='w-[100%] flex justify-center'>
            <button
              type="submit"
              className="
                w-[220px]
                hover:bg-[#bbe6ff]
                bg-[#d6f2ff]
                flex justify-center 
                text-[#222] text-[1.3rem] font-bold
                py-2 px-8 sm:px-12 border-[2px]
                border-[#222] 
                rounded-[10px]
                disabled:opacity-50
                "
              disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
            >
              <span>Submit</span>
            </button>
          </div>

          <div className='w-full flex
            justify-around'>
            <Link to="https://drive.google.com/file/d/1zqywf4DqgMTt1KqD_J15_SCTdzmIgFIX/view?usp=sharing" target="_blank">
              <button type='button' className="
                hover:bg-[#bbe6ff]
                bg-[#d6f2ff]
                flex justify-center 
                text-[#222] text-[1.3rem] font-bold
                py-2 px-8 sm:px-12 border-[2px]
                border-[#222] 
                rounded-[10px] 
              ">
                <span>Resume</span>
                &nbsp;
                <img src={resumeImage} alt='resume-image' className='h-[30px]'/>
              </button>
            </Link>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

export default ContactMeForm;
