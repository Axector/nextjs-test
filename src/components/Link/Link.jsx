import Link from "next/link";
import nextConfig from "@/../next.config.mjs";
import './styles.scss';

export const CustomLink = ({ children, ...props }) => {
  const newProps = {
    ...props,
    href: `${nextConfig.basePath}${props.href}`,
  };

  return (
    <Link {...newProps}>
      <span>{children}</span>
    </Link>
  );
}

export default CustomLink;
