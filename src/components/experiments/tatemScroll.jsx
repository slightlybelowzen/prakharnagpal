import { motion } from "framer-motion";

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
  return (
    <motion.div className="group bg-[#00000008] min-h-72 rounded-lg shadow-code flex flex-col gap-2 justify-center items-center px-14">
      <div className="flex gap-5">
        {data.map((item) => (
          <div className="flex items-center gap-1.5 justify-center text-body-muted">
            <div>{item.label}</div>
            <div className="text-sm text-graphic-outline">{item.count}</div>
          </div>
        ))}
      </div>
      <div className="relative h-0.5 w-full items-center bg-beige-dark rounded-full"></div>
    </motion.div>
  );
}
