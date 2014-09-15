/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtApp = React.createClass({



  makeRows: function(InData) {

    var Rows = [];
    var Now  = new Date().getTime();

    InData.map(function(Item) {

      var IfOverdue = (Item.due < Now)? 'overdue' : undefined;

      Rows.push(
        <tr className={IfOverdue}>
          <fmtClearCell />
          <td>{Item.item}</td>
          <td><a href="javascript:void(0)">&darr;</a> {(typeof Item.priority === 'undefined')? 0 : Item.priority} <a href="javascript:void(0)">&uarr;</a></td>
          <fmtDueCell due={Item.due} />
        </tr>
      );

    });

    return Rows;

  },




  undefComp: function(X,Y) {

    return (X === undefined)? (
      ( (Y === undefined)?  0 : 1       )
    ) : (
      ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? -1 : 1)) )
    );

  },



  undefDescComp: function(X,Y) {

    return (X === undefined)? (
      ( (Y === undefined)?  0 : 1       )
    ) : (
      ( (Y === undefined)? -1 : ((X === Y)? 0 : ((X < Y)? 1 : -1)) )
    );

  },



  todoPriorityPredicate: function(Left, Right) {

    var pri = this.undefDescComp(Left.priority, Right.priority); if (pri !== 0) { return pri; }
    var due = this.undefComp(    Left.due,      Right.due);      if (due !== 0) { return due; }

    return this.undefComp(Left.item, Right.item);

  },



  sortRows: function(OldRows) {

    var Rows = OldRows;
    Rows.sort(this.todoPriorityPredicate);

    return Rows;

  },



  render: function() {

    var SortedRows = this.makeRows(this.sortRows(this.props.data.todoList));

    return (
      <table><tbody>

        <tr>
          <th></th>
          <th>Item</th>
          <th>Priority</th>
          <th>Due date</th>
        </tr>

        {SortedRows}

      </tbody></table>
    );
  }

});
