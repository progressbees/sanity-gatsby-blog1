export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5a9c1c2380116e6ddbf7bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog1-studio-fb1ob8f7',
                  apiId: '4f4c0f8a-d3df-4470-83a9-bb1cd1a366da'
                },
                {
                  buildHookId: '5d5a9c1c0b6e5a9005bfab24',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog1-web',
                  apiId: '1e779ad7-5250-49ce-9aca-1ba8fd59563a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/progressbees/sanity-gatsby-blog1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog1-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
