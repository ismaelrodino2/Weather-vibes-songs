import axios from 'axios';
import { useEffect, useState } from 'react';
import '../index.css';
import { Shazam } from './Shazam';
import { Background } from '../components/Background';
import { Info } from '../components/Info';

function Home() {
  const [temperature, setTemperature] = useState();

  const [city, setCity] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(
          // eslint-disable-next-line no-undef
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
        );
        setTemperature(res.data.main.temp);
        setData(res.data);
        console.log(data);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, [city]);

  console.log(data);

  const handleChange = (e) => {
    const { value } = e.target;
    setCity(value);
    setTemperature(null);
  };

  if (data === undefined) {
    var text = <h1 className="text-white">Digite o nome de uma cidade</h1>;
  }

  return (
    <Background temp={temperature}>
      <div className="flex flex-col items-center text-center main-container">
        <input
          onChange={handleChange}
          type="search"
          className="w-1/3 px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <Info text={text} city={city} />
        <h1 className="p-1 m-2 text-yellow-500 bg-gray-600 rounded-sm">
          {temperature}
          {temperature ? <span>&#8451;</span> : ''}
        </h1>
        <Shazam temp={temperature} city={city} />
      </div>
    </Background>
  );
}

export default Home;
