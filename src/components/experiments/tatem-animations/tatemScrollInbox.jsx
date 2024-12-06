// import {
//   motion,
//   useScroll,
//   useMotionValueEvent,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";
// import { useState } from "react";

export default function TatemScrollInbox() {
  // const [currentLabelId, setCurrentLabelId] = useState(0);
  const data = [
    {
      id: 1,
      label: "Inbox",
      count: 30,
    },
    {
      id: 2,
      label: "Meetings",
      count: 12,
    },
    {
      id: 3,
      label: "Subscriptions",
      count: 8,
    },
    {
      id: 4,
      label: "Newsletters",
      count: 5,
    },
    {
      id: 5,
      label: "Shopping",
      count: 4,
    },
  ];
  return (
    <div
      className={`group flex h-full w-full flex-row items-center justify-center gap-5 
        rounded-lg bg-[#00000008] border border-beige-dark px-10 sm:min-h-[36vh] md:flex-col md:gap-0.5`}
    >
      <div className="relative flex flex-col gap-1">
        <div className="flex gap-5">
          {data.map((item) => (
            <div
              id={`grouping-${item.id}`}
              key={item.label}
              className={`flex items-center gap-1`}
            >
              <div className={`text-body-muted`}>{item.label}</div>
              <div className={`text-sm text-graphic-outline`}>{item.count}</div>
            </div>
          ))}
        </div>
        <div className="relative hidden h-0.5 w-full items-center overflow-hidden rounded-full bg-beige-dark md:block">
          <div className="z-10 h-full w-full rounded bg-graphic-black duration-200 max-w-[11%]" />
        </div>
      </div>
    </div>
  );
}
