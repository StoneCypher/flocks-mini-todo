/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtItemCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (
      <td className="itemCell">
        <a href="javascript:void(0)">{this.fctx().todoList[this.props.index].item}</a>
      </td>
    );

  }

});
