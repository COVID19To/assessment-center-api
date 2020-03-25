### Made for the COVID19 Chat bot

### How to add a new Function
1. Create a .js file in /twillioFunctions
2. Ensure the function exports using exports.handler
```
const nearestCenter = async (context, event, callback) => {
}

exports.handler = nearestCenter

```
3. To test locally, add the as a route to express 
4. See the example below 

```router.post('/nearestHospital', async (req, res) => {
  const postalCode = req.body.postalCode
  // Pushing into Twilio format
  const mem = JSON.stringify({
    twilio: {
      collected_data: {
        ask_questions: {
          answers: {
            PostalCode: {
              answer: postalCode
            }
          }
        }
      }
    }
  })

  const event = {
    Memory: mem
  }
  const callback = (err, respond) => {
    if (err) res.send(err)
    res.send(respond)
  }
  const { handler } = require('./twilioFunctions/nearestHospital')
  handler(null, event, callback)
})

I am using .post to send a postalCode as a JSON 
```
Then run `npm run start`

5. Add a new rollup.config.js object
```
{
    input: 'twilioFunctions/${Name}.js',
    output: {
      file: 'functions/${Name}.js',
      format: 'cjs'
    },
    plugins: [resolve()]
  },
```
`Remember to add this in the existing array`

6. Now, just do npm run deploy, this will create a new function in /functions folder and upload it to twilio
7. Twilio takes packages, from dependencies under package.json
8

### Update CovidBot 
1. Make changes to COVID19BOT1.json -> this is the dev bot
2. use `npm run update:ta` to push those changes to twilio
https://github.com/twilio/autopilot-templates

### twilio SID and Auth Token
if twilio asks you for id and password, go to https://www.twilio.com/console/project/settings 
Account SID and Auth Token are here 

### .env
make sure ur .env looks like this
AIRTABLE=AIRTABLE_KEY

OCD_API_KEY=Opencage key

CRON_PASS=any random letter, this will unlock airtable 
with lat,lng

ACCOUNT_SID=twilio SID 

AUTH_TOKEN=twilio Auth Token

MYSQL_USERNAME=

MYSQL_PASS=

MYSQL_DATABASE=

MYSQL_HOST=

MYSQL_PORT=

### DB migrate
install this https://github.com/sequelize/cli#installation
use .env to set ur admin username and password for mysql
run `npx sequelize db:migrate`

run `npx sequelize db:seed:all`

run `npx sequelize-cli model:generate --name HospitalDetails --attributes HospitalName:string,StreetAddress:string,City:string,Province:string,PostalCode:string,PhoneNumber:string,PID:string,lat:float,lng:float`


 run `npx sequelize db:migrate`
