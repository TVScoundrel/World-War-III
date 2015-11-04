exposedRts = FlowRouter.group({});
restrictedRts = FlowRouter.group({
  triggersEnter: [function (context, redirect) {
    if (!Meteor.loggingIn() && !Meteor.user()) {
      Session.set('redirectAfterLogin', FlowRouter.current().path);
      FlowRouter.go('login');
    }
  }]
});

exposedRts.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Home' });
  }
});

exposedRts.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Login' });
  }
});

restrictedRts.route('/base', {
  name: 'base',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Base' });
  }
});

restrictedRts.route('/playMap', {
  name: 'playMap',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'PlayMap' });
  }
});

exposedRts.route('/dashboard', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Dashboard' });
  }
});

exposedRts.route('/typography', {
  name: 'typography',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Typography' });
  }
});

exposedRts.route('/icons', {
  name: 'icons',
  action: function() {
    BlazeLayout.render('AppLayout', { content: 'Icons' });
  }
});

exposedRts.route('/buttons', {
  name: 'buttons',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Buttons' });
  }
});

exposedRts.route('/flot', {
  name: 'flot',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Flot' });
  }
});

exposedRts.route('/forms', {
  name: 'forms',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Forms' });
  }
});

exposedRts.route('/grid', {
  name: 'grid',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Grid' });
  }
});

exposedRts.route('/morris', {
  name: 'morris',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Morris' });
  }
});

exposedRts.route('/notifications', {
  name: 'notifications',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Notifications' });
  }
});

exposedRts.route('/panels-wells', {
  name: 'panelsWells',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'PanelsWells' });
  }
});

exposedRts.route('/tables', {
  name: 'tables',
  action: function () {
    BlazeLayout.render('AppLayout', { content: 'Tables' });
  }
});
