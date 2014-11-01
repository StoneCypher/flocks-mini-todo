/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {
    return (<fmtApp />);
  }

});

var Target       = document.getElementById('bodyid'),
    Handle       = function(C,P) { return true; },
    Finalize     = function(C,P) { return true; },
    AppConfig    = { target: Target, control: FlocksMiniTodoHost, before: Handle, after: Finalize },
    Updater      = window.flocksjs.create(AppConfig);

var InitialState = {
    flocks_updater: Updater,
    data: TempData,
    flocks_context: TempData,
    showdeleted: false,
    showdone: true
};

Updater.set(InitialState);  // from tempdata.js
