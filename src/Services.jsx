import React from "react";
import TiltCard from "./TiltCard";
import MotionSection from "./MotionSection";
import {
  FaCogs,
  FaLayerGroup,
  FaShieldAlt,
  FaLightbulb,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Production and Assembly",
      description:
        "Details on production processes, assembly, capacity, and product types",
    },
    {
      icon: <FaLayerGroup className="w-8 h-8" />,
      title: "Custom Manufacturing",
      description:
        "Custom product creation with design and customization options",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality Control",
      description:
        "Procedures and systems in place to ensure high product quality",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Technology and Innovation",
      description:
        "Details on the latest manufacturing technologies and ongoing innovations",
    },
    {
      icon: <FaBoxOpen className="w-8 h-8" />,
      title: "Packaging and Logistics",
      description:
        "Packaging and logistics for shipping to customers and distributors",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Consulting Market Research",
      description:
        "Services to help companies understand market needs and provide strategic advice",
    },
  ];

  return (
    <MotionSection className="bg-slate-700 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Efficient and Integrated
            <br />
            Manufacturing Services
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TiltCard
              key={index}
              className="group cursor-pointer rounded-2xl p-6 bg-white/5 hover:bg-white/10"
            >
              {/* Icon with arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;
