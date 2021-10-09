import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className="absolute flex w-full bg-transparent">
      <ul className="flex justify-center w-full gap-8 text-3xl text-white main-container">
        <Link to="/">Pesquisar</Link>
        <Link to="/saved-data">Visualizar</Link>
      </ul>
    </div>
  );
}
