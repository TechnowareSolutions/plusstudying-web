export default function Card({ children, title }) {
  return <div className="flex flex-row gap-2 justify-between bg-slate-200 hover:shadow-md hover:scale-[1.01] duration-150 p-4 rounded">
            <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{title}</p>
                <div className='grid grid-cols-3 gap-5'>
                    {children}
                </div>
            </div>
        </div>
}