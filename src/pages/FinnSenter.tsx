import React from "react";

const FinnSenter: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Finn Senter
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Her finner du vår lokasjon på kartet.
      </p>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.8873204536856!2d10.439334377290093!3d59.36821947463316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b45b79d6f991%3A0xc6dbd4529ba106f!2sBakkenteigen%2C%20Hovedinngang!5e0!3m2!1sen!2sno!4v1743266523173!5m2!1sen!2sno"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
};

export default FinnSenter;
