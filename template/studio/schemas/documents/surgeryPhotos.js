export default {
    name: 'surgeryPhotos',
    type: 'document',
    title: 'Фотографии до/после',
    fields: [
      {
        name: 'photo',
        type: 'figure',
        title: 'Фотография'
      },
      {
        name: 'categories',
        title: 'Вид операции',
        type: 'array',
        of: [{type: 'reference', to: {type: 'surgeryCategory'}}]
      },
    ]
  }
  