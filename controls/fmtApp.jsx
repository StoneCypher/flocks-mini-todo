/** @jsx React.DOM */

var fmtApp = React.createClass({



  makeRows: function(InData) {

    var Rows = [];

    InData.map(function(Item) {

      Rows.push(
        <tr>
          <td>{Item.item}</td>
          <td>{Item.priority}</td>
          <td>{new Date(Item.due).toString()}</td>
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
          <th>Item</th>
          <th>Priority</th>
          <th>Due date</th>
        </tr>

        {SortedRows}

      </tbody></table>
    );
  }

});
