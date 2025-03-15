import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function MockChat() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 backdrop-blur-xl bg-white/80 border border-green-100 max-w-md sm:max-w-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm sm:text-base">
          BB
        </div>
        <div className="ml-2 sm:ml-3">
          <div className="font-semibold text-gray-900 text-lg sm:text-xl">
            Bill Bhejo
          </div>
          <div className="text-xs sm:text-sm text-green-600">Online</div>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <motion.div
          className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl rounded-tr-none p-3 sm:p-4 ml-auto max-w-[80%]"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs sm:text-sm">
            Send me details of my order: 3x Premium T-shirts, 2x Jeans. Price:
            ₹4,500
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-100 rounded-2xl rounded-tl-none p-3 sm:p-4 max-w-[80%]"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-1 sm:gap-2 text-green-600 font-medium mb-1 sm:mb-2">
            <Send className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Invoice Generated</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Your invoice has been generated. Click below to view and share with
            your customer.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
