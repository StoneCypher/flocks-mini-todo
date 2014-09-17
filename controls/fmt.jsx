/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {
    return (<fmtApp data={this.props.data} config={this.props.config} />);
  }

});

var Handler      = function(X) { return true; }
var Updater      = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodoHost, Handler );
var InitialState = {updater: Updater, data: TempData, config: {showdeleted: false, showdone: true} };

Updater.set(InitialState);  // from tempdata.js
