import React from "react";
import bannerImage from "../assets/banner.png"; // Pass på at bildet ligger her

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Banner */}
      <div className="relative h-[60vh] w-full">
        <img
          src={bannerImage}
          alt="Treningsinspirasjon"
          className="w-full h-full object-cover object-[80%_0%] brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

        </div>
      </div>

      {/* Om Aktivio */}
      <section className="bg-gray-800 text-white py-16 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Velkommen til Aktivio</h2>
    <p className="text-lg text-gray-300 mb-4">
      Hos Aktivio kombinerer vi moderne treningsfasiliteter med en varm og inkluderende atmosfære.
      Vi tilbyr et bredt spekter av treningsformer – fra styrketrening og kondisjon, til yoga og gruppetimer.
    </p>
    <p className="text-lg text-gray-300">
      Vår visjon er å gjøre trening tilgjengelig, motiverende og gøy for alle.
      Hos oss er du ikke bare et medlem – du er en del av fellesskapet!
    </p>
  </div>
</section>


{/* Visjon, Tilbud og Unikt – moderne seksjon */}
<section className="bg-gray-800 py-16 px-6 text-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-white">Hvorfor velge Aktivio?</h2>

    <div className="grid gap-10 md:grid-cols-3 text-left">
      {/* Visjon */}
      <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">💡</div>
        <h3 className="text-2xl font-semibold mb-2">Vår visjon</h3>
        <p className="text-gray-300 text-base">
          Aktivio skal gjøre trening til en naturlig og inspirerende del av hverdagen. 
          Vi tror på helhetlig helse – hvor aktivitet, trivsel og fellesskap går hånd i hånd.
        </p>
      </div>

      {/* Tilbud */}
      <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">🏋️‍♀️</div>
        <h3 className="text-2xl font-semibold mb-2">Vårt tilbud</h3>
        <ul className="text-gray-300 list-disc list-inside space-y-1 text-base">
          <li>Styrke- og kondisjonsutstyr</li>
          <li>Yoga, HIIT & gruppetimer</li>
          <li>Personlig trening</li>
          <li>Restitusjon & velvære</li>
        </ul>
      </div>

      {/* Det unike */}
      <div className="bg-gray-900 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
        <div className="text-4xl mb-4">🌟</div>
        <h3 className="text-2xl font-semibold mb-2">Det unike med oss</h3>
        <p className="text-gray-300 text-base">
          Hos Aktivio bygger vi mer enn bare muskler – vi bygger mennesker. 
          Vi fokuserer på mestring, motivasjon og fellesskap, og gjør alle til en del av noe større.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default HomePage;
