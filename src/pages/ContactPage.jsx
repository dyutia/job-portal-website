import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/contact.fa1dcec179ab187ef0877382779d71df.svg"
            alt="Contact illustration"
            className="max-w-full h-auto"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in touch !</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#00B69B] focus:ring-2 focus:ring-[#00B69B] focus:ring-opacity-20 transition-all duration-200"
                  placeholder="Name :"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#00B69B] focus:ring-2 focus:ring-[#00B69B] focus:ring-opacity-20 transition-all duration-200"
                  placeholder="Email :"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Your Question:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#00B69B] focus:ring-2 focus:ring-[#00B69B] focus:ring-opacity-20 transition-all duration-200"
                placeholder="Subject :"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Comment:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#00B69B] focus:ring-2 focus:ring-[#00B69B] focus:ring-opacity-20 transition-all duration-200 resize-none"
                placeholder="Message :"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full md:w-auto bg-[#00B69B] text-white px-8 py-3 rounded-lg hover:bg-[#00A589] transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5F3] rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300">
            <Phone className="w-7 h-7 text-[#00B69B]" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Phone</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Ready to help you Monday through Friday from 9am to 5pm
          </p>
          <a href="tel:+1234567890" className="text-[#00B69B] hover:text-[#00A589] font-medium inline-flex items-center gap-2 hover:underline">
            Contact Support
          </a>
        </div>

        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5F3] rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300">
            <Mail className="w-7 h-7 text-[#00B69B]" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Email</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team typically responds within 24-48 business hours
          </p>
          <a href="mailto:support@company.com" className="text-[#00B69B] hover:text-[#00A589] font-medium inline-flex items-center gap-2 hover:underline">
            Send Email
          </a>
        </div>

        <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F5F3] rounded-full mb-6 transform hover:rotate-12 transition-transform duration-300">
            <MapPin className="w-7 h-7 text-[#00B69B]" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Office</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Visit our office for in-person assistance and meetings
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#00B69B] hover:text-[#00A589] font-medium inline-flex items-center gap-2 hover:underline"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
