import React from 'react';
import { Link } from 'react-router-dom';
import videoFile from '../assests/videos/a.mp4';
import './Button.css';

function LandingPage() {
  return (

    <div className="min-h-screen flex items-center justify-center relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoFile}
        autoPlay
        loop
        muted
        style={{ opacity: 0.6 }} // Adjust the opacity value as needed
      />
      
      <div className="text-center relative">
        <h1 className="text-5xl text-white-800 font-bold mb-8 animate-pulse">
        ATM Machine Queuing System
        </h1>
        
        <h2 className="text-3xl text-black-300 font-semibold mb-4">
          Presented By:
        </h2>
        <p><b>Syed Omer Iqbal|EB22210006138 </b></p>
        <p><b>Subhan Ali|EB22210006125</b></p>
        <p><b>Hassan Shahid|EB22210006047</b></p>
        <p><b>Syed Muhammad Hamza|EB22210006133</b></p>
        <p><b>Syed Sumair|EB21102123</b></p>

        <p className="text-black glowing-text text-xl mb-8 w-2/3 mx-auto">

          Welcome to the ATM Machine Queuing System Project</p>

        <div className="space-x-4 space-y-16">
            <Link to="/Home">
              <button className="glowing-btn">
              <span className="glowing-word" style={{ fontWeight: 1500, fontSize: '40px' }}>
                  QUEUING
                </span>
              </button>
            </Link>
            <h1 className="text-5xl text-white-800 font-bold mb-8 animate-pulse">SIMULATE</h1>
          <div className="flex flex-wrap space-x-8 justify-center">
            <Link to="/mm1">
              <button className="glowing-btn">
                <span className="glowing-word">
                  MM<span className="faulty-letter">1</span> Model
                </span>
              </button>
            </Link>
            <Link to="/mg1">
              <button className="glowing-btn">
                <span className="glowing-word">
                  MG<span className="faulty-letter">1</span> Model
                </span>
              </button>
            </Link>
            <Link to="/gg1">
              <button className="glowing-btn">
                <span className="glowing-word">
                  GG<span className="faulty-letter">1</span> Model
                </span>
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap space-x-8  justify-center">
            <Link to="/mm2">
              <button className="glowing-btn">
                <span className="glowing-word">
                  MM<span className="faulty-letter">2</span> Model
                </span>
              </button>
            </Link>
            <Link to="/mg2">
              <button className="glowing-btn">
                <span className="glowing-word">
                  MG<span className="faulty-letter">2</span> Model
                </span>
              </button>
            </Link>
            <Link to="/gg2">
              <button className="glowing-btn">
                <span className="glowing-word">
                  GG<span className="faulty-letter">2</span> Model
                </span>
              </button>
            </Link>
          </div>
        </div>

      </div>
      
    </div>

  );
}

export default LandingPage;
