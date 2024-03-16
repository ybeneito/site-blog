import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 flex items-center justify-between px-4 py-5 z-10 bg-background">
            <Link href={"/"} className="font-bold text-3xl text-primary">
                YohanB
            </Link>
            <Link href={"/blog"} className="font-bold text-3xl">
                Mon blog
            </Link>
            <ModeToggle />
        </nav>
    )
}