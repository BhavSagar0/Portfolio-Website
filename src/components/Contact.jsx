import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form action="https://getform.io/f/782f2b70-b5c2-45db-b5f3-36c16d712fff" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" name="name" />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" name="phone" />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" id="" />
        </div>

        <div className="flex flex-col py-2">
          <label>Message</label>
          <textarea rows='10' className="border-2 rounded-lg p-3 border-gray-300" name="message" id="" />
        </div>

        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
