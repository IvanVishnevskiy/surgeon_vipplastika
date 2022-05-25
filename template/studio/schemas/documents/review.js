const starsWarning = 'Stars could be of values 4, 4.5 and 5'

export default {
    name: 'review',
    type: 'document',
    title: 'Client Review',
    fields: [
      {
        name: 'name',
        type: 'text',
        title: 'Client Name'
      },
      {
        name: 'name_en',
        type: 'text',
        title: 'Client Name (en)'
      },
      {
        name: 'reviewMessages',
        title: 'Review Messages',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'reviewMessages_en',
        title: 'Review Messages (en)',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'reviewStars',
        title: 'Stars',
        type: 'number',
        validation: Rule => [ 
          Rule.custom(num => {
            if(num === 4 || num === 4.5 || num === 5) return true
            return starsWarning
          })
        ]
      }
    ]
  }
  