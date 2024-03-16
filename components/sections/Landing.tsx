import Career from "./Career";
import Projects from "./Projects";

export default function Landing() {
    return (
        <div>
        <section className="my-40">
        <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-start font-sans font-bold">
        Je suis <span className="text-primary">Yohan Beneito</span> Concepteur Développeur de vos idées. 
        </h1>
        <p className="animate-slidein [--slidein-delay:500ms] opacity-0 mt-20 text-neutral-500 my-2 text-lg text-start">
          Développeur <span className="text-primary text-lg">fullstack</span> de formation, donc autant à l'aise en front qu'en back, j'ai pu aussi mettre en place et utiliser des <span className="text-primary text-lg">CI/CD</span>. 
        </p>
        <p className="animate-slidein [--slidein-delay:600ms] opacity-0 mt-10 text-neutral-500 my-2 text-start">
          Ici vous pourrez trouver des informations à propos de moi, mais aussi quelques articles de <span className="text-primary text-lg">blog concernants le développement web</span>.
        </p>
        </section>
        <hr/>
        <section className="animate-slidein [--slidein-delay:700ms] opacity-0 my-40">
          <Career />
        </section>
        <hr />
        <section className="animate-slidein [--slidein-delay:700ms] opacity-0 my-40">
          <Projects />
        </section>
        </div>
    )
}