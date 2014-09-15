/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtClearCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf   = this.context.updateFunc,
        idx  = this.props.index,
        done = this.props.done,

        toggleDone = function() {
          uf( ['data', 'todoList', idx, 'done'], !done )
        };

    return (
      <td className="clearCell">
        <a className="remove" href="javascript:void(0)">&#x2717;</a>
        <a className="complete" href="javascript:void(0)" onClick={toggleDone}>&#x2713;</a>
      </td>
    );

  }

});
