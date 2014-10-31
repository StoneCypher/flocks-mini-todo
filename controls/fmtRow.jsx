/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtRow = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var index     = this.props.index,
        done      = this.fctx().todoList[index].done    || false,
        due       = this.fctx().todoList[index].due     || undefined,
        deleted   = this.fctx().todoList[index].deleted || false,
        overdue   = due? (due < (new Date().getTime())) : false,
        className = (done? 'done ' : '') + (deleted? 'deleted ' : '') + (overdue? 'overdue' : '');

    return (

      <tr className={className}>
        <fmtClearCell index={this.props.index} />
        <fmtItemCell index={this.props.index} />
        <fmtPriorityCell index={this.props.index} />
        <fmtDueCell index={this.props.index} />
      </tr>

    );
  }

});
