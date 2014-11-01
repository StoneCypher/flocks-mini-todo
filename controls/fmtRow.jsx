/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtRow = React.createClass({

  mixins: [ window.flocksjs.member ],

  contextTypes      : { index : React.PropTypes.number },
  childContextTypes : { index : React.PropTypes.number },

  getChildContext: function() {
    return { index: this.props.index };
  },

  render: function() {

    var index     = this.props.index,
        item      = this.fctx().todoList[index],

        done      = item.done    || false,
        due       = item.due     || undefined,
        deleted   = item.deleted || false,

        overdue   = due? (due < (new Date().getTime())) : false,

        className = (done? 'done ' : '') + (deleted? 'deleted ' : '') + (overdue? 'overdue' : '');

    return (

      <tr className={className}>
        <fmtClearCell />
        <fmtItemCell />
        <fmtPriorityCell />
        <fmtDueCell />
      </tr>

    );
  }

});
