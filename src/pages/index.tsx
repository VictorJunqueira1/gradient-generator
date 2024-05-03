import { useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ArrowUpRight, ArrowDownRight, ArrowUpLeft, ArrowDownLeft } from 'lucide-react';

export default function Home() {
  const [colorOne, setColorOne] = useState('#7986cb');
  const [colorTwo, setColorTwo] = useState('#1a237e');
  const [direction, setDirection] = useState('to right');

  const copyToClipboard = () => {
    const cssCode = `background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo});`;
    navigator.clipboard.writeText(cssCode)
      .then(() => alert('Copiado para área de transferência!'))
      .catch(err => console.error('Falha ao copiar texto: ', err));
  }

  const directions = [
    { dir: 'to right', icon: <ArrowRight /> },
    { dir: 'to left', icon: <ArrowLeft /> },
    { dir: 'to top', icon: <ArrowUp /> },
    { dir: 'to bottom', icon: <ArrowDown /> },
    { dir: 'to top right', icon: <ArrowUpRight /> },
    { dir: 'to bottom right', icon: <ArrowDownRight /> },
    { dir: 'to top left', icon: <ArrowUpLeft /> },
    { dir: 'to bottom left', icon: <ArrowDownLeft /> },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `linear-gradient(${direction}, ${colorOne}, ${colorTwo})` }}>
      <div className="text-center text-white p-6 rounded-lg shadow-lg bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold mb-4">Gerador de Gradiente</h1>
        <div className="flex justify-center gap-4 mb-4">
          <input type="color" value={colorOne} onChange={(e) => setColorOne(e.target.value)} className="w-16 h-16 cursor-pointer border-none" />
          <input type="color" value={colorTwo} onChange={(e) => setColorTwo(e.target.value)} className="w-16 h-16 cursor-pointer border-none" />
        </div>
        <div className="flex space-x-2 justify-center mb-4">
          {directions.map(({ dir, icon }) => (
            <button key={dir}
              className={`py-2 px-2 rounded ${direction === dir ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
              onClick={() => setDirection(dir)}
              title={dir.replace('to ', '')}>
              {icon}
            </button>
          ))}
        </div>
        <div className="bg-white text-gray-800 p-3 rounded shadow">
          <h2 className="text-lg font-semibold">Código CSS:</h2>
          <code className="break-words">{`background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo});`}</code>
          <button onClick={copyToClipboard} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Copiar
          </button>
        </div>
      </div>
    </div>
  );
}