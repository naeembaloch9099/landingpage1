import React from "react";
import TiltCard from "./TiltCard";
import MotionSection from "./MotionSection";
import { FaCheckCircle, FaEllipsisH } from "react-icons/fa";

const KeyBenefits = () => {
  const projectStats = [
    { label: "Finished", percentage: 10, color: "bg-gray-300" },
    { label: "In Progress", percentage: 13, color: "bg-gray-300" },
    { label: "Rejected", percentage: 11, color: "bg-gray-300" },
  ];

  const chartData = [
    { height: "h-16", color: "bg-teal-800" },
    { height: "h-12", color: "bg-teal-500" },
    { height: "h-10", color: "bg-teal-800" },
    { height: "h-14", color: "bg-teal-500" },
  ];

  const benefits = [
    {
      title: "Boosting Quality with Tech",
      description:
        "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.",
    },
    {
      title: "Optimization Production Process",
      description:
        "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.",
    },
    {
      title: "AI-Driven Production",
      description:
        "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.",
    },
  ];

  return (
    <MotionSection className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Statistics Dashboard */}
          <div className="space-y-6">
            {/* Total Projects Header */}
            <TiltCard className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Total Projects</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      1475
                    </span>
                    <span className="text-green-500 text-sm font-medium">
                      ↗ 34%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {projectStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">
                        {stat.label}
                      </span>
                      <span className="text-gray-900 text-sm font-medium">
                        {stat.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${stat.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${stat.percentage * 8}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>

            {/* Chart Section */}
            <TiltCard className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start">
                {/* Left Side - Bar Chart */}
                <div className="flex-1">
                  <div className="flex items-end justify-start gap-4 h-24 mb-4">
                    {chartData.map((bar, index) => (
                      <div key={index} className="w-12">
                        <div
                          className={`${bar.height} ${bar.color} rounded-t-md transition-all duration-500`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Total Projects Info */}
                <div className="flex-1 pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">
                      Total Projects
                    </span>
                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                      <span className="text-gray-600 text-xs">8%</span>
                    </div>
                    <div className="ml-auto">
                      <FaEllipsisH className="text-gray-400" />
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      1951+
                    </div>
                    <div className="text-green-500 text-sm">
                      Increase of <span className="font-medium">126</span> this
                      month
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Side - Benefits */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key Benefits of Our System for Your Business Efficiency
              </h2>
              <p className="text-gray-600">
                Our systems boost productivity, cut costs, and drive business
                growth.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default KeyBenefits;
