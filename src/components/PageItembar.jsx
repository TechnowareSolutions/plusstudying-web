export default function PageItembar ({children}){
    return <div>
        <div className="flex flex-row gap-2 bg-slate-200 p-4 rounded">
            {children}
        </div>
    </div>
} 