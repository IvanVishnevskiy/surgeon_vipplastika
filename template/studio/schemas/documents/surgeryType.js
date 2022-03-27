export default {
    name: 'surgeryType',
    type: 'document',
    title: 'Surgery Type',
    fields: [
      {
        name: 'title',
        type: 'text',
        title: 'Title'
      },
      {
        name: 'riveAnimation',
        type: 'file',
        title: 'Rive animation'
      },
      {
        name: 'riveAnimationPage',
        type: 'file',
        title: 'Rive animation for Page'
      },
      {
        name: 'Icon',
        type: 'figure',
        title: 'Image if there\'s no Rive animation'
      },
      {
        name: 'desc',
        type: 'simplePortableText',
        title: 'Short description'
      },
      {
        name: 'pageDesc',
        type: 'simplePortableText',
        title: 'Description displayed on the page'
      },
      {
        name: 'fullDesc',
        type: 'simplePortableText',
        title: 'Full description'
      },
      {
        name: 'link',
        type: 'text',
        title: 'Link path'
      }
    ]
  }
  