import { AiOutlineLoading } from 'react-icons/ai';
import P from 'prop-types';

export function Loading({ load }) {
  return load ? (
    <div className="flex items-center justify-center w-48 h-48 text-white bg-black">
      <div className="animate-spin">
        <AiOutlineLoading size={36} />
      </div>
    </div>
  ) : (
    <p className="py-2 text-white">Coloque dados</p>
  );
}
Loading.propTypes = {
  load: P.bool.isRequired,
};
