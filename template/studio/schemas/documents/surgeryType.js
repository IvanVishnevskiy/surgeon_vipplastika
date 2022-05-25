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
        name: 'desc_en',
        type: 'simplePortableText',
        title: 'Short description (en)'
      },
      {
        name: 'pageDesc_en',
        type: 'simplePortableText',
        title: 'Description displayed on the page (en)'
      },
      {
        name: 'fullDesc_en',
        type: 'simplePortableText',
        title: 'Full description (en)'
      },
      {
        name: 'link',
        type: 'text',
        title: 'Link path'
      }
    ]
  }
  