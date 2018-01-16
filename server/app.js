const express = require("express");
const app = express();

//isomorphic-fetch and es-6 promise
require("es6-promise").polyfill();
require("isomorphic-fetch");
const models = require("./models");
const Board = models.Board;

// ----------------------------------------
// App Variables
// ----------------------------------------
app.locals.appName = "My App";

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// needed in order to receive data from fetch
app.use(bodyParser.json());

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "secret"]
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header("Referer") || "/";
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

// ----------------------------------------
// Template Engine
// ----------------------------------------
const expressHandlebars = require("express-handlebars");
const helpers = require("./helpers");

const hbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: "views/",
  defaultLayout: "application"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ----------------------------------------
// Routes
// ----------------------------------------

// ----    GETTING BOARDS   ------- //

app.get("/api/boards", async (req, res, next) => {
  try {
    let boards = await Board.findAll();
    res.json(boards);
  } catch (e) {
    console.log("ERROR => ", e);
  }
});

// ----    CREATE BOARD   ------- //

app.post("/api/boards", async (req, res, next) => {
  await Board.create(req.body);
  let boards = await Board.findAll();
  res.json(boards);
});

// ----    DELETE BOARD   ------- //

app.delete("/api/boards/:id", async (req, res, next) => {
  try {
    await Board.destroy({
      where: { id: req.params.id },
      limit: 1
    });
    let boards = await Board.findAll();
    res.json(boards);
  } catch (e) {
    console.log("ERROR => ", e);
  }
});

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 3001;
const host = "localhost";

let args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }

  console.log("ERROR => ", err);
  res.status(500).render("errors/500", { error: err });
});

module.exports = app;
