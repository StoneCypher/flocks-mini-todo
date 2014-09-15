/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtDueCell = React.createClass({

  render: function() {

    var Now       = new Date().getTime();
    var IfOverdue = (this.props.due < Now)? 'overdue' : undefined;

    return (
      <td className={IfOverdue}>
        {
          (typeof this.props.due === 'undefined') ?
            ''
          : new Date(this.props.due).toDateString()
        }
      </td>
    );

  }

});
