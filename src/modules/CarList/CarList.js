import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import RaiseButton from 'material-ui/RaisedButton';
import ReactPaginate from 'react-paginate';
import styles from './CarList.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import { browserHistory } from 'react-router';

/**
 * 主页界面
 *
 * @class CarList
 * @extends {React.Component}
 */
class CarList extends React.Component {
  constructor (prop) {
    super(prop);
    console.log('constructor');
    console.log(prop.location);
    this.request = this.request.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.changeText = this.changeText.bind(this);
    this.state = {
      vehicle_checks: [],
      query: prop.location.query,
      curryPage: 1,
      sumPage: 0
    };
    if (prop.location.query.page === undefined) {
      this.state.query.page = 1;
    } else {
      this.state.query.page = Number(prop.location.query.page);
    }
    if (prop.location.query.per_page === undefined) {
      this.state.query.per_page = 10;
    } else {
      this.state.query.per_page = Number(prop.location.query.per_page);
    }
    if (prop.location.query.column !== undefined) {
      this.state.selectValue = prop.location.query.column;
    }
    if (prop.location.query.value !== undefined) {
      this.state.textValue = prop.location.query.value;
    }
  }
  componentWillReceiveProps (prop) {
    this.request();
  }
  componentDidMount () {
    console.log('componentDidMount');
    this.request();
  }
  request () {
    axios.get('/api/vehicle_checks', {
      params: this.state.query
    })
    .then((respons) => {
      console.log(respons.data);
      this.setState((state) => {
        state.vehicle_checks = respons.data.vehicle_checks;
        state.sumPage = respons.data.total / respons.data.per_page;
        console.log('respon');
        console.log(state);
        state.curryPage = state.query.page;
      });
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
  }
  changeSelect (event, index, value) {
    this.setState((state) => {
      state.selectValue = value;
      return state;
    });
  }
  changeText (event, newValue) {
    this.setState((state) => {
      state.textValue = newValue;
      return state;
    });
  }
  render () {
    return (
      <Paper style={{margin: 'auto', marginTop: 35, width: '95%'}}>
        <h4>车辆检验审核列表</h4>
        <div className={styles.searchbar}>
          <div className={styles.searchbar}>
            <label>检验类型:</label>
            <SelectField
              value={this.state.selectValue}
              onChange={this.changeSelect}
            >
              <MenuItem value={'kssj'} primaryText={'检验日期'} />
              <MenuItem value={'hphm'} primaryText={'号牌号码'} />
              <MenuItem value={'clsbdh'} primaryText={'车辆识别代号'} />
              <MenuItem value={'syr'} primaryText={'所有人'} />
              <MenuItem value={'cllx'} primaryText={'车辆类型'} />
            </SelectField>
          </div>

          <div>
            <label>检索关键字: </label>
            <TextField
              defaultValue={this.state.textValue}
              hintText="请输入..."
              onChange={this.changeText}
              underlineFocusStyle={{borderColor: '#4a90e2'}}
            />
          </div>

          <RaiseButton
            backgroundColor="#4a90e2"
            label="确定"
            labelColor="#fff"
            onTouchTap={
              (event) => {
                this.setState(
                  (state) => {
                    state.query.column = state.selectValue;
                    state.query.value = state.textValue;
                    state.query.page = 1;
                    state.curryPage = 1;
                    return state;
                  },
                  () => {
                    browserHistory.push({
                      pathname: this.props.location.pathname,
                      query: this.state.query
                    });
                  }
                );
              }
            }
          />
        </div>
        <Divider />

        <Table
          selectable={false}
          onCellClick={(row, col) => {
            console.log('row' + row);
            console.log('col' + col);
            console.log(this.state.vehicle_checks[row]);
            console.log(this.context.router);
            browserHistory.push(
              {
                pathname: '/detail',
                query: {id: this.state.vehicle_checks[row].id}
              });
          }}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>检验日期</TableRowColumn>
              <TableRowColumn>号牌号码</TableRowColumn>
              <TableRowColumn>车辆识别号</TableRowColumn>
              <TableRowColumn>所有人</TableRowColumn>
              <TableRowColumn>车辆类型</TableRowColumn>

            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {
              this.state.vehicle_checks.map((value, index) => (
                <TableRow key={value.id}>
                  <TableRowColumn> {value.kssj}</TableRowColumn>
                  <TableRowColumn> {value.hphm}</TableRowColumn>
                  <TableRowColumn> {value.clsbdh}</TableRowColumn>
                  <TableRowColumn> {value.syr}</TableRowColumn>
                  <TableRowColumn> {value.cllx}</TableRowColumn>
                </TableRow>
              )
              )
            }
          </TableBody>
        </Table>
        <Divider />
        <ReactPaginate
          forcePage={this.state.curryPage - 1}
          previousLabel="上一页"
          nextLabel="下一页"
          breakLabel={'...'}
          breakClassName={styles.page}
          pageCount={this.state.sumPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          pageClassName={styles.page}
          previousClassName={styles.page}
          nextClassName={styles.page}
          containerClassName={styles.paginate}
          subContainerClassName={'pages pagination'}
          activeClassName={styles.pageactive}
          onPageChange={(page) => {
            console.log('onPageChange');
            console.log(page);
            if (this.state.sumPage <= 0) {
              return;
            }
            let query = this.state.query;
            query.page = page.selected + 1;
            this.setState((state) => {
              state.query.page = page.selected + 1;
            }, () => {
              browserHistory.push({
                pathname: this.props.location.pathname,
                query: this.state.query
              });
            });
          }}
        />
      </Paper>
    );
  };
}

export default CarList;