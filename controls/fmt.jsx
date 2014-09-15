/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {
    return (<fmtApp data={this.props.data} config={this.props.config} />);
  }

});

var Updater = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodoHost );
Updater.set({updater: Updater, data: TempData, config: {showdeleted: false, showdone: true} });  // from tempdata.js
