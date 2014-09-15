/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtClearCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf      = this.context.updater.set,
        idx     = this.props.index,
        done    = this.props.done,
        deleted = this.props.deleted,

        toggleDone = function() {
          uf( ['data', 'todoList', idx, 'done'], !done )
        },

        toggleDeleted = function() {
          uf( ['data', 'todoList', idx, 'deleted'], !deleted )
        };

    return (
      <td className="clearCell">
        <a className="remove" href="javascript:void(0)">&#x2717;</a>
        <a className="complete" href="javascript:void(0)" onClick={toggleDone}>&#x2713;</a>
      </td>
    );

  }

});
