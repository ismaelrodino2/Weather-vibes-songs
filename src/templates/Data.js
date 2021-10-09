import { useState } from 'react';
import { useEffect } from 'react';

export function Data() {
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [songs, setSongs] = useState();

  useEffect(() => {
    setCity(localStorage.getItem('cidade'));
    setTemp(localStorage.getItem('temperatura'));
    setTemp(localStorage.getItem('gênero'));
    var storedSongs = JSON.parse(localStorage.getItem('musicas'));
    setSongs(storedSongs);
  }, []);

  if (songs === undefined) {
    return <h1>carregando</h1>;
  }
  return (
    <div className="flex items-center h-screen bg-green-600">
      <div className="flex flex-col items-center text-center main-container">
        <div className="pb-4 font-medium text-red-700">
          <h1>
            Cidade: <p className="uppercase">{city}</p>
          </h1>
          <p>Gênero: {temp}</p>
        </div>
        <p className="p-1 font-medium text-white">List de músicas:</p>
        {songs === null
          ? ''
          : songs.map((el, index) => (
              <div key={index}>
                <h1>{el.term}</h1>
              </div>
            ))}
      </div>
    </div>
  );
}
