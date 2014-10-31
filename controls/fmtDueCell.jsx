/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtDueCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var due = this.fctx().todoList[this.props.index].due;

    return (
      <td className="duecell">{
        (typeof due === 'undefined') ?
          ''
        : new Date(due).toDateString()
      }</td>
    );

  }

});
