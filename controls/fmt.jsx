/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

    render: function() {
        return (<fmtApp data={this.props.data} />);
    }

});

var Updater = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodoHost );
Updater.set('data', TempData);  // from tempdata.js
