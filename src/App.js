import React, { useState } from 'react';
import './output.css';
import TimePickerClock from "./components/timePickerClock24";
import TimePicker from "./components/timePicker";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import Modal from "./components/modal";
import BlogSite from "./components/blogSite";
import Parallax from "./components/parallax";
import bgPic from "./pictures/berg.jpg";

function App() {


    library.add(fas);

    const [enabled, setEnabled ] = useState(false);

  return (
     <BlogSite/>

   );



}

export default App;


/*
*  <Parallax
        background={<img src={bgPic} className=" w-full z-0 " />}
      >
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>
          <div className="w-12 h-screen bg-red-400"/>
          <div className="w-12 h-screen bg-blue-400"/>

      </Parallax>
*/