import React, { useEffect, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
// import WhatsAppIcon from "@/components/ui/assets/WhatsappIcon";
import ContactImg from "../components/ui/assets/contact.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm, ValidationError } from "@formspree/react";
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!captchaValue) {
  //     alert("Please complete the reCAPTCHA.");
  //     return;
  //   }
  //   console.log("Form submitted:", formData);
  //   console.log("Captcha value:", captchaValue);
  // };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Get in Touch
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              {/* <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <WhatsAppIcon className="w-5 h-5 text-blue-600" />
                    <span>WhatsApp:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>hello@billbhejo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span></span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span></span>
                  </div>
                </div>
              </div> */}

              {/* <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div> */}
              {/* </div> */}

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {state.succeeded ? (
                  <>
                    {showAlert && (
                      <Alert variant="success">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>
                          Your message has been submmitted successfully.
                        </AlertDescription>
                      </Alert>
                    )}
                  </>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={formData.name}
                        // onChange={(e) =>
                        //   setFormData({ ...formData, name: e.target.value })
                        // }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={(e) =>
                        //   setFormData({ ...formData, email: e.target.value })
                        // }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        name="message"
                        // value={formData.message}
                        // onChange={(e) =>
                        //   setFormData({ ...formData, message: e.target.value })
                        // }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>
                    {/* <ReCAPTCHA
                    sitekey={recaptchaSiteKey}
                    onChange={(value) => setCaptchaValue(value)}
                  /> */}

                    <button
                      type="submit"
                      className="w-full flex justify-center items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                )}
              </form>
              <div className="flex justify-center items-center">
                <img
                  src={ContactImg}
                  alt="Contact Information Infographic"
                  className="max-w-full h-auto rounded-lg shadow-md"
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
