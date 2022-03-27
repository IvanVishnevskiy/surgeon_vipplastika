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
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      }
    ]
  }
  