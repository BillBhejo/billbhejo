// import React, { useState } from "react";
// import { Send, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ContactImg from "../components/ui/assets/contact.jpg";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowAlert(true);
//     setTimeout(() => {
//       setShowAlert(false);
//       setFormData({ name: "", email: "", message: "" });
//     }, 3000);
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         {/* Hero Section */}
//         <div className="relative h-[400px] overflow-hidden">
//           <img
//             src={ContactImg}
//             alt="Contact Header"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-yello-900/80 flex flex-col items-center justify-center px-4">
//             <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 animate-fade-in">
//               Let's Connect
//             </h1>
//             {/* <p className="text-xl text-blue-100 text-center max-w-2xl animate-fade-in-up">
//               Have a question? <br />
//               We'd love to hear from you.
//             </p> */}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-20">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//             {/* Left Column - Contact Information */}
//             <div className="lg:col-span-5 space-y-8">
//               <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
//                 <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">
//                   Contact Information
//                 </h2>
//                 <div className="space-y-6">
//                   {/* <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
//                     <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
//                       <MessageSquare className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">WhatsApp</p>
//                       <p className="text-gray-700 font-medium group-hover:text-green-600">
//                         +1 (555) 123-4567
//                       </p>
//                     </div>
//                   </div> */}

//                   <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
//                     <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
//                       <Mail className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Email</p>
//                       <p className="text-gray-700 font-medium group-hover:text-green-600">
//                         hello@billbhejo.com
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
//                     <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
//                       <MapPin className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Address</p>
//                       <p className="text-gray-700 font-medium group-hover:text-green-600">
//                         08th Floor, <br />
//                         SLN Terminus,
//                         <br />
//                         Survey No. 133,
//                         <br />
//                         Beside Botanical Gardens,
//                         <br />
//                         Gachibowli, Hyderabad,
//                         <br />
//                         Telangana, 500032, India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
//                     <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
//                       <Clock className="w-6 h-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Business Hours</p>
//                       <p className="text-gray-700 font-medium group-hover:text-green-600">
//                         Mon-Fri: 9AM - 6PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Map or Additional Info */}
//               <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                   Why Choose Us?
//                 </h2>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span>24/7 Customer Support</span>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span>Quick Response Time</span>
//                   </li>
//                   <li className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span>Professional Team</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             {/* <div className="lg:col-span-7">
//               <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
//                 <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">
//                   Send us a Message
//                 </h2>

//                 {showAlert ? (
//                   <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded-r-lg animate-fade-in">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <svg
//                           className="h-5 w-5 text-green-400"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm text-green-700">
//                           Thank you! Your message has been sent successfully.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label
//                           htmlFor="name"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={(e) =>
//                             setFormData({ ...formData, name: e.target.value })
//                           }
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
//                           placeholder="John Doe"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <label
//                           htmlFor="email"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={(e) =>
//                             setFormData({ ...formData, email: e.target.value })
//                           }
//                           className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
//                           placeholder="john@example.com"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label
//                         htmlFor="message"
//                         className="text-sm font-medium text-gray-700"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         id="message"
//                         rows={6}
//                         name="message"
//                         value={formData.message}
//                         onChange={(e) =>
//                           setFormData({ ...formData, message: e.target.value })
//                         }
//                         className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
//                         placeholder="How can we help you?"
//                         required
//                       ></textarea>
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full flex justify-center items-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all duration-300"
//                     >
//                       <Send className="w-5 h-5" />
//                       <span className="font-medium">Send Message</span>
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Contact;
import React from "react";
import {
  Mail,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Award,
  Zap,
  Smartphone,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactImg from "../components/ui/assets/contact.jpg";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={ContactImg}
            alt="Contact Header"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-yellow-900/80 flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 animate-fade-in">
              Let's Connect
            </h1>
            <p className="text-xl text-blue-100 text-center max-w-2xl animate-fade-in-up">
              Have a question? We're here to help and would love to hear from
              you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 -mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-700 font-medium group-hover:text-green-600">
                        hello@billbhejo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-700 font-medium group-hover:text-green-600">
                        08th Floor, SLN Terminus,
                        <br />
                        Survey No. 133,
                        <br />
                        Beside Botanical Gardens,
                        <br />
                        Gachibowli, Hyderabad,
                        <br />
                        Telangana, 500032, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group p-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
                    <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Hours</p>
                      <p className="text-gray-700 font-medium group-hover:text-green-600">
                        9AM - 9PM (All Days)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Features */}
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Why Choose Bill Bhejo?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                    <Smartphone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        WhatsApp Integration
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Generate invoices right from your WhatsApp chat - no
                        additional apps needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                    <FileText className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Instant PDF Generation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Get professional PDF invoices generated instantly after
                        entering product details.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                    <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Quick & Easy
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Simple product input process designed for busy
                        merchants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "How does Bill Bhejo work?",
                      a: "Simply message us on WhatsApp with your product details, and we'll instantly generate a professional PDF invoice for you. No complicated apps or software needed!",
                    },
                    {
                      q: "What information do I need to provide?",
                      a: "Just send us basic product details like name, quantity, and price. Our smart system will handle the rest and generate a complete invoice.",
                    },
                    // {
                    //   q: "Can I customize my invoice format?",
                    //   a: "Yes! We offer various invoice templates and customization options to match your business needs and branding.",
                    // },
                    {
                      q: "Is my business data secure?",
                      a: "Absolutely. We use end-to-end encryption and secure storage to protect all your business information and transaction details.",
                    },
                    {
                      q: "Can I access my previous invoices?",
                      a: "Yes, all your generated invoices are safely stored and can be easily accessed through our WhatsApp chat interface.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
