import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", href='#', ...props }) {
    const styles = {
        primary: "flex items-center justify-center gap-2 text-white bg-blue-400 py-2 px-4 rounded hover:bg-blue-500 duration-150",
        success: "flex items-center justify-center gap-2 text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600 duration-150",
        secondary: "flex items-center justify-center gap-2 text-white bg-slate-400 py-2 px-4 rounded hover:bg-slate-500 duration-150",
        primaryCapitalized: "flex items-center justify-center gap-2 text-white bg-blue-400 capitalize py-2 px-4 rounded hover:bg-blue-500 duration-150",
        danger: "flex items-center justify-center gap-2 text-white bg-red-400 py-2 px-4 rounded hover:bg-red-500 duration-150",
    }

    const classVariant = styles[variant]

    return (
        <>
            {
                type === "link" ?
                    <Link href={href} {...props} className={classVariant}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={classVariant}>
                        {children}
                    </button>
            }
        </>
    )
}