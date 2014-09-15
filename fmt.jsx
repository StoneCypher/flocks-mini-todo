/** @jsx React.DOM */

var FlocksMiniTodo = React.createClass({

    render: function() {
        return (<div>Hiya {this.props.name}</div>);
    }

});

var Updater = window.flocksjs.create( document.getElementById('bodyid'), FlocksMiniTodo );
Updater.set('name', 'John');
