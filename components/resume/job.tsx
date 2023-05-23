import Image from 'next/image'
import { StaticImageData } from "next/image"
import Container from './container'

type Props = {
    dates: string,
    title: string,
    company: string,
    location: string,
    logo: StaticImageData,
    children: React.ReactNode
}

export default function Job({ dates, title, company, location, logo, children }: Props) {
  return (
    <Container>
        <Image src={logo} alt={company} width="50" height="50" className="float-left rounded-full mr-2"/>
        <div className="float-right mx-1">{dates}</div>
        <div className="text-lg">{title}</div>
        <div className="">{company} - {location}</div>
        <div className="ml-5 my-2">{children}</div>
    </Container>
  )
}