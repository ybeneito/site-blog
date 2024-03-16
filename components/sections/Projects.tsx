import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ProjectList } from "@/data/Datas";
import { Project } from "@/lib/interfaces";

export default function Projects() {
    const data = ProjectList;
    return (
        <div>
            <h1 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
                Mes <span className="text-primary">projets</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-40 gap-5">
                {data.map((project: Project, idx) => (
                    <Card key={idx}>
                        <CardContent className="mt-5">
                            <Image
                                src={`/imgs/${project.img}.png`}
                                width={800} height={800}
                                priority
                                alt="image projet"
                                className="rounded-lg mt-8 border" />
                            <h2 className="text-xl line-clamp-2 font-bold mt-5">{project.title}</h2>
                            <div className="mt-5">
                            {project.techs ? ( project.techs.map((tech, idx) => (
                                <i className={`${tech} text-2xl text-primary `} key={idx}></i>))
                            ) : (<></>)}
                            </div>

                            <p className="text-sm mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>
                            {project.link ? (
                                       <Button asChild className="w-full mt-7">
                                       <Link target="_blank" href={`${project.link}`} >
                                           S'y rendre
                                       </Link>
                                   </Button>
                            ) : (<></>)}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}