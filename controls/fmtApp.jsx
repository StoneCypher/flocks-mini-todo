/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtApp = React.createClass({

  mixins: [ window.flocksjs.member ],



  todoPriorityPredicate: function(Left, Right) {

    // undefComp is a sort predicate that does nice things around undefined
    // kept in compare.js to keep visual complexity down

    var pri = undefDescComp(Left.priority, Right.priority); if (pri !== 0) { return pri; }
    var due = undefComp(    Left.due,      Right.due);      if (due !== 0) { return due; }

    return undefComp(Left.item, Right.item);

  },



  todoPriorityPredicateOverdueWins: function(Left, Right) {

    // undefComp is a sort predicate that does nice things around undefined
    // kept in compare.js to keep visual complexity down

    var pri = undefDescComp(Left.priority, Right.priority); if (pri !== 0) { return pri; }
    var due = undefComp(    Left.due,      Right.due);      if (due !== 0) { return due; }

    return undefComp(Left.item, Right.item);

  },



  sortRows: function(OldRows) {

    var Rows = OldRows;
    Rows.sort(this.props.overdueWins? this.todoPriorityPredicateOverdueWins : this.todoPriorityPredicate);

    return Rows;

  },



  render: function() {

    var SortedRows = this.sortRows(this.props.data.todoList);

    return (
      <div id="main">
        <fmtTopBar />
        <fmtTodoTable rowdata={SortedRows} />
      </div>
    );

  }

});
