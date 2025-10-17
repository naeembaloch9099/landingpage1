import React from "react";
import MotionSection from "./MotionSection";
import {
  FaAtlassian,
  FaMicrosoft,
  FaSlack,
  FaDropbox,
  FaGoogle,
  FaAmazon,
  FaApple,
  FaFacebook,
} from "react-icons/fa";

const Integration = () => {
  const companyIcons = [
    {
      icon: <FaAtlassian className="w-8 h-8 text-blue-600" />,
      position: "top-20 left-16",
    },
    {
      icon: <FaMicrosoft className="w-8 h-8 text-blue-500" />,
      position: "top-32 right-20",
    },
    {
      icon: <FaSlack className="w-8 h-8 text-purple-600" />,
      position: "top-16 right-32",
    },
    {
      icon: <FaDropbox className="w-8 h-8 text-blue-400" />,
      position: "bottom-32 left-24",
    },
    {
      icon: <FaGoogle className="w-8 h-8 text-red-500" />,
      position: "bottom-20 right-16",
    },
    {
      icon: <FaAmazon className="w-8 h-8 text-orange-500" />,
      position: "top-40 left-32",
    },
    {
      icon: <FaApple className="w-8 h-8 text-gray-700" />,
      position: "bottom-16 left-40",
    },
    {
      icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
      position: "top-24 right-40",
    },
  ];

  return (
    <div>
      {/* Top Section - Empowering Companies */}
      <MotionSection className="bg-gray-50 py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Top Companies
                <br />
                with Seamless Integrations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience seamless connections with our innovative solutions,
                designed to effortlessly integrate with your existing systems,
                enhance productivity, and drive your business towards greater
                success.
              </p>
              <button className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-green-300 transition-all duration-300">
                Work With Us
              </button>
            </div>

            {/* Right Side - Icon Background */}
            <div className="relative h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden">
              {/* SVG Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Curved connecting lines between icons */}
                <path
                  d="M80 80 Q200 150 320 80"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M120 250 Q200 180 280 220"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M60 160 Q200 100 340 160"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 320 Q200 250 300 300"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M150 100 Q200 192 250 280"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M320 120 Q200 192 80 260"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Floating Company Icons */}
              {companyIcons.map((company, index) => (
                <div
                  key={index}
                  className={`absolute ${company.position} p-3 bg-white rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 z-10`}
                  style={{
                    animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {company.icon}
                </div>
              ))}

              {/* Central decorative element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation moved to global index.css (@keyframes float) */}
      </MotionSection>

      {/* Bottom Section - From Idea to Production */}
      <MotionSection className="bg-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Idea to Production in Days
          </h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Accelerate your production with our technology. Reduce downtime and
            optimize costs. Get a special offer now!
          </p>
          <button className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-green-300 transition-all duration-300">
            Work With Us
          </button>
        </div>
      </MotionSection>
    </div>
  );
};

export default Integration;
