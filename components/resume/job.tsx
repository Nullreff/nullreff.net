import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image"
import Container from './container'

type Props = {
    dates: string,
    title: string,
    company: string,
    location: string,
    logo: StaticImageData,
}

export default function Job({ dates, title, company, location, logo, children }: React.PropsWithChildren<Props>) {
  return (
    <Container>
        <ExportedImage src={logo} alt={company} width="50" height="50" className="float-left rounded-full mr-2"/>
        <div className="float-right mx-1">{dates}</div>
        <div className="text-lg">{title}</div>
        <div className="">{company} - {location}</div>
        <div className="ml-5 my-2">{children}</div>
    </Container>
  )
}