export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: "Titre d'un article"
        },
        {
            name: 'slug',
            type: 'slug',
            title: "Slug d'un article",
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: "Image d'un article"
        },
        {
            name: 'description',
            type: 'text',
            title: "Description d'un article"
        },
        {
            name: 'content',
            type: 'array',
            title: "Content d'un article",
            of: [{type: 'block'}]
        }
    ,]
}