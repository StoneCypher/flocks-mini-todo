/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtClearCell = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf      = this.context.flocks_updater.set,
        index   = this.props.index,
        done    = this.fctx().todoList[index].done,
        deleted = this.fctx().todoList[index].deleted,

        toggleDone = function() {
          uf( ['data', 'todoList', index, 'done'], !done );
        },

        toggleDeleted = function() {
          uf( ['data', 'todoList', index, 'deleted'], !deleted );
        };

    return (
      <td className="clearCell">
        <a className="remove" href="javascript:void(0)" onClick={toggleDeleted}>&#x2717;</a>
        <a className="complete" href="javascript:void(0)" onClick={toggleDone}>&#x2713;</a>
      </td>
    );

  }

});
