// src/pages/Tjenester.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Tjeneste = {
  icon: string;
  title: string;
  description: string;
};

const trenere = [
  {
    navn: "Siri Nilsen",
    rolle: "Gruppetreningsinstruktør",
    beskrivelse:
      "Siri Nilsen er en energisk og lidenskapelig instruktør som spesialiserer seg på høyt intensitetsintervalltrening (HIIT) og Zumba. Med mange års erfaring fra både gruppetrening og individuell coaching, er Siri kjent for å skape et inkluderende og motiverende miljø. Hennes dynamiske tilnærming sørger for at alle deltakere, uansett nivå, føler seg utfordret og inspirert. Siri setter en ære i å gjøre trening både gøy og effektivt, samtidig som hun sørger for at du får den oppfølgingen du trenger for å nå dine mål.",
    image: "/public/trener.png",
  },
  {
    navn: "Jørgen Johannesen",
    rolle: "Yogainstruktør",
    beskrivelse:
      "Jørg1 er vår erfarne yogainstruktør som kombinerer rolig tilstedeværelse med en dyp forståelse for pusteteknikker og kroppens balanse. Med flere års erfaring i yoga og meditasjon, tilbyr Jonas en rolig og helhetlig tilnærming til trening som fremmer både fysisk og mental velvære. Han er ekspert på å tilpasse hver økt til deltakerens individuelle behov, enten det er for å bygge fleksibilitet, redusere stress eller forbedre kroppsholdningen.",
    image: "/public/jorg1.jpg",
  },
  {
    navn: "Amanda L.",
    rolle: "Personlig trener",
    beskrivelse:
      "Amanda L. er en dedikert og resultatorientert personlig trener som spesialiserer seg på skreddersydde treningsprogrammer for vekttap, styrketrening og rehabilitering. Hennes tilnærming fokuserer på å bygge langsiktige vaner som gir varige resultater, samtidig som hun prioriterer sikkerhet og teknikk. Med sin lidenskap for helse og trening, har Amanda hjulpet utallige kunder med å nå sine mål og utvikle en bærekraftig livsstil.",
    image: "/public/trener.png",
  },
  {
    navn: "Eva S.",
    rolle: "Styrketreningsinstruktør",
    beskrivelse:
      "Eva S. er en ekspert innen styrketrening med en spesiell interesse for funksjonell trening og rehabilitering. Med en grundig forståelse for kroppens biomekanikk og evnen til å tilpasse treningen til individuelle behov, hjelper Eva deltakerne med å bygge styrke på en trygg og effektiv måte. Enten du er en nybegynner som ønsker å lære grunnleggende teknikker, eller en erfaren atlet som ønsker å forbedre ytelsen, er Eva den rette treneren for å hjelpe deg med å oppnå dine styrkemål.",
    image: "/public/trener.png",
  },
  {
    navn: "Ole M.",
    rolle: "Spinninginstruktør",
    beskrivelse:
      "Ole M. er vår entusiastiske spinninginstruktør med en lidenskap for høyintensiv kondisjonstrening. Med sitt energiske og motiverende personlighet skaper han en inspirerende atmosfære for alle deltakerne. Ole spesialiserer seg på å utvikle treningsøkter som forbedrer kardiovaskulær helse, utholdenhet og muskelfunksjon. Hans mål er å gi deltakerne en opplevelse av mestring og energi gjennom intens sykkeltrening, og å hjelpe dem med å oppnå sine treningsmål.",
    image: "/public/trener.png",
  },
];

const Tjenester: React.FC = () => {
  const [currentTrainerIndex, setCurrentTrainerIndex] = useState(0);
  const [showFullText, setShowFullText] = useState<number | null>(null); // Denne tilstanden holder styr på hvilken trener som har utvidet tekst
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

  // Funksjon for å navigere til neste gruppe med trenere
  const nextTrainers = () => {
    setCurrentTrainerIndex((prevIndex) =>
      prevIndex === trenere.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Funksjon for å navigere til forrige gruppe med trenere
  const prevTrainers = () => {
    setCurrentTrainerIndex(
      currentTrainerIndex === 0 ? trenere.length - 3 : currentTrainerIndex - 1
    );
  };

  // Funksjon for å håndtere "Les mer" klikk
  const toggleFullText = (index: number) => {
    setShowFullText(showFullText === index ? null : index); // Toggling av visning av full tekst kun for den klikkede treneren
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <section className="max-w-3xl mx-auto py-12 px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Velkommen til Aktivio</h2>
          <p className="text-lg text-gray-300">
            Vi tilbyr tjenester for alle – uansett mål eller nivå.
          </p>
        </section>

        {/* Tjenester */}
        <h1 className="text-4xl font-bold text-center mb-12">Våre tjenester</h1>
        <div className="grid gap-10 md:grid-cols-3 mb-20">
          {tjenester.map((tjeneste, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/timeplan?type=${encodeURIComponent(tjeneste.title)}`)
              }
              className="cursor-pointer bg-gray-800 rounded-xl p-6 shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-3xl mb-4">{tjeneste.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{tjeneste.title}</h3>
              <p className="text-gray-300">{tjeneste.description}</p>
            </div>
          ))}
        </div>

        {/* Trenere */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Våre trenere</h2>
          <div className="flex justify-between items-center mb-6">
            {/* Venstre pil */}
            <button
              onClick={prevTrainers}
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition flex items-center justify-center ml-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Vis 3 trenere om gangen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trenere.slice(currentTrainerIndex, currentTrainerIndex + 3).map(
                (trener, index) => (
                  <div
                    key={index}
                    className={`relative group cursor-pointer bg-gray-800 rounded-xl p-4 shadow transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl ${
                      showFullText === index ? "scale-110" : ""
                    }`} // Kun den valgte boksen blir større
                  >
                    <img
                      src={trener.image}
                      alt={trener.navn}
                      className="w-auto h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold">{trener.navn}</h3>
                    <p className="text-sm text-gray-400 mb-1">{trener.rolle}</p>
                    <p className="text-gray-300 text-sm">
                      {showFullText === index
                        ? trener.beskrivelse
                        : `${trener.beskrivelse.substring(0, 100)}...`}
                    </p>
                    <button
                      className="text-blue-500 text-sm mt-2"
                      onClick={() => toggleFullText(index)}
                    >
                      {showFullText === index ? "Vis mindre" : "Les mer"}
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Høyre pil */}
            <button
              onClick={nextTrainers}
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition flex items-center justify-center mr-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tjenester;
