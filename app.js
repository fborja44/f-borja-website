/** Server Setup **/
const express = require('express');
// const session = require('express-session');
const app = express();

/* Directory + Routes */
const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');

const chalk = require('chalk'); // add colors to output for easier reading

/* Handlebars */
const exphbs = require('express-handlebars');

const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
      asJSON: (obj, spacing) => {
        if (typeof spacing === 'number')
          return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
  
        return new Handlebars.SafeString(JSON.stringify(obj));
      }
    }
});

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);

/** Start server on port 3000 and log message **/
app.listen(3000, () => {
    console.log(chalk.cyan("Francis Borja Portfolio Website"));
    console.log(chalk.cyan("Server is running on http://localhost:3000"));
    console.log(chalk.grey("=========================================="));
});