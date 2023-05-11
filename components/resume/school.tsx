type Props = {
    dates: string,
    title: string,
    location: string,
    children: React.ReactNode
}

export default function School({ dates, title, location, children }: Props) {
  return (
    <div>
      <div className="">{dates}</div>
      <div className="">{title} - {location}</div>
      {children}
    </div>
  )
}