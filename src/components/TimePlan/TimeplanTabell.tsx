// src/components/TimeplanTabell.tsx

type TimeplanRad = {
    dag: string;
    tid: string;
    type: string;
    instruktør: string;
  };
  
  type Props = {
    data: TimeplanRad[];
  };
  
  const TimeplanTabell = ({ data }: Props) => (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-400">
            <th className="py-2">Dag</th>
            <th className="py-2">Tid</th>
            <th className="py-2">Type</th>
            <th className="py-2">Instruktør</th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {data.map((rad, i) => (
            <tr key={i} className="bg-gray-700 rounded">
              <td className="py-2 px-4">{rad.dag}</td>
              <td className="py-2 px-4">{rad.tid}</td>
              <td className="py-2 px-4">{rad.type}</td>
              <td className="py-2 px-4">{rad.instruktør}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default TimeplanTabell;
  