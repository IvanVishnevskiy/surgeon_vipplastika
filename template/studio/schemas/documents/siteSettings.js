export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок сайта'
    },
    {
      name: 'surgeonName',
      type: 'string',
      title: 'Имя'
    },
    {
      name: 'logo',
      type: 'figure',
      title: 'Логотип'
    },
    {
      name: 'instagramIcon',
      type: 'figure',
      title: 'Иконка инсты'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Описание для SEO'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Ключевые слова для SEO',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'title_en',
      type: 'string',
      title: 'Заголовок сайта (en)'
    },
    {
      name: 'surgeonName_en',
      type: 'string',
      title: 'Имя (en)'
    },
    {
      name: 'description_en',
      type: 'text',
      title: 'Description (en)',
      description: 'Описание для SEO (en)'
    },
    {
      name: 'keywords_en',
      type: 'array',
      title: 'Keywords (en)',
      description: 'Ключевые слова для SEO (en)',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
  
}
