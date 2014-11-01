/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtClearCell = React.createClass({

  mixins       : [ window.flocksjs.member ],
  contextTypes : { index : React.PropTypes.number },

  render: function() {

    var uf      = this.context.flocks_updater.set,

        index   = this.context.index,
        item    = this.fctx().todoList[index],

        done    = item.done,
        deleted = item.deleted,

        toggleDone = function() {
          uf( ['todoList', index, 'done'], !done );
        },

        toggleDeleted = function() {
          uf( ['todoList', index, 'deleted'], !deleted );
        };

    return (
      <td className="clearCell">
        <a className="remove" href="javascript:void(0)" onClick={toggleDeleted}>&#x2717;</a>
        <a className="complete" href="javascript:void(0)" onClick={toggleDone}>&#x2713;</a>
      </td>
    );

  }

});
