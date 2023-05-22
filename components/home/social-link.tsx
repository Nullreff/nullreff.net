import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type Props = {
    title: string,
    icon: IconDefinition,
    link: string,
}

export default function IconLink({ title, icon, link}: Props) {
  return (
    <Link href={link}>
        <FontAwesomeIcon icon={icon} className="" />
        {title}
    </Link>
  )
}