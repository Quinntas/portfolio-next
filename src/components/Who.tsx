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
          Sou um desenvolvedor de aplicações que também se especializou em análise de dados. Gosto de compartilhar minhas ideias e experiência no {" "}
          <a
            className="underline underline-offset-2"
            href="https://github.com/Quinntas"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          , jogar e aprecio ainda mais ouvir música.
        </p>
      </div>
    </div>
  );
};

export default Who;
