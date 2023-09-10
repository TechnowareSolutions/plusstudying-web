export default function PageSection ({children}){
    return <section className="flex flex-col gap-3 p-5 h-screen w-full overflow-y-scroll">{children}</section>
}