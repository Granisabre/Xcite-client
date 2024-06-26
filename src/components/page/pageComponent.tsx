export type TProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Page = ({ title, children, className }: TProps) => {
    return <div className={`p-4 min-h-full ${className}`} >
        <div className="flex" >
            <a href="/" >Back</a>
            <h1 className="w-full text-center text-4xl m-4">{title}</h1>
        </div>
        {children}
    </div>
}