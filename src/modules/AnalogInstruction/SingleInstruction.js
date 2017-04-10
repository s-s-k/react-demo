import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionSend from 'material-ui/svg-icons/content/send';
import ImageDetails from 'material-ui/svg-icons/image/details';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import PostHttp from '../../components/PostHttp';
/**
 * 单个命令模拟
 * @class analog instruction 模拟指令
 * @extends {React.Component}
 */
export default class SingleInstruction extends React.Component {
  constructor (props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = {
      sendState: 0, // 状态编号 0 等待发送 1为发送中 2为发送成功 3为发送失败
      receiveMessage: '未收到消息'
    };
  }
  sendMessage () {
    PostHttp(this.props.url, this.props.sendMessage).then((json) => {

    }, (error) => {

    });
  }
  render () {
    return (
      <TableRow >
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.httpMethod}</TableRowColumn>
        <TableRowColumn colSpan="2">{this.props.url}</TableRowColumn>

        <TableRowColumn style={{overflow: 'visible'}}>
          <IconButton
            tooltip="发送"
            style={{margin: -10}}
            onTouchTap={this.sendMessage}
          >
            <ActionSend />
          </IconButton>
        </TableRowColumn>
        <TableRowColumn>
          <FlatButton
            label="La"
            labelPosition="after"
            primary
            icon={<CircularProgress />}
          />
        </TableRowColumn>
        <TableRowColumn>
          <FlatButton
            style={{margin: -10}}
            label="详情"
            labelPosition="after"
            icon={<ImageDetails />}
          />
        </TableRowColumn>
        <TableRowColumn>
          <FlatButton
            style={{margin: -10}}
            label="详情"
            labelPosition="after"
            icon={<ImageDetails />}
          />
        </TableRowColumn>
      </TableRow>
    );
  }

}
SingleInstruction.propTypes = {
  name: PropTypes.string.isRequired,
  httpMethod: PropTypes.string.isRequired,
  sendMessage: PropTypes.object,
  url: PropTypes.string.isRequired
};
SingleInstruction.defaultProps = {
  sendMessage: ''
};