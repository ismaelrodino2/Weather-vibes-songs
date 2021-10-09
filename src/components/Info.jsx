import P from 'prop-types';

export function Info({ text, city }) {
  return (
    <div className="p-2 font-bold text-white main-container">
      <h1>{city}</h1>
      <p>{text}</p>
    </div>
  );
}

Info.propTypes = {
  text: P.string,
  city: P.string,
};
