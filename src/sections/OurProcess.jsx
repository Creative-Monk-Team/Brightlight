import { useEffect, useState } from "react";
import Image from "next/image";
import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";

const OurProcess = () => {
  const [planePosition, setPlanePosition] = useState("10%");
  const [windowWidth, setWindowWidth] = useState(0);
  const [ourProcessData, setOurProcessData] = useState({
    heading: "",
    description: "",
    steps: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://brightlight-node.onrender.com/our-process");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        if (data && data.length > 0) {
          setOurProcessData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic plane position based on screen width
  const handlePlanePosition = (stepIndex) => {
    let position;
    if (windowWidth < 640) {
      position = `${10 + stepIndex * 20}%`; // Mobile screens
    } else if (windowWidth < 1024) {
      position = `${15 + stepIndex * 18}%`; // Tablets
    } else {
      position = `${20 + stepIndex * 15}%`; // Large screens
    }
    setPlanePosition(position);
  };

  const steps = [
    { id: 1, pointer: BluePointer },
    { id: 2, pointer: GoldenPointer },
    { id: 3, pointer: BluePointer },
    { id: 4, pointer: GoldenPointer },
  ];

  return (
    <div className="our-process-section">
      <div className="py-10">
        <div className="flex flex-col gap-5 px-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#132f46] font-semibold">{ourProcessData.heading}</h1>
            <p className="text-lg md:text-xl lg:text-2xl tracking-wide text-[#132f46] font-semibold">{ourProcessData.description}</p>
          </div>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`p-10 rounded-4xl ${step.id % 2 === 0 ? "our-process-card-even-shadow" : "our-process-card-odd-shadow"}`}
                onMouseEnter={() => handlePlanePosition(index)}
              >
                <div className="relative flex items-center justify-center">
                  <Image
                    src={step.pointer}
                    alt={`Step ${step.id}`}
                    loading="lazy"
                    className="h-40 object-cover w-36 transform transition-all duration-500"
                  />
                  <p className={`${step.id % 2 === 0 ? "text-[#e0b969]" : "text-[#184d79]"} text-6xl font-semibold absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2`}>
                    {step.id}
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-[#132f46]">{ourProcessData[`step${step.id}heading`]}</h3>
                <ul className="list-disc text-[14px] flex flex-col gap-4">
                  {[1, 2, 3, 4, 5].map((point) => (
                    <li key={point}>
                      {ourProcessData[`step${step.id}p${point}`] || null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="relative hidden lg:block">
            <Image src={Runway} alt="Runway" className="h-full w-full" priority />
            <Image
              src={Plane}
              alt="Plane"
              className="absolute h-12 w-40 top-10 transition-all duration-500"
              style={{ left: planePosition }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
