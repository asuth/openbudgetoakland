HomepageVizLinks = new orion.collection('homepage_viz_links', {
  singularname: 'homepage viz link',
  pluralName: 'homepage viz links',
  link: {
    title: 'Homepage Viz Links' 
  },
  tabular: {
    columns: [
      {
        data: 'title',
        title: 'Title'
      },
      {
        data: 'desc',
        title: 'Description'
      },
      {
        data: 'order',
        title: 'Sort Order'
      }
    ],
    order: [
      [2, 'asc']
    ]
  }
})

HomepageVizLinks.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Link Title'
  },
  desc: {
    type: String,
    label: 'Link Description'
  },
  img: orion.attribute('image', {
    label: 'Link Thumbnail',
    optional: true
  }),
  order: {
    type: Number,
    label: 'Sort Order'
  }
}));