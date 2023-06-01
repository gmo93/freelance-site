'use client';

import { useState } from 'react';

export default function Contact() {

  const [contactInfo, setContactInfo] = useState('First Name');
  function changeName() {

  }

  return (
    <div id="contact" className={`w-screen h-screen bg-omo-fifth flex flex-wrap justify-center`}>
      <div className={`flex justify-end items-center px-10`}>
        <h1 className={`h-1/6 flex flex-wrap text-xl md:text-4xl text-semibold text-omo-first my-4`}>
          TELL US A LITTLE BIT ABOUT YOUR BUSINESS!
        </h1>
      </div>
      <div className={`h-5/6 w-4/5 flex flex-wrap justify-center items-center`}>
        <form className={`flex flex-wrap justify-center`} action="/send-data-here" method="post">
          <div className={`firstName flex flex-wrap text-omo-second m-2 w-4/5 md:w-4/5`}>
            <label className={`w-4/5 text-start`} htmlFor="first">Contact Information:</label>
            <input className={`m-1 w-5/6 md:w-1/3`} type="text" id="firstName" placeholder="First Name*" me="firstName" required />
            <input className={`m-1 w-5/6 md:w-1/3 `} type="text" id="lastName" placeholder="Last Name" me="lastName" />
          </div>
          <div className={`lastName flex flex-wrap text-omo-second m-2 w-4/5`}>
            <label className={`w-4/5`} htmlFor="last" required>Email</label>
            <input className={`m-1 w-5/6 md:w-3/5`} type="email" placeholder="Email*" id="email" name="email" />
          </div>
          <div className={`lastName flex flex-wrap text-omo-second justify-center m-4 w-4/5`}>
            <label className={`w-full text-white my-4`} htmlFor="last" required>What are you interested in having done?</label>
            <div className={`w-full flex`}>
              <input className={`m-1`} type="checkbox" id="email" name="email" value="Branding / Messaging" />
              <label className={`w-4/5 md:w-1/2 text-omo-second`} htmlFor="last" required>Branding / Messaging</label>
            </div>
            <div className={`w-full flex`}>
              <input className={`m-1`} type="checkbox" id="email" name="email" value="Build eCommerce Site" />
              <label className={`w-4/5 md:w-1/2 text-omo-second`} htmlFor="last" required>Build eCommerce Site</label>
            </div>
            <div className={`w-full flex`}>
              <input className={`m-1`} type="checkbox" id="email" name="email" value="Build Website" />
              <label className={`w-4/5 md:w-1/2 text-omo-second`} htmlFor="last" required>Build Website</label>
            </div>
            <div className={`w-full flex`}>
              <input className={`m-1`} type="checkbox" id="email" name="email" value="Edit Current Site" />
              <label className={`w-4/5 md:w-1/2 text-omo-second`} htmlFor="last" required>Edit Current Site</label>
            </div>
            <div className={`w-full flex`}>
              <input className={`m-1`} type="checkbox" id="email" name="email" value="SEO / Marketing" />
              <label className={`w-4/5 md:w-1/2 text-omo-second`} htmlFor="last" required>SEO / Marketing</label>
            </div>
          </div>
          <div className={`w-full flex flex-wrap justify-center mb-20`}>
            <button className={`bg-omo-first hover:bg-omo-second text-white p-2 rounded-md text-sm `} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
