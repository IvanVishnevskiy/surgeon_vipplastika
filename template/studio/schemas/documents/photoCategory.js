export default {
    name: 'photoCategory',
    type: 'document',
    title: 'Photo Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'background',
        type: 'figure',
        title: 'background'
      },
      // TODO: link should only contain name, possibly take title instead
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      },
      {
        name: 'title_en',
        type: 'string',
        title: 'Title (en)'
      },
      {
        name: 'desc_en',
        type: 'string',
        title: 'Description (en)'
      },
    ]
  }
  