import classes from  './Button.module.scss';
import { ButtonInterface } from '@/types/interfaces';
import { Link } from 'react-router-dom';

const Button = (props: ButtonInterface) => {
  const { title, route, type, additionalClass, isButton, onClick } = props;

  return (
    <>
      {isButton && (
        <button
          className={`${classes['button']} ${additionalClass}`}
          type={type}
          title={title}
          onClick={onClick}
        >
          {title}
        </button>
      )}
      {!isButton && (
        <Link
          className={`${classes['button']} ${additionalClass}`}
          to={route || '/'}
        >
          {title}
        </Link>
      )}
    </>

  );
};

export default Button;
