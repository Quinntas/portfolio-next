import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Quem sou eu ?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          Sou um desenvolvedor de aplicacoes que também se especialiou em analize de dados. Gosto muito de{" "}
          <a
            className="underline underline-offset-2"
            href="https://github.com/Quinntas"
            target="_blank"
            rel="noopener noreferrer"
          >
            comitar no github
          </a>
          , ouvir musica e jogar.
        </p>
      </div>
    </div>
  );
};

export default Who;
