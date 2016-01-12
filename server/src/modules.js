export const express = require('express');
export const path = require('path');
export const favicon = require('serve-favicon');
export const logger = require('morgan');
export const cookieParser = require('cookie-parser');
export const bodyParser = require('body-parser');
export const compression = require('compression');
export const expressPhantom = require('express-phantom');
export const winston = require('winston');
export const request = require('supertest');
export const session = require('express-session');
export const passport = require('passport');
export const LocalStrategy = require('passport-local');
export const FileStore = require('session-file-store')(session);
export const sessionInfo = require('session-passport-info');
export const schema = require('./schema').default;
export const graph = require('express-graphql');
export const appConfig = require('./app.config');