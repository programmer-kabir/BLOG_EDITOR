import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors: formError },
  } = useForm();

  const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm("service_5ky4w18", "template_yhopkxj", form.current, {
            publicKey: "jN1OoaI7XqGtsW1L1",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      };
  return (
    <section className="max-w-4xl shadow mx-auto mt-32 py-8">
      <h2 className="text-3xl font-semibold text-center">Get in touch</h2>
      <div>
        <form
         ref={form} onSubmit={sendEmail}
          className="px-7 pt-7 space-y-5"
        >
          {/* First and Last Name */}
        
            <div className="w-full">
              <label
                htmlFor="from_name"
                className="block text-xs font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Enter Your First Name"
                className="px-2 py-2 text-sm outline-none border border-gray-300 rounded w-full mt-2"
              />

            </div>
           
         
          {/* Email */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-xs font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Enter Recipient's Email"
              className="px-2 py-2 text-sm outline-none border border-gray-300 rounded w-full mt-2"
            />

          </div>
          {/* Message */}
          <div className="w-full">
            <textarea

              rows={7}
              name="message"
              placeholder="Enter Your Message"
              id="message"
              className="px-2 py-2 text-sm outline-none border border-gray-300 rounded w-full mt-2"
            ></textarea>

          </div>
          {/* Submit Button */}
          <button
            type="submit"
            value="Send"
            className="w-full text-white rounded-md bg-[#f50400] hover:bg-[#d80400] px-5 py-2 text-lg transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_5ky4w18", "template_yhopkxj", form.current, {
//         publicKey: "jN1OoaI7XqGtsW1L1",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="from_name" />
//         <label>Email</label>
//         <input type="email" name="from_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default ContactUs;
