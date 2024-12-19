import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Button } from './ui/button';
import { MockInvoice } from './ui/MockInvoice';
import { MockChat } from './ui/MockChat';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-50/50 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Generate Invoices</span>
              <span className="block text-green-600">Right from WhatsApp</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Transform your WhatsApp chats into professional invoices instantly. Simply send your product details, and we'll generate a PDF invoice with integrated WhatsApp Pay - perfect for Indian businesses.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button icon={Icons.MessageSquare}>Start on WhatsApp</Button>
                <Button variant="secondary">Watch Demo</Button>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MockInvoice className="w-full max-w-lg mx-auto" />
              </motion.div>
              <motion.div 
                className="absolute -left-12 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MockChat className="w-64" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}