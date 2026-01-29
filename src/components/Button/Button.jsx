import './styles.scss';

export const Button = (props) => {
  const {
    children,
    onClick,
    className,
  } = props;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
};

export default Button;
