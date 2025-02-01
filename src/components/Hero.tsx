// import { motion } from "framer-motion";
// // import { MessageSquare } from "lucide-react";
// // import WhatsAppIcon from "./ui/assets/WhatsappIcon";
// import { Button } from "./ui/button";
// import { MockInvoice } from "./ui/MockInvoice";
// import { MockChat } from "./ui/MockChat";
// import { useForm, ValidationError } from "@formspree/react";
// import { useEffect, useState } from "react";
// import { AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// export default function Hero() {
//   const [state, handleSubmit] = useForm("mzzzkqdw");
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSuccess = () => {
//     setShowAlert(true);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 3000);
//   };

//   useEffect(() => {
//     if (state.succeeded) {
//       handleSuccess();
//     }
//   }, [state.succeeded]);

//   return (
//     <div className="pt-24 pb-16 sm:pt-32 relative overflow-hidden">
//       {/* Background decoration */}
//       <motion.div
//         className="absolute inset-0 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-100/50 blur-3xl" />
//         <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-50/50 blur-3xl" />
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           <motion.div
//             className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading">
//               <span className="block">Generate Invoices</span>
//               <span className="block text-green-600">Right from WhatsApp</span>
//             </h1>
//             <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//               Turn your WhatsApp chats into professional invoices instantly.
//               Simply send your product details and get a PDF invoice with
//               integrated WhatsApp Pay.
//             </p>
//             <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
//               {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Button icon={WhatsAppIcon}>Start on WhatsApp</Button>
//                 <Button variant="secondary">Watch Demo</Button>
//               </div> */}
//               {showAlert && ( // Conditionally render the alert
//                 <Alert variant="success">
//                   <AlertCircle className="h-4 w-4" />
//                   <AlertTitle>Success</AlertTitle>
//                   <AlertDescription>
//                     Your email has been submmitted successfully.
//                   </AlertDescription>
//                 </Alert>
//               )}
//               {!state.succeeded && (
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//                 >
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     // value={email}
//                     // onChange={(e) => setEmail(e.target.value)}
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <ValidationError
//                     prefix="Email"
//                     field="email"
//                     errors={state.errors}
//                   />
//                   <Button type="submit" disabled={state.submitting}>
//                     Join Waitlist
//                   </Button>
//                 </form>
//               )}
//             </div>
//           </motion.div>

//           <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//             <div className="relative mx-auto w-full">
//               <motion.div
//                 className="relative"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <div className="sm:hidden flex flex-col items-center space-y-4">
//                   <MockChat />
//                   <MockInvoice />
//                 </div>
//                 <div className="hidden sm:block">
//                   <MockChat />
//                   <MockInvoice />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MockInvoice } from "./ui/MockInvoice";
import { MockChat } from "./ui/MockChat";

export default function Hero() {
  const [state, handleSubmit] = useForm("mzzzkqdw");
  const [showAlert, setShowAlert] = useState(false);

  const handleSuccess = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (state.succeeded) {
      handleSuccess();
    }
  }, [state.succeeded]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white pb-32 pt-24 sm:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Content */}
          <motion.div
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight font-heading">
              <span className="block text-gray-900">Create Invoices on</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                WhatsApp Instantly
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Transform your WhatsApp chats into professional invoices
              instantly. Create, send, and track invoices right from your
              WhatsApp chat.
            </p>

            {/* Alert for successful submission */}
            {showAlert && (
              <Alert variant="success" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Thanks for joining our waitlist! We'll notify you when we
                  launch.
                </AlertDescription>
              </Alert>
            )}

            {/* Early Access Form */}
            {!state.succeeded && (
              <div className="mb-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email for early access"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
                    required
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center font-medium shadow-lg shadow-green-200/50 hover:shadow-green-300/50 hover:scale-105"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            )}

            {/* Demo Button */}
            {/* <button className="relative overflow-hidden border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition-colors font-medium flex items-center justify-center group mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 via-green-100/50 to-green-100/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              <Smartphone className="mr-2 h-5 w-5" /> Watch Demo
            </button> */}
          </motion.div>

          {/* Right Column - Mock UI */}
          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full">
              <div className="sm:hidden flex flex-col items-center space-y-4">
                <MockChat />
                <MockInvoice />
              </div>
              <div className="hidden sm:block">
                <MockChat />
                <MockInvoice />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
