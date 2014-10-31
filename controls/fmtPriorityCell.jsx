/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtPriorityCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf    = this.context.flocks_updater.set,
        index = this.props.index,
        prio  = this.fctx().todoList[index].priority || 0,

        upPriority = function() {
          uf( ['data', 'todoList', index, 'priority'], prio+1 );
        },

        downPriority = function() {
          uf( ['data', 'todoList', index, 'priority'], prio-1 );
        };

    return (
      <td>
        <a href="javascript:void(0)" onClick={downPriority}>&darr;</a>
        &#x2005;
        {prio}
        &#x2005;
        <a href="javascript:void(0)" onClick={upPriority}>&uarr;</a>
      </td>
    );

  }

});
