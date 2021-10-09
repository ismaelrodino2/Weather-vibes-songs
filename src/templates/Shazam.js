import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import P from 'prop-types';

export function Shazam({ temp, city }) {
  const [songs, setSongs] = useState([]);
  const [term, setTerm] = useState('');
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setSongs(undefined);
    var options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/auto-complete',
      params: { term: term, locale: 'en-US' },
      headers: {
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
        // eslint-disable-next-line no-undef
        'x-rapidapi-key': process.env.REACT_APP_SHAZAM_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSongs(response.data.hints);
      })
      .catch(function (error) {
        console.log('erro');
      });
  }, [term]);

  function handleButton() {
    setLoad(true);
    if (temp > 32) {
      setTerm('rock');
    } else if (temp > 24 && temp < 32) {
      setTerm('pop');
    } else if (temp > 16 && temp < 24) {
      setTerm('classic');
    } else if (temp < 16) {
      setTerm('lofi');
      console.log(term);
    }
  }

  function save() {
    var today = new Date();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    localStorage.setItem('cidade', city);
    localStorage.setItem('temperatura', temp);
    localStorage.setItem('horário', time);
    localStorage.setItem('gênero', term);
    localStorage.setItem('musicas', JSON.stringify(songs));
  }
  function clear() {
    localStorage.clear();
  }

  return (
    <div className="flex flex-col items-center text-center main-container">
      <button
        className="px-4 py-2 font-bold text-black bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
        onClick={handleButton}
      >
        Search
      </button>
      <div className="p-2">
        {songs === undefined ? (
          <Loading load={load} />
        ) : (
          songs.map((el, index) => (
            <div key={index} className="text-white">
              <h1>{el.term}</h1>
            </div>
          ))
        )}
      </div>
      <div className="flex flex-row gap-4">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={save}
        >
          Salvar no storage
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={clear}
        >
          Limpar storage
        </button>
      </div>
    </div>
  );
}
Shazam.propTypes = {
  temp: P.string,
  city: P.string,
};
