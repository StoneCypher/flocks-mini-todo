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
          <fmtPriorityCell priority={Item.priority} />
          <fmtDueCell due={Item.due} />
        </tr>
      );

    });

    return Rows;

  },





  todoPriorityPredicate: function(Left, Right) {

    // undefComp is a sort predicate that does nice things around undefined
    // kept in compare.js to keep visual complexity down

    var pri = undefDescComp(Left.priority, Right.priority); if (pri !== 0) { return pri; }
    var due = undefComp(    Left.due,      Right.due);      if (due !== 0) { return due; }

    return undefComp(Left.item, Right.item);

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
          <th>Prio.</th>
          <th>Due date</th>
        </tr>

        {SortedRows}

      </tbody></table>
    );
  }

});
