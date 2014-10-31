/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtItemCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var itemText = this.fctx().todoList[this.props.index].item;

    return (
      <td className="itemCell">
        <a href="javascript:void(0)">{itemText}</a>
      </td>
    );

  }

});
