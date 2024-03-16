import { Card, CardContent } from "@/components/ui/card";
import { ShortArticle } from "../../lib/interfaces";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function GetData() {
    const query = `
    *[_type == "blog"] | order(_createdAt desc) {
        title,description,"currentSlug": slug.current,titleImage
      }
    `;
    const data = await client.fetch(query);
    return data;
}



export default async function page() {
const data: ShortArticle[] = await GetData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-40 gap-5">
        {data.map((article: ShortArticle, idx) => (
            <Card key={idx}>
                <Image 
                    src={urlFor(article.titleImage).url()} 
                    alt={article.title} 
                    width={600} height={600}
                    className="rounded-t-lg h-[200px] object-cover"
                    />
                <CardContent className="mt-5">
                    <h2 className="text-xl line-clamp-2 font-bold">{article.title}</h2>
                    <p className="line-clamp-3 text-sm mt-3 text-gray-600 dark:text-gray-300">{article.description}</p>
                    <Button asChild className="w-full mt-7">
                        <Link href={`/blog/${article.currentSlug}`}>
                            Voir plus
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}