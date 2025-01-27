import React, { useEffect, useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import ContactImg from "../components/ui/assets/contact.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "@formspree/react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwwoedg");
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
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Get in Touch
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Contact Information - Left Column */}
              <div className="lg:col-span-3">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Contact Us
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-blue-600">
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">Email</span>
                      </div>
                      <p className="text-gray-600 pl-8">hello@billbhejo.com</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-blue-600">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-gray-600 pl-8 leading-relaxed">
                        08th Floor, <br />
                        SLN Terminus,
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
                </div>
              </div>

              {/* Contact Form - Center Column */}
              <div className="lg:col-span-6">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-xl shadow-md h-full"
                >
                  {state.succeeded ? (
                    <>
                      {showAlert && (
                        <Alert variant="success">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Success</AlertTitle>
                          <AlertDescription>
                            Your message has been submitted successfully.
                          </AlertDescription>
                        </Alert>
                      )}
                    </>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          name="message"
                          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex justify-center items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>

              {/* Image - Right Column */}
              <div className="lg:col-span-3 flex items-start">
                <img
                  src={ContactImg}
                  alt="Contact Information Infographic"
                  className="w-full rounded-xl shadow-md"
                />
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
