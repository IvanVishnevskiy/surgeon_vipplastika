export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cc04d5199df1802277a6e91',
                  title: 'Sanity Studio',
                  name: '',
                  apiId: 'b3b7bb87-000f-42a3-9ed3-83358be97dde'
                },
                {
                  buildHookId: '5caf2962008b0b042f8df19a',
                  title: 'Portfolio Website',
                  name: '',
                  apiId: '7e740745-2e2e-4427-be81-aded75334337'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mariuslundgard/dev-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-skupqnos.netlify.com/',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {},
      layout: {width: 'medium'}
    }
  ]
}
