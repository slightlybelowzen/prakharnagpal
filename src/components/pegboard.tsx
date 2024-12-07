import { homePageData } from "../data/homePageData";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";

function Note({
  title,
  description,
  link,
  external,
  pos,
}: {
  title: string;
  description: string;
  link: string;
  external: boolean;
  pos: { left: number; top: number };
}) {
  return (
    <div
      className={`absolute text-sm bg-selection-blue/40 w-fit h-fit px-4 py-2 flex justify-center items-center`}
    >
      <p>
        <a href={link} className="font-mono">
          {title}
          {external && <ArrowUpRight class="inline w-4 h-4 -ml-0.5 mb-0.5" />}
        </a>
        <span className="block">{description}</span>
      </p>
    </div>
  );
}

export default function PegBoard() {
  return (
    <div className="overflow-hidden relative w-full h-full min-h-[72vh] bg-beige-alt/80 border border-beige-dark/50 rounded-sm">
      <div className="absolute top-0 left-0 w-full h-20 grid-header grid-size-24" />
      <div className="overflow-hidden absolute h-full w-full grid grid-size-24" />
      <div className="relative h-full w-full">
        <Note
          pos={{ left: 0, top: 0 }}
          title="Hello"
          description="World"
          external={false}
          link="#"
        />
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
