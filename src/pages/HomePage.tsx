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
      <section className="max-w-3xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Velkommen til Aktivio</h2>
        <p className="text-lg mb-4">
          Hos Aktivio kombinerer vi moderne treningsfasiliteter med en varm og inkluderende atmosfære.
          Vi tilbyr et bredt spekter av treningsformer – fra styrketrening og kondisjon, til yoga og gruppetimer.
        </p>
        <p className="text-lg">
          Vår visjon er å gjøre trening tilgjengelig, motiverende og gøy for alle.
          Hos oss er du ikke bare et medlem – du er en del av fellesskapet!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
