// src/pages/Tjenester.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

type Tjeneste = {
  icon: string;
  title: string;
  description: string;
};

const Tjenester: React.FC = () => {
  const navigate = useNavigate();

  const tjenester: Tjeneste[] = [
    {
      icon: "🏋️",
      title: "Styrketrening",
      description: "Moderne apparater og frivekter – åpent hele dagen.",
    },
    {
      icon: "🤸‍♀️",
      title: "Gruppetimer",
      description: "HIIT, yoga, dans og mer. 45–60 minutters varighet.",
    },
    {
      icon: "💪",
      title: "Personlig trener (PT)",
      description: "Skreddersydd trening og tett oppfølging med profesjonell trener.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Våre tjenester</h1>
        <div className="grid gap-10 md:grid-cols-3">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/timeplan?type=${encodeURIComponent(tjeneste.title)}`)
              }
              className="cursor-pointer bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg hover:scale-[1.02] transition"
            >
              <div className="text-3xl mb-4">{tjeneste.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{tjeneste.title}</h3>
              <p className="text-gray-300">{tjeneste.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tjenester;
