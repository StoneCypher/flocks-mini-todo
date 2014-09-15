/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {
    return (<fmtApp data={this.props.data} />);
  }

});

var Updater = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodoHost );
Updater.set({updateFunc: Updater.set, data: TempData});  // from tempdata.js
