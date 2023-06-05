'use client';

import React, { useState } from 'react';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/b0a1eec0-01a8-11ee-b24a-93241516dd10'; // TODO - fill on the later step

function useContactForm() {
  const [status, setStatus] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(e.currentTarget.elements);
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            el.value = injectedData[key];

            e.currentTarget.appendChild(el);
          });

          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          e.currentTarget.submit();

          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  return { status, handleFormSubmit };
}

export default function ContactForm() {
  const { status, handleFormSubmit } = useContactForm();

  if (status) {
    return (
      <div className="md:w-96 md:max-w-full w-full mx-auto">
        <div className="sm:rounded-md p-6 border border-gray-300">
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className={`w-screen h-screen bg-omo-fifth flex flex-wrap justify-center`}
    >
      <div className={`flex justify-end items-center px-10`}>
        <h1
          className={`h-1/6 flex flex-wrap text-xl md:text-4xl text-semibold text-omo-first my-4`}
        >
          TELL US A LITTLE BIT ABOUT YOUR BUSINESS!
        </h1>
      </div>
      <div className={`h-5/6 w-4/5 flex flex-wrap justify-center items-center`}>
        <form
          className={`flex flex-wrap justify-center`}
          action={FORM_ENDPOINT}
          method="post"
        >
          <div
            className={`firstName flex flex-wrap text-omo-second m-2 w-4/5 md:w-4/5`}
          >
            <label className={`w-4/5 text-start`} htmlFor="first">
              Contact Information:
            </label>
            <input
              className={`m-1 w-5/6 md:w-1/3`}
              type="text"
              id="firstName"
              placeholder="First Name*"
              me="firstName"
              required
            />
            <input
              className={`m-1 w-5/6 md:w-1/3 `}
              type="text"
              id="lastName"
              placeholder="Last Name"
              me="lastName"
            />
          </div>
          <div className={`lastName flex flex-wrap text-omo-second m-2 w-4/5`}>
            <label className={`w-4/5`} htmlFor="last" required>
              Email
            </label>
            <input
              className={`m-1 w-5/6 md:w-3/5`}
              type="email"
              placeholder="Email*"
              id="email"
              name="email"
            />
          </div>
          <div
            className={`lastName flex flex-wrap text-omo-second justify-center m-4 w-4/5`}
          >
            <label className={`w-full text-white my-4`} htmlFor="last" required>
              What are you interested in having done?
            </label>
            <div className={`w-full flex`}>
              <input
                className={`m-1`}
                type="checkbox"
                id="email"
                name="email"
                value="Branding / Messaging"
              />
              <label
                className={`w-4/5 md:w-1/2 text-omo-second`}
                htmlFor="last"
                required
              >
                Branding / Messaging
              </label>
            </div>
            <div className={`w-full flex`}>
              <input
                className={`m-1`}
                type="checkbox"
                id="email"
                name="email"
                value="Build eCommerce Site"
              />
              <label
                className={`w-4/5 md:w-1/2 text-omo-second`}
                htmlFor="last"
                required
              >
                Build eCommerce Site
              </label>
            </div>
            <div className={`w-full flex`}>
              <input
                className={`m-1`}
                type="checkbox"
                id="email"
                name="email"
                value="Build Website"
              />
              <label
                className={`w-4/5 md:w-1/2 text-omo-second`}
                htmlFor="last"
                required
              >
                Build Website
              </label>
            </div>
            <div className={`w-full flex`}>
              <input
                className={`m-1`}
                type="checkbox"
                id="email"
                name="email"
                value="Edit Current Site"
              />
              <label
                className={`w-4/5 md:w-1/2 text-omo-second`}
                htmlFor="last"
                required
              >
                Edit Current Site
              </label>
            </div>
            <div className={`w-full flex`}>
              <input
                className={`m-1`}
                type="checkbox"
                id="email"
                name="email"
                value="SEO / Marketing"
              />
              <label
                className={`w-4/5 md:w-1/2 text-omo-second`}
                htmlFor="last"
                required
              >
                SEO / Marketing
              </label>
            </div>
          </div>
          <div className={`w-full flex flex-wrap justify-center mb-20`}>
            <button
              className={`bg-omo-first hover:bg-omo-second text-white p-2 rounded-md text-sm `}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
