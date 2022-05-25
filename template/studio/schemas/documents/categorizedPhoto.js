export default {
    name: 'categorizedPhotos',
    type: 'document',
    title: 'Photos',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'photo',
        type: 'figure',
        title: 'Фотография'
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'photoCategory'}}]
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
  