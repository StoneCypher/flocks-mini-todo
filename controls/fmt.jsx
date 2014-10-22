/** @jsx React.DOM */

var FlocksMiniTodoHost = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {
    return (<fmtApp data={this.props.data} config={this.props.config} />);
  }

});

var Target       = document.getElementById('bodyid'),
    AppConfig    = { target: Target, control: FlocksMiniTodoHost },
    Updater      = window.flocksjs.create(AppConfig);

var InitialState = {updater: Updater, data: TempData, config: {showdeleted: false, showdone: true} };

Updater.set(InitialState);  // from tempdata.js
