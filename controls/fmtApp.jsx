/** @jsx React.DOM */

var fmtApp = React.createClass({

    render: function() {
        var Rows = [];
        this.props.data.todoList.map(function(Item) {
            Rows.push(<div>{Item.item}</div>);
        });
        return (<div>{Rows}</div>);
    }

});
