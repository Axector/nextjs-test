import Button from '@/components/Button';
import './styles.scss';

export const PrimaryButton = (props) => {
  const newProps = {
    ...props,
    className: props.className ? `primary-button ${props.className}` : 'primary-button',
  };

  return <Button {...newProps} />
}

export default PrimaryButton;
