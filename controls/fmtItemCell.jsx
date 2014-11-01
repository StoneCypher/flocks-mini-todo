/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtItemCell = React.createClass({

  mixins       : [ window.flocksjs.member ],
  contextTypes : { index : React.PropTypes.number },

  render: function() {

    var itemText = this.fctx().todoList[this.context.index].item;

    return (
      <td className="itemCell">
        <a href="javascript:void(0)">{itemText}</a>
      </td>
    );

  }

});
