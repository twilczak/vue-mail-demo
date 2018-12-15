import Vue from 'vue'
import Router from 'vue-router'
import Mailbox from './views/Mailbox';
import MessageComposer from './components/MessageComposer';
// import MessageReader from './views/MessageReader';

Vue.use(Router);

const compose = {
  path: 'compose',
  name: 'compose',
  component: MessageComposer,
};

const inbox = {
  path: '/inbox',
  name: 'inbox',
  component: Mailbox,
  children: [compose],
};

const outbox = {
  path: '/outbox',
  name: 'outbox',
  component: Mailbox,
  children: [compose]
};

const base = {
  path: '/',
  redirect: '/inbox',
};

const routes = [ base, inbox, outbox ];

export default new Router({mode: 'history', base: process.env.BASE_URL, routes,})
