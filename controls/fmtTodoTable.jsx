/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTodoTable = React.createClass({

  mixins: [ window.flocksjs.member ],



  makeRows: function(InData) {

    var Rows = [],
        Now  = new Date().getTime(),
        sdon = this.props.showdone || false,
        sdel = this.props.showdeleted || false;

    InData.map(function(Item, Idx) {

      if ((sdon || !Item.done) && (sdel || !Item.deleted)) {
        Rows.push(
          <fmtRow index={Idx} done={Item.done} deleted={Item.deleted} overdue={Item.due < Now} item={Item.item} priority={Item.priority} due={Item.due} />
        );
      }

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
