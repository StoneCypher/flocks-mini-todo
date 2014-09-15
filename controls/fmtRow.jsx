/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtRow = React.createClass({

  render: function() {

    return (

      <tr className={this.props.overdueClass}>
        <fmtClearCell />
        <td className="itemCell">{this.props.item}</td>
        <fmtPriorityCell priority={this.props.priority} />
        <fmtDueCell due={this.props.due} />
      </tr>

    );
  }

});
