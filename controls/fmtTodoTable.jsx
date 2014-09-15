/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTodoTable = React.createClass({

  mixins: [ window.flocksjs.member ],



  makeRows: function(InData) {

    var Rows = [];
    var Now  = new Date().getTime();

    InData.map(function(Item, Idx) {

      Rows.push(
        <fmtRow index={Idx} done={Item.done} overdue={Item.due < Now} item={Item.item} priority={Item.priority} due={Item.due} />
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
