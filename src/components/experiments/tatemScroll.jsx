import { motion, useScroll } from "framer-motion";

export default function TatemScroll() {
  const data = [
    {
      label: "Inbox",
      count: 30,
      start: 0,
      end: 0.2,
    },
    {
      label: "Meetings",
      count: 12,
      start: 0.2,
      end: 0.4,
    },
    {
      label: "Subscriptions",
      count: 8,
      start: 0.4,
      end: 0.6,
    },
    {
      label: "Newsletters",
      count: 5,
      start: 0.6,
      end: 0.8,
    },
    {
      label: "Shopping",
      count: 4,
      start: 0.8,
      end: 1,
    },
  ];
  const { scrollYProgress } = useScroll();
  return (
    <div className="group bg-[#00000008] min-h-72 rounded-lg shadow-code flex flex-col gap-2 justify-center items-center px-14">
      <div className="flex gap-5">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 justify-center text-body-muted"
          >
            <div>{item.label}</div>
            <div className="text-sm text-graphic-outline">{item.count}</div>
          </div>
        ))}
      </div>
      <div className="relative h-0.5 w-full items-center bg-beige-dark rounded-full">
        <div className="absolute inset-0 bg-graphic-black w-[12%]"></div>
      </div>
    </div>
  );
}
