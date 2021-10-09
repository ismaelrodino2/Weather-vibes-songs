import P from 'prop-types';

export function Button(save, clear) {
  return (
    <div>
      <button onClick={save} className="bg-green-700">
        Add data
      </button>{' '}
      <br />
      <button onClick={clear} className="bg-green-700">
        Delete data
      </button>
    </div>
  );
}
Button.propTypes = {
  save: P.node,
  clear: P.node,
};
