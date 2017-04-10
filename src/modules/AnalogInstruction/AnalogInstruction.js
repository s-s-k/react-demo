import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SingleInstuction from './SingleInstruction';
/**
 * @description 模拟指令列表页
 * @class AnalogInstruction
 * @extends {React.Component}
 */

const AnalogInstruction = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>模拟上级指令</h2>
    <Table
    selectable={false}
    fixedHeader

  >
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn colSpan="8" style={{ textAlign: 'center' }}>
          模拟指令列表
        </TableHeaderColumn>
      </TableRow>
      <TableRow >
        <TableHeaderColumn>模拟指令</TableHeaderColumn>
        <TableHeaderColumn>http方式</TableHeaderColumn>
        <TableHeaderColumn colSpan="2">URL</TableHeaderColumn>
        <TableHeaderColumn >动作</TableHeaderColumn>
        <TableHeaderColumn>状态</TableHeaderColumn>
        <TableHeaderColumn>发送消息</TableHeaderColumn>
        <TableHeaderColumn>收到消息</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <SingleInstuction
        name="kkk"
        httpMethod="post"
        url="/v1/exam_indication"
        sendMessage={{'bddd': 'kjdlsja', 'ksdlfjk': 'kfsjdk'}}
      />
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
         <TableHeaderColumn colSpan="7" style={{ textAlign: 'center' }}>
          模拟指令列表
        </TableHeaderColumn>
       </TableRow>
      <TableRow >
        <TableHeaderColumn>模拟指令</TableHeaderColumn>
        <TableHeaderColumn>http方式</TableHeaderColumn>
        <TableHeaderColumn>URL</TableHeaderColumn>
        <TableHeaderColumn >动作</TableHeaderColumn>
        <TableHeaderColumn>状态</TableHeaderColumn>
        <TableHeaderColumn>发送消息</TableHeaderColumn>
        <TableHeaderColumn>收到消息</TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </div>
 );

export default AnalogInstruction;