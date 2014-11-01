/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTodoTable = React.createClass({

  mixins: [ window.flocksjs.member ],



  makeRows: function(InData) {

    var Rows = [],
        Now  = new Date().getTime(),
        sdon = this.fctx().showdone || false,    // whargarbl
        sdel = this.fctx().showdeleted || false;

    InData.map(function(Item, Idx) {

      if ((sdon || !Item.done) && (sdel || !Item.deleted)) {
        Rows.push( <fmtRow index={Idx} /> );
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
