import Image from "next/image";
import nextConfig from "@/../next.config.mjs";

export const CustomImage = (props) => {
  const newProps = {
    ...props,
    src: `${nextConfig.basePath}${props.src}`,
  };

  return <Image {...newProps} alt={props.alt} />;
};

export default CustomImage;
