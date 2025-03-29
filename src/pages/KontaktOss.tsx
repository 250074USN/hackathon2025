import React from "react";

const KontaktOss: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Om Aktivio */}
      <section className="max-w-3xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Velkommen til Aktivio</h2>
        <p className="text-lg mb-8">
          Har du spørsmål eller trenger hjelp? Ta gjerne kontakt med oss!
        </p>

        {/* Kontaktinformasjon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Telefon</h3>
            <p className="text-lg">
              Ring oss på:{" "}
              <a href="tel:+4790123456" className="text-indigo-600">
                +47 90 12 34 56
              </a>
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">E-post</h3>
            <p className="text-lg">
              Send oss en e-post på:{" "}
              <a href="mailto:kontakt@aktivio.no" className="text-indigo-600">
                kontakt@aktivio.no
              </a>
            </p>
          </div>
        </div>

        {/* Kontaktformular */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Skriv til oss</h3>
          <form className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Ditt navn"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Din e-postadresse"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Din melding"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send melding
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default KontaktOss;
