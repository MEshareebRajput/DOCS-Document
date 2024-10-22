import React from "react";
import Card from "./components/Card";

function Foreground() {
  const data = [
    {
      desc: "Backend Development using Node.js and Express.js.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "blue"
      }
    },
    {
      desc: "Building responsive web applications with Tailwind CSS.",
      filesize: ".7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "yellow"
      }
    },
    {
      desc: "Experience with animation libraries like Framer Motion.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "red"
      }
    },
    {
      desc: "Developing scalable applications with the MERN stack.",
      filesize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "purple"
      }
    },
    {
      desc: "Collaborative projects utilizing Git and GitHub for version control.",
      filesize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "orange"
      }
    },
    {
      desc: "Understanding of JavaScript ES6 features and best practices.",
      filesize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "purple"
      }
    },
    {
      desc: "Knowledge of RESTful APIs and integration with front-end frameworks.",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTittle: "Download Now",
        tagColor: "cyan"
      }
    }
  ];
  

  return (
    <div  className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
