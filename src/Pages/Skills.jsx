import { useEffect, useState } from "react";

function Skills() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 85) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 20); // speed of animation
    return () => clearInterval(timer);
  }, []);

  const radius = 80;
  const stroke = 25;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <section className=" container w-[386px]  md:w-full mx-auto mt-13 md:mt-24 xl:mt-27">
      <h1 className="text-[26px] md:text-4xl xl:text-5xl font-poppins font-bold mb-7 text-white">
        Skills
      </h1>
      <div className="flex flex-wrap w-[386px] mx-auto md:w-full h-400 md:h-275 xl:h-165 gap-5 items-center justify-between ">
        <div className=" md:pt-8 md:pr-11 h-1/4 md:pb-12 md:pl-8 flex flex-col md:flex-row items-center justify-evenly md:justify-between  w-[386px] md:w-full xl:w-189 md:h-1/4 xl:h-1/2 border rounded xl:pt-10 xl:pr-12 xl:pb-15 xl:pl-10 border-[#737373]">
          <div className=" h-41 w-41 flex items-center justify-center md:h-45 md:w-45 xl:h-55 xl:w-55 ">
            <div className="flex items-center justify-center min-h-screen ">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="-rotate-190"
              >
                {/* Background circle */}
                <circle
                  stroke="#1a1a1a"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Animated progress circle */}
                <circle
                  stroke="url(#gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition: "stroke-dashoffset 0.3s ease",
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                    <stop offset="100%" stopColor="#facc15" />{" "}
                    {/* yellow-400 */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Text */}
              <span className="absolute text-white text-3xl font-bold">
                {progress}%
              </span>
            </div>
          </div>
          <div className="w-full md:w-118 xl:w-106  h-36 flex  flex-col justify-between items-center md:items-start ">
            <h2 className="font-poppins text-[22px]   md:text-xl xl:text-4xl text-white font-bold">
              UX Design
            </h2>
            <p className="font-poppins w-80 md:w-full text-base xl:text-lg text-white text-center md:text-left font-normal">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className=" md:pt-8 md:pr-11 h-1/4 md:pb-12 md:pl-8 flex flex-col md:flex-row items-center justify-evenly md:justify-between  w-[386px] md:w-full xl:w-189 md:h-1/4 xl:h-1/2 border rounded xl:pt-10 xl:pr-12 xl:pb-15 xl:pl-10 border-[#737373]">
                   <div className=" h-41 w-41 flex items-center justify-center md:h-45 md:w-45 xl:h-55 xl:w-55 ">
            <div className="flex items-center justify-center min-h-screen ">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="-rotate-190"
              >
                {/* Background circle */}
                <circle
                  stroke="#1a1a1a"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Animated progress circle */}
                <circle
                  stroke="url(#gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition: "stroke-dashoffset 0.3s ease",
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                    <stop offset="100%" stopColor="#facc15" />{" "}
                    {/* yellow-400 */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Text */}
              <span className="absolute text-white text-3xl font-bold">
                {progress}%
              </span>
            </div>
          </div>
          <div className="w-full md:w-118 xl:w-106  h-36 flex  flex-col justify-between items-center md:items-start ">
            <h2 className="font-poppins text-[22px]   md:text-xl xl:text-4xl text-white font-bold">
              UX Design
            </h2>
            <p className="font-poppins w-80 md:w-full text-base xl:text-lg text-white text-center md:text-left font-normal">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className=" md:pt-8 md:pr-11 h-1/4 md:pb-12 md:pl-8 flex flex-col md:flex-row items-center justify-evenly md:justify-between  w-[386px] md:w-full xl:w-189 md:h-1/4 xl:h-1/2 border rounded xl:pt-10 xl:pr-12 xl:pb-15 xl:pl-10 border-[#737373]">
                   <div className=" h-41 w-41 flex items-center justify-center md:h-45 md:w-45 xl:h-55 xl:w-55 ">
            <div className="flex items-center justify-center min-h-screen ">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="-rotate-190"
              >
                {/* Background circle */}
                <circle
                  stroke="#1a1a1a"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Animated progress circle */}
                <circle
                  stroke="url(#gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition: "stroke-dashoffset 0.3s ease",
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                    <stop offset="100%" stopColor="#facc15" />{" "}
                    {/* yellow-400 */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Text */}
              <span className="absolute text-white text-3xl font-bold">
                {progress}%
              </span>
            </div>
          </div>
          <div className="w-full md:w-118 xl:w-106  h-36 flex  flex-col justify-between items-center md:items-start ">
            <h2 className="font-poppins text-[22px]   md:text-xl xl:text-4xl text-white font-bold">
              UX Design
            </h2>
            <p className="font-poppins w-80 md:w-full text-base xl:text-lg text-white text-center md:text-left font-normal">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
        <div className=" md:pt-8 md:pr-11 h-1/4 md:pb-12 md:pl-8 flex flex-col md:flex-row items-center justify-evenly md:justify-between  w-[386px] md:w-full xl:w-189 md:h-1/4 xl:h-1/2 border rounded xl:pt-10 xl:pr-12 xl:pb-15 xl:pl-10 border-[#737373]">
                   <div className=" h-41 w-41 flex items-center justify-center md:h-45 md:w-45 xl:h-55 xl:w-55 ">
            <div className="flex items-center justify-center min-h-screen ">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="-rotate-190"
              >
                {/* Background circle */}
                <circle
                  stroke="#1a1a1a"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Animated progress circle */}
                <circle
                  stroke="url(#gradient)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  style={{
                    transition: "stroke-dashoffset 0.3s ease",
                  }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" /> {/* pink-500 */}
                    <stop offset="100%" stopColor="#facc15" />{" "}
                    {/* yellow-400 */}
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Text */}
              <span className="absolute text-white text-3xl font-bold">
                {progress}%
              </span>
            </div>
          </div>
          <div className="w-full md:w-118 xl:w-106  h-36 flex  flex-col justify-between items-center md:items-start ">
            <h2 className="font-poppins text-[22px]   md:text-xl xl:text-4xl text-white font-bold">
              UX Design
            </h2>
            <p className="font-poppins w-80 md:w-full text-base xl:text-lg text-white text-center md:text-left font-normal">
              UI design is the process of designing the visual and interactive
              elements of a user interface, such as buttons, icons, and layout,
              to create an intuitive and pleasing experience for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
