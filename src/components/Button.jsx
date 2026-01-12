export default function Button({children, ...props}){
  return(
    <button {...props} className="px-4 py-2 font-semibold uppercase bg-amber-400 text-stone-900 rounded hover:bg-amber-500">{children}</button>
  )
}