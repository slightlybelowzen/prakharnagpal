import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function TatemScroll() {
  const data = [
    {
      label: "Inbox",
      count: 30,
    },
    {
      label: "Meetings",
      count: 12,
    },
    {
      label: "Subscriptions",
      count: 8,
    },
    {
      label: "Newsletters",
      count: 5,
    },
    {
      label: "Shopping",
      count: 4,
    },
  ];
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
  });

  const progress = useTransform(scrollY, [0, 1], [0, 100]);
  return (
    <div
      ref={ref}
      className="group bg-[#00000008] min-h-72 max-h-96 overflow-auto rounded-lg shadow-code flex flex-col gap-2 justify-center items-center px-14"
    >
      <div className="flex gap-5">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1 text-body-muted"
          >
            <div>{item.label}</div>
            <div className="text-sm text-graphic-outline">{item.count}</div>
          </div>
        ))}
      </div>
      <div className="relative h-0.5 w-full items-center bg-beige-dark rounded-full overflow-hidden">
        <motion.div
          transition={{
            duration: 0.3,
          }}
          style={{
            translateX: progress,
          }}
          className="absolute bg-graphic-black rounded-full h-0.5 w-full max-w-[12.5%]"
        />
      </div>
    </div>
  );
}
