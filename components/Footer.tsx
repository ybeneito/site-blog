import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full justify-around flex my-5">
            <p className="">2024 Beneito Yohan</p>
            <Link href="https://www.linkedin.com/in/yohan-beneito-953707200/" target="_blank" rel="noreferrer">
                <p>LinkedIn:<i className="devicon-linkedin-plain"></i></p>
            </Link>
            <Link href="https://github.com/ybeneito" target="_blank" rel="noreferrer">
                <p>Github <i className="devicon-github-original"></i></p>
            </Link>
        </div>
    )
}