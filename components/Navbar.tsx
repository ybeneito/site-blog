import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useRouter } from "next/router";

export default function Navbar() {
    
    return (
        <nav className="w-full fixed top-0 flex items-center justify-between px-4 py-5 z-10 bg-background dark:bg-[#1C1B22]">
            <Link href={"/"} className="font-bold text-3xl text-primary active:border-b-2">
                YohanB
            </Link>
            <Link href={"/blog"} className="font-bold text-3xl active:border-b-2">
                Mon blog
            </Link>
            <Link href={"/cv"} className="font-bold text-3xl active:border-b-2">
                Mon Cv
            </Link>
            <ModeToggle />
        </nav>
    )
}