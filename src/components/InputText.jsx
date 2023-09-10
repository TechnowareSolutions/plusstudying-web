export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="capitalize">{label}</label>
            <input type="text" id={id} {...props} className="rounded py-3 px-4 outline-none ring-1 ring-slate-300 focus:ring-1 focus:ring-slate -600 " />
        </div>
    )
}