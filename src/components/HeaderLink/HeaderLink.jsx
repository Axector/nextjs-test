import Link from "@/components/Link";
import './styles.scss';

export const HeaderLink = (props) => {
  const newProps = {
    ...props,
    className: props.className ? `header-link ${props.className}` : 'header-link',
  };

  return <Link {...newProps} />;
};

export default HeaderLink;
