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
          rounded-lg bg-[#00000008] px-10 sm:min-h-[36vh] md:flex-col md:gap-0.5`}
    ></div>
  );
}
