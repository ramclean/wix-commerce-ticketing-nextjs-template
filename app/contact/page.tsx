'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FormEvent, ChangeEvent } from 'react';

// interface FormData {
//   email: string;
//   subject: string;
//   message: string;
// }

// interface Errors {
//   email?: string;
//   subject?: string;
//   message?: string;
// }

export default function ContactPage() {
  //   const [formData, setFormData] = useState<FormData>({
  //     email: '',
  //     subject: '',
  //     message: '',
  //   });

  //   const [errors, setErrors] = useState<Errors>({});

  //   // Function to validate the form
  //   const validateForm = (): boolean => {
  //     const newErrors: Errors = {};

  //     // Email validation
  //     if (!formData.email) {
  //       newErrors.email = 'Email is required';
  //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //       newErrors.email = 'Email is invalid';
  //     }

  //     // Subject validation
  //     if (!formData.subject) {
  //       newErrors.subject = 'Subject is required';
  //     }

  //     // Message validation
  //     if (!formData.message) {
  //       newErrors.message = 'Message is required';
  //     }

  //     setErrors(newErrors);

  //     // Return true if there are no errors
  //     return Object.keys(newErrors).length === 0;
  //   };

  //   // Handle form submission
  //   const handleSubmit = async (e: FormEvent) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch('/api/submit-form', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       const result = await response.json();
  //       console.log('Form submission result frontend:', result);
  //     } catch (error) {
  //       console.error('Error submitting form frontend:', error);
  //     }
  //   };
  //   // Handle input change
  //   const handleChange = (
  //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.value,
  //     });
  //   };

  return (
    <div className="mx-auto text-center">
      <div className="bg-black text-white py-12">
        <h1 className="text-5xl uppercase">Contact</h1>
      </div>
      <div className="block md:flex mx-auto mt-8">
        <div className="basis-1/2 px-4">
          <Image
            src={'/images/alPhotos/shout.png'}
            width={800}
            height={800}
            alt={'Lughole photo'}
            className="w-full opacity-80"
          />
        </div>

        <div className="dark:bg-gray-900 text-left basis-1/2 px-4">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Address:
            </h2>
            <p className="text-center mb-4">
              LUGHOLE
              <br />
              140-146 HARVEST LANE
              <br />
              SHEFFIELD
              <br />
              S3 8EF
              <br />
              UNITED KINGDOM
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Give us a shout!
            </h2>
            <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">
              You can reach us on at the following addresses:
            </p>
            <ul className="mb-8 text-center  dark:text-gray-400 sm:text-l">
              <li>
                <span className="text-gray-500">General/Info:</span>{' '}
                <a href="mailto:lugholesheffield@gmail.com">
                  lugholesheffield@gmail.com
                </a>
              </li>
              <li className="mt-4">
                <span className="text-gray-500">Event Booking:</span>{' '}
                <a href="mailto:lugholebooking@gmail.com">
                  lugholebooking@gmail.com
                </a>{' '}
              </li>
              <li className="mt-4">
                <span className="text-gray-500">Newsletter:</span>{' '}
                <a href="mailto:lugholemailinglist@gmail.com">
                  lugholemailinglist@gmail.com
                </a>
              </li>
            </ul>
            {/* <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow-sm bg-gray-50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                  placeholder="name@example.com"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                  placeholder="Summary of enquiry"
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  placeholder="Leave your message..."
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-main">
                Send message
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
