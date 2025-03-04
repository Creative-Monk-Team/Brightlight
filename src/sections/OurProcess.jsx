// import styles from "../styles/OurProcess.module.css";
import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";
import { useEffect, useState } from "react";
import Image from "next/image";

const OurProcess = () => {
  const [planePosition, setPlanePosition] = useState(0);
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

  // const steps = [
  //   { id: 1, pointer: BluePointer, position: 270, className: styles.blueCard },
  //   { id: 2, pointer: GoldenPointer, position: 480, className: styles.goldenCard },
  //   { id: 3, pointer: BluePointer, position: 690, className: styles.blueCard },
  //   { id: 4, pointer: GoldenPointer, position: 890, className: styles.goldenCard },
  // ];

  const steps = [
    { id: 1, pointer: BluePointer, position: 270 },
    { id: 2, pointer: GoldenPointer, position: 480 },
    { id: 3, pointer: BluePointer, position: 690 },
    { id: 4, pointer: GoldenPointer, position: 890 },
  ];

  return (
    <div className="{styles.ourProcessSection}">
      <div className="{styles.fourCardParent} py-10">
        <div className="{styles.fourCard} flex flex-col gap-5 px-10">
          <div className="{styles.fourCardHeading} flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#132f46] font-semibold">{ourProcessData.heading}</h1>
            <p className="text-lg md:text-xl lg:text-2xl tracking-wide text-center text-[#132f46] font-semibold">{ourProcessData.description}</p>
          </div>
          <div className="{styles.fourCardImgParent}">
            <div className={`styles.fourCardImg grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`${step.id%2==0? "our-process-card-even-shadow" : "our-process-card-odd-shadow"} p-10 rounded-4xl styles.fourCardMain flex flex-col gap-5`}
                  onMouseEnter={() => setPlanePosition(step.position)}
                >
                  <div className="{styles.pointerImageSection} group relative flex items-center justify-center">
                    <Image
                      src={step.pointer}
                      alt={`Step ${step.id}`}
                      loading="lazy"
                      title={`Step ${step.id}`}
                      className="h-40 object-cover w-36 transform group-hover:-rotate-90 transition-all duration-500"
                    />
                    <p className={`${step.id%2==0? "text-[#e0b969]":"text-[#184d79]"} text-6xl font-semibold absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2`}>{step.id}</p>
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
          </div>
          <div className="{styles.runwayParent} relative hidden lg:block">
            <Image
              src={Runway}
              alt="Runway"
              title="Runway"
              className="h-full w-full"
              priority
            />
            <Image
              src={Plane}
              alt="Plane"
              title="Plane"
              className="{styles.plane} absolute h-12 w-40 top-12"
              style={{ left: `${planePosition}px` }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;