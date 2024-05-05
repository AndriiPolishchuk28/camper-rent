import { RotatingTriangles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.overlay}>
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-triangles-loading"
      />
    </div>
  );
};

export default Loader;
