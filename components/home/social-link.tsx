import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'
import { StaticImageData } from "next/image"

type Props = {
    icon: IconDefinition,
    image: StaticImageData,
    name: string,
    link: string,
}

export default function SocialLink({ icon, image, name, link}: Props) {
  let iconClasses = "fa-4x inline m-2 drop-shadow hover:drop-shadow-2xl hover:scale-125 transition-all duration-100"
  let imageClasses = iconClasses + " mt-[-40px]"
  if (icon) {
    return (
      <Link href={link}>
          <FontAwesomeIcon icon={icon} className={iconClasses}/>
      </Link>
    )
  } else {
    return (
      <Link href={link}>
          <Image src={image} alt={name} width="64" height="64" className={imageClasses}/>
      </Link>
    )
  }
}