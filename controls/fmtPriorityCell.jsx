/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtPriorityCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf    = this.context.flocks_updater.set,
        index = this.props.index,
        item  = this.fctx().todoList[index],
        prio  = item.priority || 0,

        upPriority = function() {
          uf( ['todoList', index, 'priority'], prio+1 );
        },

        downPriority = function() {
          uf( ['todoList', index, 'priority'], prio-1 );
        };

    return (
      <td>
        <a href="javascript:void(0)" onClick={downPriority}>&darr;</a>
        &#x2005;{prio}&#x2005;
        <a href="javascript:void(0)" onClick={upPriority}>&uarr;</a>
      </td>
    );

  }

});
