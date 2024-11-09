type Props = {
    title: string,
}

export default function Section({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <div>
        <h2 className="text-xl">{title}</h2>
        {children}
    </div>
  )
}