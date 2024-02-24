"use server";
import ContactFormEmail from '@/email/ContactFormEmail';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend('re_AsMnLbi8_JM57f6HzmMRVmYUEkimVa7mZ');
export const sendEmail = async (formData: FormData) => {
 const senderEmail = formData.get("email");
 const senderMessage = formData.get("message");

 if (!validateString(senderEmail, 500)) {
  return {
   error: "Invalid email!"
  }
 }

 if (!validateString(senderMessage, 5000)) {
  return {
   error: "Invalid message!"
  }
 }
 let data;
 try {
  data = await resend.emails.send({
   from: 'onboarding@resend.dev',
   to: 'uttamakwana4503@gmail.com',
   subject: 'Message from Portfolio | Contact Form',
   reply_to: senderEmail as string,
   react: React.createElement(ContactFormEmail, { message: senderMessage as string, senderEmail: senderEmail as string })
  });
 } catch (error) {
  return {
   error: getErrorMessage(error)
  }
 }

 return { data };
};
