type Props = {
    children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="my-5 p-2 bg-slate-200 rounded-lg">
        {children}
    </div>
  )
}