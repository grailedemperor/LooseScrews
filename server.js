if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path');
const express = require('express');
const flash = require('express-flash')
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const methodOverride = require('method-override')


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const initializePassport = require('./config/pass-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('view-engine', 'ejs');
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
