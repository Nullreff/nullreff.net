type Props = {
    title: string,
    children: React.ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
  )
}