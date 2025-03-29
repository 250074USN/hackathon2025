// src/components/TjenesteKort.tsx
type Props = {
    icon: string;
    title: string;
    description: string;
  };
  
  const TjenesteKort = ({ icon, title, description }: Props) => (
    <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg hover:scale-[1.02] transition">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
  
  export default TjenesteKort;
  