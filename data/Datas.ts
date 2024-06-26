import { Project } from "@/lib/interfaces"

export const ProjectList: Project[] = [
    {
        title: "GenerAItor",
        description: "Un générateur de composant/page HTML avec Typescript, Nodejs, Express et OPENAI. Ce projet est un projet personnel pour m'entraîner à utiliser ces technologies.",
        img: "generAItor",
        techs: ["devicon-typescript-plain", "devicon-nodejs-plain", "devicon-express-original"],
        link: "https://generaitor.vercel.app/"
    },
    {
        title: "Pastèques-Game",
        description: "Largement inspiré du jeu suika game, développé en JS, seul sur mon temps libre et aidé pour les dessins.",
        img: "suika",
        techs: ["devicon-javascript-plain"],
        link: "https://pasteques-game.vercel.app/"
    },
    {
        title: "Adopte un BeWeber",
        description: "Suite applicative permetant la mise en relation entre des entreprises dans le domaine du développement et les apprenants du centre de formation Beweb dans le but de trouver leur stage de fin d'année. Développée en microservices C# .NET et Ts Angular, avec une BDD NOSQL, mise en place de CICD Jenkins. J'avais comme role celui de chef de projet avec 2 camarades et nous avions 15 apprenants développeurs sous nos ailes. Celle ci n'est plus en ligne",
        techs: ["devicon-dotnetcore-plain", "devicon-angular-plain", "devicon-jenkins-plain", "devicon-mongodb-plain", "devicon-rabbitmq-original"],
        img: "adopte"
    },
    {
        title: "Majelis",
        description: "Suite applicative à destination des professionnels de la tutelle. Développée en Java et Angular, avec une BDD Mysql, et des outils de scrapping en Nodejs réalisés par l'équipe de l'entreprise Majelis. Dans le cadre de mon apprentissage j'ai participé autant sur le back que sur le front de l'app. J'ai pu aussi mettre en place un CICD avec des tests en Cypress et le déploiement piloté par Jenkins.",
        techs: ["devicon-java-plain", "devicon-angular-plain", "devicon-jenkins-plain", "devicon-cypressio-plain", "devicon-mysql-original", "devicon-nodejs-line-wordmark"],
        img: "majelis",
    }, 
    {
        title: "L'auberge de l'Épine",
        description: "Site vitrine Wordpress pour une auberge/restaurant. ",
        img: "auberge",
        techs: ["devicon-wordpress-plain"],
        link: "https://laubergedelepine.fr/"
    }
]