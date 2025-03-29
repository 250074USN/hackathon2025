// src/pages/Timeplan.tsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import TimeplanTabell from "../components/TimePlan/TimeplanTabell";

const Timeplan: React.FC = () => {
  const [params] = useSearchParams();
  const typeFilter = params.get("type");

  const timeplan = [
    // 🏋️ Styrketrening
    { dag: "Mandag", tid: "10:00", type: "Styrketrening", instruktør: "Lars H." },
    { dag: "Onsdag", tid: "14:00", type: "Styrketrening", instruktør: "Nina A." },
    { dag: "Fredag", tid: "18:00", type: "Styrketrening", instruktør: "Amanda L." },

    // 🤸‍♀️ Gruppetimer
    { dag: "Tirsdag", tid: "17:30", type: "Gruppetimer", instruktør: "Caroline M." },
    { dag: "Torsdag", tid: "18:00", type: "Gruppetimer", instruktør: "Jonas K." },
    { dag: "Lørdag", tid: "10:00", type: "Gruppetimer", instruktør: "Siri N." },

    // 💪 Personlig trener (PT)
    { dag: "Mandag", tid: "12:00", type: "Personlig trener (PT)", instruktør: "Andreas B." },
    { dag: "Onsdag", tid: "16:00", type: "Personlig trener (PT)", instruktør: "Mia F." },
    { dag: "Fredag", tid: "09:00", type: "Personlig trener (PT)", instruktør: "Daniel S." },
  ];

  const filtered = typeFilter
    ? timeplan.filter((rad) =>
        rad.type.toLowerCase().includes(typeFilter.toLowerCase())
      )
    : timeplan;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {typeFilter ? `Timeplan – ${typeFilter}` : "Gruppetimer – Timeplan"}
        </h1>
        <TimeplanTabell data={filtered} />
      </div>
    </div>
  );
};

export default Timeplan;
