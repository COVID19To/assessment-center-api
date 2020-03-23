const { airTableBase, messagesTable } = require('../constants')

const informationRouter = function (context, event, callback) {
  const message = 'For COVID-19 News Update Text 1. \r For COVID-19 Triage Text 2. \r For COVID-19 Self-isolation Text 3. \r For COVID-19 Prevention Tips Text 4. \r For Exit Text 5.'

  // Current PRod
  // [
  //   {
  //     say: 'For COVID-19 News Update Text 1. \r For COVID-19 Triage Text 2. \r For COVID-19 Self-isolation Text 3. \r For COVID-19 Prevention Tips Text 4. \r For Exit Text 5.'
  //   },
  //   {
  //     listen: {
  //       voice_digits: {
  //         redirects: {
  //           1: 'task://newsupdate',
  //           2: 'task://questions',
  //           3: 'task://self-isolation',
  //           4: 'task://safety-tips',
  //           5: 'task://goodbye'
  //         },
  //         finish_on_key: '#',
  //         num_digits: 1
  //       }
  //     }
  //   }
  // ]

  const responseObject = {
    actions: [
      {
        say: message
      },
      {
        listen: {
          voice_digits: {
            redirects: {
              0: 'task://LanguageSelection',
              1: 'task://newsupdate',
              2: 'task://questions',
              3: 'task://self-isolation',
              4: 'task://safety-tips',
              5: 'task://goodbye'
            },
            finish_on_key: '#',
            num_digits: 1
          }
        }
      }
    ]
  }
  callback(null, responseObject)
}

exports.handler = informationRouter
