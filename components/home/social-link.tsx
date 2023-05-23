import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import { StaticImageData } from "next/image";

type IconProps = {
  icon: IconDefinition,
  link: string,
};

type ImageProps = {
  image: StaticImageData,
  name: string,
  link: string,
}

type Props = IconProps | ImageProps;

let iconClasses = "fa-4x inline m-2 drop-shadow hover:drop-shadow-2xl hover:scale-125 transition-all duration-100";
let imageClasses = iconClasses + " mt-[-40px]";

export default function SocialLink(props: Props) {
  if ("image" in props) {
    return (
      <Link href={props.link}>
        <Image src={props.image} alt={props.name} width="64" height="64" className={imageClasses} />
      </Link>
    )
  } else {
    return (
      <Link href={props.link}>
        <FontAwesomeIcon icon={props.icon} className={iconClasses} />
      </Link>
    )
  }
}