import Link from "next/link";
export default function NavbarItem({children, href = '#'}){
    return <Link href={href} className="px-6 flex flex-row gap-2 items-center py-4 w-11/12 hover:bg-slate-300 rounded-e-full duration-75">{children}</Link>
}