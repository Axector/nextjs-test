import getBaseUrl from "@/utils/getBaseUrl";
import Image from "next/image";

export const MyImage = (props) => {
    const src = `${getBaseUrl()}${props.src}`;

    return <Image {...props} src={src} alt={props.alt} />;
};

export default MyImage;
