export default function InputSelect({children, label, id, name, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="capitalize">{label}</label>
            <select id={id} name={name} {...props} className="rounded py-3 px-4 outline-none ring-1 ring-slate-300 focus:ring-1 focus:ring-slate -600">
                {children}
            </select>
        </div>
    )
}