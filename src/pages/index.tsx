import type { GetStaticProps, NextPage } from "next";

import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import { GET_ALL_DATA } from "../graphql/queries";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";
import SmallProjects from "../components/SmallProjects";
import Who from "../components/Who";
import { allDataType } from "../shared/types";
import { client } from "../graphql/client";
import { useRef } from "react";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills skills={data.skills} />
        <MainProjects projects={data.projects} />
        <SmallProjects projects={data.smallProjects} />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    "skills": [
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg",
        "title": "PYTHON",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/java.svg",
        "title": "Java",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg",
        "title": "Javascript",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/typescript.svg",
        "title": "Typescript",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg",
        "title": "NodeJS",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/database.svg",
        "title": "Sql",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/php.svg",
        "title": "Php",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/csharp.svg",
        "title": "C#",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/git.svg",
        "title": "Git",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/cpp.svg",
        "title": "C++",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/docker.svg",
        "title": "Docker",
        "link": ""
      },
      {
        "image": "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/graphql.svg",
        "title": "GraphQL",
        "link": ""
      }
    ],
    "projects": [
      {
        "id": "cl41946uh4f9k0ezzm3mqjkn5",
        "title": "Luna",
        "description": "A alexa 2.0",
        "demo": "",
        "github": "",
        "technologies": [
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg",
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg",
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/next.svg",
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/prisma.svg",
        ],
        "image": {
          "url": "https://media.graphassets.com/resize=width:700/output=format:webp/3ZIRqpAJTkmCKLNjS1N1"
        }
      },
      {
        "id": "cl4196ljg4fde0c0zjrk065a2",
        "title": "Spectre",
        "description": "Spectre eh uma API que visa facilitar a vida do programador medio ao avancado, a Spectre pode manejar com facilidade todas as suas base de dados. Assim vc pode escalar sua aplicacao ate a lua.",
        "demo": "",
        "github": "",
        "technologies": [
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg",
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/database.svg",
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/graphql.svg",
        ],
        "image": {
          "url": "https://media.graphassets.com/resize=width:700/output=format:webp/9NM3dJhTAGoIBu5kDwzh"
        }
      },
      {
        "id": "cl4198jlh4fb10b0yca75wulh",
        "title": "Riki",
        "description": "Um sistema de notificacoes totalmente personalizavel",
        "demo": "",
        "github": "",
        "technologies": [
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg",
        ],
        "image": {
          "url": "https://media.graphassets.com/resize=width:700/output=format:webp/GO77xOZAQQicldtn7Md5"
        }
      },
      {
        "id": "cl5b8iefippxy0cy9quph5vz4",
        "title": "Razor",
        "description": "Imagine o YouTrack totalmente integrado com o GitHub",
        "demo": "",
        "github": "",
        "technologies": [
          "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/python.svg",
        ],
        "image": {
          "url": "https://media.graphassets.com/resize=width:700/output=format:webp/hLFd1HQL8udbhsxB9hgv"
        }
      }
    ],
    "smallProjects": [
      {
        "id": "cl41bb6ga4i6v0c0zc4nud16j",
        "title": "Oracle",
        "description": "Uma IA que faz web scrappings",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/AVIK9iB0RWi1vdWa3aFX"
        }
      },
      {
        "id": "cl41bd91j4h2j0b14h717fxus",
        "title": "",
        "description": "",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/NVLrClLvSIa2D3SfZnoR"
        }
      },
      {
        "id": "cl41besg84ibz0b0y517qkj02",
        "title": "",
        "description": "",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/7c2yNM09TH6geANJNqPr"
        }
      },
      {
        "id": "cl41bit6l4j2h0ezz5tk59n5j",
        "title": "",
        "description": "",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/vavG7qW5TcO74SAhanRR"
        }
      },
      {
        "id": "cl41bkdna4iz10c0z9zkv07wd",
        "title": "",
        "description": "",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/RAW2soplR575pvfV6UoF"
        }
      },
      {
        "id": "cl44471kx052f0b0ygn5837po",
        "title": "",
        "description": "",
        "link": "",
        "icon": {
          "url": "https://media.graphassets.com/resize=height:40/output=format:webp/p5ronUORsyUAj3Kq8YfK"
        }
      }
    ]

  }

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
