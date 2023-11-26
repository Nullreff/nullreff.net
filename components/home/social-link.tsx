import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

type IconProps = {
  icon: IconDefinition,
  link: string,
  name: string,
  className?: string,
};

type DefaultProps = React.PropsWithChildren<{
  name: string,
  link: string,
  className?: string,
}>

type Props = IconProps | DefaultProps;

let commonClasses = "inline m-2 drop-shadow hover:drop-shadow-2xl hover:scale-125 transition-all duration-100";
let iconClasses = commonClasses + " fa-3x";
let defaultClasses = commonClasses + " invert align-bottom";

export default function SocialLink(props: Props) {
  if ("icon" in props) {
    return (
      <Link href={props.link} rel="me" className={props.className}>
        <FontAwesomeIcon icon={props.icon} title={props.name} className={iconClasses} />
      </Link>
    )
  } else {
    return (
      <Link href={props.link} rel="me" className={props.className}>
        {props.children}
      </Link>
    )
  }
}