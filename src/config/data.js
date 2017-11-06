function data() {
  return {
    sites: [
      {
        "name": 'Lexicon',
        "notification": 0,
        "color": "#5521a8"
      },
      {
        "name": 'JIRA',
        "notification": 2,
        "color": "#456bb7"
      },
      {
        "name": 'RAAS',
        "notification": 2,
        "color": "#FF850A"
      },
      {
        "name": 'Modcat',
        "notification": 2,
        "color": "#518234"
      },
      {
        "name": 'Instrument Library',
        "notification": 2,
        "color": "#275a7c"
      },
      {
        "name": 'Background Catalog',
        "notification": 2,
        "color": "#7c272c"
      },
      {
        "name": 'DISC',
        "notification": 2,
        "color": "#FF850A"
      }
    ],
    cards : [
      {
          id:'FASDE2341321SD123DFG',
          date: {
                  month: 'Dec',
                  day: '27',
                  year: '2017'
              },
          title: {
                  priority: 2,
                  content: 'High Prority'
              },
          content: {
                  description: 'The planned exercise will occur on a date and the DMAMC is expected to support. Contact...',
                  link: 'card'
              }
      },
      {
          id:'SDA123FAK414128237D23',
          date: {
                  month: 'Jan',
                  day: '24',
                  year: '2018'
              },
          title: {
                  priority: 1,
                  content: 'High Prority'
              },
          content: {
                  description: 'The planned exercise will occur on a date and the DMAMC is expected to support. Contact...',
                  link: 'card'
              }
      }
    ],



  }
}

export default data();