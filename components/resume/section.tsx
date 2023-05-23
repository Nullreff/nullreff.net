type Props = {
    title: string,
    children: React.ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <div>
        <h2 className="text-xl">{title}</h2>
        {children}
    </div>
  )
}