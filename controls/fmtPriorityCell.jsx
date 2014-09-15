/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtPriorityCell = React.createClass({

  render: function() {

    return (
      <td>
        <a href="javascript:void(0)">&darr;</a>
        &#x2005;
        {(typeof this.props.priority === 'undefined')? 0 : this.props.priority}
        &#x2005;
        <a href="javascript:void(0)">&uarr;</a>
      </td>
    );

  }

});
