import React from 'react';
import { motion } from 'framer-motion';
import { FileText, IndianRupee } from 'lucide-react';
import { Button } from './button';

export function MockInvoice() {
  return (
    <div className="relative sm:absolute sm:right-0 sm:top-0 mt-[20px] sm:mt-0">
      <motion.div 
        className="relative mx-auto bg-white rounded-lg shadow-lg max-w-sm p-4 sm:w-80 sm:rounded-xl sm:shadow-xl sm:p-6 sm:backdrop-blur-xl sm:bg-white/90 sm:border sm:border-green-100"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -5, rotate: 0 }}
        style={{ rotate: '3deg' }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-900">Invoice #2024001</span>
          </div>
          <div className="text-sm text-green-600 font-medium">₹4,500</div>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700">3x Premium T-shirts</div>
            <div className="text-sm text-gray-500">₹2,700</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700">2x Jeans</div>
            <div className="text-sm text-gray-500">₹1,800</div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
          <Button className="w-full" icon={IndianRupee}>
            Pay Now
          </Button>
        </div>
      </motion.div>
    </div>
  );
}