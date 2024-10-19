// pages/api/submit-form.js

import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      const payload = {
        sendToOwnerAndEmails: { emailIds: [] },
        fields: [
          {
            fieldId: 'comp-k4r07pjc',
            label: 'Name',
            firstName: {
              value: 'NEXTJS Test',
            },
          },
          {
            fieldId: 'comp-k4r07pk6',
            label: 'Email',
            email: {
              value: 'test@test.com',
              tag: 'main',
            },
          },
          {
            fieldId: 'comp-k4r07pkr',
            label: 'Short Text Field',
            additional: {
              value: {
                string: 'API test 2',
              },
            },
          },
          {
            fieldId: 'comp-k4r07plf',
            label: 'Add a message',
            additional: {
              value: {
                string: 'blahblah',
              },
            },
          },
        ],
        formProperties: {
          formName: 'Contact',
          formId: 'comp-k4r07pj5',
        },
        labelKeys: ['contacts.contacted-me', 'custom.contact'],
      };

      // Send POST request to Wix endpoint
      const response = await fetch(
        'https://www.lughole.org/_api/wix-forms/v1/submit-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      console.log('response', response);

      if (response.ok) {
        // Form submitted successfully
        const data = await response.json();
        console.log(DataTransferItemList);
      } else {
        // Failed to submit form
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      // Handle error during submission
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
