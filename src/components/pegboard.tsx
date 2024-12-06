export default function PegBoard() {
  return (
    <div className="relative w-full h-full min-h-[36vh] border border-beige-dark/50 px-6 py-4 rounded-sm">
      <div className="absolute inset-0 h-full w-full bg-beige-alt/25 bg-[linear-gradient(to_right,var(--color-beige)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-beige)_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="relative h-full w-full">
          <div className="absolute top-5 bg-beige-dark/40 w-20 h-20"></div>
          <div className="absolute top-20 left-18 bg-beige-dark/40 w-20 h-20"></div>
          <div className="absolute top-40 left-40 bg-beige-dark/40 w-20 h-20"></div>
        </div>
      </div>
    </div>
  );
}
