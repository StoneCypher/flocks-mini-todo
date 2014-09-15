/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTodoTable = React.createClass({



  makeRows: function(InData) {

    var Rows = [];
    var Now  = new Date().getTime();

    InData.map(function(Item) {

      var IfOverdue = (Item.due < Now)? 'overdue' : undefined;

      Rows.push(
        <fmtRow overdueClass={IfOverdue} item={Item.item} priority={Item.priority} due={Item.due} />
      );

    });

    return Rows;

  },



  render: function() {

    return (
      <table><tbody>
        <fmtHeaderRow />
        { this.makeRows(this.props.rowdata) }
      </tbody></table>
    );

  }

});
