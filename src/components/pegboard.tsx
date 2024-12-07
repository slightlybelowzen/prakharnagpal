export default function PegBoard() {
  return (
    <div className="overflow-hidden relative w-full h-full min-h-[72vh] bg-beige-alt/80 border border-beige-dark/50 rounded-sm">
      <div className="absolute top-0 left-0 w-full h-20 grid-header grid-size-24" />
      <div className="overflow-hidden absolute h-full w-full grid grid-size-24" />
      <div className="relative h-full w-full">
        {/* {homePageData.map((note) => (
          <Note
            key={note.title}
            pos={{ left: getRandomInt(0, 100), top: getRandomInt(0, 100) }}
            title={note.title}
            description={note.description}
            external={note.external}
            link={note.link}
          />
        ))} */}
      </div>
    </div>
  );
}
