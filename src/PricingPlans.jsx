import React from "react";
import TiltCard from "./TiltCard";
import MotionSection from "./MotionSection";
import { FaCheck } from "react-icons/fa";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      description:
        "This package offers the basic features you need to get started.",
      price: "$39",
      period: "/ month",
      features: [
        "Production up to 10,000 units per month",
        "24/7 technical support",
        "Access the production dashboard",
        "Initial setup guide",
      ],
      buttonText: "Get Started",
      isHighlighted: false,
    },
    {
      name: "Enterprise",
      description: "This package provides full access to all premium features.",
      price: "$99",
      period: "/ month",
      features: [
        "Unlimited production units",
        "Dedicated account manager",
        "Tailored manufacturing solutions",
        "Predictive production optimization",
      ],
      buttonText: "Get Started",
      isHighlighted: false,
    },
    {
      name: "Professional",
      description:
        "Designed for greater flexibility, this solution offers advanced tools for custom tailoring to your needs.",
      price: null,
      period: null,
      features: [],
      buttonText: "Get Started",
      isHighlighted: true,
    },
  ];

  return (
    <MotionSection className="bg-gray-900 py-20 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tailored Plans for Your
            <br />
            Manufacturing Scale
          </h2>
          <p className="text-gray-400 text-lg">
            Flexible pricing for any business size.
          </p>
        </div>

        {/* Top Row - Starter and Enterprise Cards Centered */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {plans.slice(0, 2).map((plan, index) => (
              <TiltCard
                key={index}
                className="rounded-xl p-8 bg-gray-800 text-white transition-all duration-300 hover:scale-[1.02] w-full max-w-sm shadow-lg/50"
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Get Started Button */}
                <div className="mb-8">
                  <button className="w-full py-3 px-6 rounded-full font-medium bg-transparent border border-gray-600 text-white hover:bg-gray-700 transition-all duration-300">
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-4 text-center">
                    Features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <FaCheck className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Bottom Row - Professional Card Centered */}
        <div className="flex justify-center">
          <TiltCard className="rounded-xl p-8 bg-teal-700 text-white transition-all duration-300 hover:scale-[1.02] w-full max-w-2xl shadow-xl/50">
            {/* Plan Header */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold mb-3">{plans[2].name}</h3>
              <p className="text-sm leading-relaxed text-teal-100">
                {plans[2].description}
              </p>
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center">
              <button className="py-3 px-8 rounded-full font-medium bg-green-400 text-gray-900 hover:bg-green-300 transition-all duration-300">
                {plans[2].buttonText}
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </MotionSection>
  );
};

export default PricingPlans;
