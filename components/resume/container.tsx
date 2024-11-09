export default function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="my-5 p-2 bg-slate-200 rounded-lg">
        {children}
    </div>
  )
}