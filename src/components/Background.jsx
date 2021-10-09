import P from 'prop-types';

export function Background({ children, temp }) {
  var img = '/mild.jpg';

  if (temp >= 26) {
    img = '/beach.jpg';
  } else if (temp > 0 && temp < 26) {
    img = '/mild.jpg';
  } else if (temp <= 0) {
    img = '/cold.jpg';
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.397),
        rgba(12, 12, 12, 0.519)
      ),url(${img})`,
      }}
      className={`bg-no-repeat bg-center flex flex-col justify-center items-center h-screen bg-cover	`}
    >
      {children}
    </div>
  );
}
Background.propTypes = {
  children: P.node,
  temp: P.string,
};
