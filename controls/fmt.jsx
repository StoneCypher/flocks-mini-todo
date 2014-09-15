/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

    render: function() {

        return (<div>Hiya {this.props.name}</div>);
    }

});

var Updater = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodoHost );
Updater.set('name', 'John');
Updater.set('data', TempData);  // from tempdata.js
