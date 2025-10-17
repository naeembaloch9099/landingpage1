import {
  FaStar,
  FaArrowUpRightFromSquare,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa6";
import TiltCard from "./TiltCard";
import Button3D from "./Button3D";
import MotionSection from "./MotionSection";
// Optional hero image: add a file like src/assets/hero-pipes.jpeg (or .jpg/.png)
// Use import.meta.glob with query per Vite's latest API.
const heroCandidates = import.meta.glob("./assets/hero-pipes.*", {
  eager: true,
  query: "?url",
  import: "default",
});
const heroImg = Object.values(heroCandidates)[0];

export default function App() {
  return (
    <MotionSection className="bg-gray-50 text-gray-900 py-20 px-6 md:px-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          The Future of Manufacturing <br />
          with <span className="text-emerald-700">Latest Technology</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl">
          Expert tech to elevate your manufacturing. Let’s take your business
          further.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <Button3D variant="primary">Get Started</Button3D>
          <Button3D variant="ghost">Try Demo</Button3D>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex text-yellow-400 gap-1 text-lg">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="mt-2 text-gray-700 font-medium">
            5.0 <span className="text-gray-500 text-sm">from 80+ reviews</span>
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 w-full">
          {/* Image card */}
          <div className="rounded-2xl overflow-hidden">
            {heroImg ? (
              <img
                src={heroImg}
                alt="Manufacturing pipes"
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-emerald-600 to-emerald-800" />
            )}
          </div>

          {/* Info cards */}
          <TiltCard className="bg-emerald-900 text-white rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="mt-2 text-sm opacity-90">
              Our Esteemed Clients and Partners
            </p>
          </TiltCard>

          <TiltCard className="bg-white shadow rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">1951+</h2>
            <p className="text-gray-600 mt-1">Total Projects</p>
            <span className="text-emerald-600 text-sm mt-2">
              +126 this month
            </span>
          </TiltCard>

          <TiltCard className="bg-emerald-100 rounded-2xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">6+</h2>
            <p className="mt-2 text-sm text-gray-700">
              Years of Dedicated Service
            </p>
          </TiltCard>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-16 left-10 hidden md:flex flex-col gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <FaArrowUpRightFromSquare className="text-emerald-700" />
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <FaLayerGroup className="text-emerald-700" />
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
          <FaChartLine className="text-emerald-700" />
        </div>
      </div>
    </MotionSection>
  );
}
