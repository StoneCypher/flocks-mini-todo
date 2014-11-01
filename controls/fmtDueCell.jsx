/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtDueCell = React.createClass({

  mixins       : [ window.flocksjs.member ],
  contextTypes : { index : React.PropTypes.number },


  render: function() {

    var due = this.fctx().todoList[this.context.index].due;

    return (
      <td className="duecell">{
        (typeof due === 'undefined') ?
          ''
        : new Date(due).toDateString()
      }</td>
    );

  }

});
