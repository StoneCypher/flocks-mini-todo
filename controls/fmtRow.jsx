/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtRow = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (

      <tr className={(this.props.done? 'done ' : '') + (this.props.deleted? 'deleted ' : '') + (this.props.overdue? 'overdue' : '')}>
        <fmtClearCell index={this.props.index} done={this.props.done} deleted={this.props.deleted} />
        <fmtItemCell item={this.props.item} />
        <fmtPriorityCell index={this.props.index} priority={this.props.priority} />
        <fmtDueCell index={this.props.index} due={this.props.due} />
      </tr>

    );
  }

});
