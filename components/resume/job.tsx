type Props = {
    dates: string,
    title: string,
    company: string,
    location: string,
    children: React.ReactNode
}

export default function Job({ dates, title, company, location, children }: Props) {
  return (
    <div>
        <div className="">{dates}</div>
        <div className="">{title}</div>
        <div className="">{company} - {location}</div>
        {children}
    </div>
  )
}