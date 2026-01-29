import Link from "next/link";
import './styles.scss';

export const CustomLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <span>{children}</span>
    </Link>
  );
}

export default CustomLink;
