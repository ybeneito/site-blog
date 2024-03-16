import type { Article } from "@/lib/interfaces"
import { client, urlFor } from "@/lib/sanity"
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == "${slug}"
    ]
  {
    title, "currentSlug": slug.current,titleImage, content
  }[0]`

  const data = await client.fetch(query)
  return data
}


export default async function Article({params} : {params:{slug: string}}) {
    const data: Article = await getData(params.slug)
    return (
        <div className="my-40 flex flex-col items-center">
            <h1 className="mt-2 text-3xl text-center leading-8 font-bold">{data.title}</h1>
            <Image 
                src={urlFor(data.titleImage).url()}  
                width={800} height={800} 
                alt={data.title}
                priority
                className="rounded-lg mt-8 border" />
            <div className="mt-6 prose prose-lg prose-headings:underline dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}