import Link from "next/link";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return <div className=" p-3">

        {children}
        <div className="text-cyan-800   text-xl mt-2 p-4 ml-6   ">
            <ul>
                <li className="hover:underline"> <Link href="/home/home1">Link1</Link></li>
                <li className="hover:underline"> <Link href="/home/home2">Link2</Link></li>
            </ul>
        </div>
    </div>
}
export default Layout;







