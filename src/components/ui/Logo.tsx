// import React from 'react';
// import { Send } from 'lucide-react';
import logo from "./assets/logo.png";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      {/* <Send className="h-8 w-8 text-green-600 transform -rotate-12" />
      <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
        Bill Bhejo
      </span> */}
      <img src={logo} alt="Bill Bhejo" className="h-14 w-44" />
    </div>
  );
}
