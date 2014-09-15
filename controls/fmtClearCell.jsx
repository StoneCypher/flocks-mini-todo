/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtClearCell = React.createClass({

  render: function() {

    return (
      <td className="clearCell">
        <a className="remove" href="javascript:void(0)">&#x2717;</a>
        <a className="complete" href="javascript:void(0)">&#x2713;</a>
        <a className="complete" href="javascript:void(0)">&#x270e;</a>
      </td>
    );

  }

});
