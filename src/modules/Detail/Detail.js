import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './Detail.css';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconYes from 'material-ui/svg-icons/action/check-circle';
import IconNo from 'material-ui/svg-icons/navigation/cancel';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
const aSide = {
  textAlign: 'center',
  display: 'inline-block',
  paddingTop: 10,
  minWidth: 300,
  maxWidth: 420
};
const GridListStyle = {
  minHeight: 220,
  margin: 10
};
class Detail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      infos: {
        vehicle_check: {},
        check_infos: []
      }
    };
  }
  componentDidMount () {
    axios.get('api/check_infos', {params: this.props.location.query})
    .then((response) => {
      console.log(response.data);
      this.setState((state) => {
        state.infos.vehicle_check = response.data.vehicle_check;
        state.infos.check_infos = response.data.check_infos;
        return state;
      });
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
  }
  componentWillUnmonut () {

  }
  render () {
    return (
      <div className={styles.content}>
        <Paper style={aSide} zDepth={2}>
          <div>
            <h3>图片审核</h3>
            <GridList
              cellHeight={120}
              cols={3}
              padding={30}
              style={GridListStyle}
              className={styles.reviewList}
            >

              <div className={styles.itemOk}>
                <div className={styles.header}>kkkk</div>

                <img
                  className={styles.reviewImgOk}
                  width="100%"
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
                <IconYes style={{color: '#4a90e2'}}/>
              </div>
              <div>
                cheliang
                <img
                  className={styles.reviewImgNo}
                  width="100%"
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
                <IconNo style={{color: '#F44336'}}/>
              </div>
              <div>
                cheliang
                <img
                  width="100%"
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
                <IconYes style={{color: '#4a90e2'}}/>
              </div>
              <div>
                cheliang
                <img
                  width="100%"
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
                <IconYes style={{color: '#4a90e2'}} />
              </div>


            </GridList>
          </div>
            <Divider style={{marginTop: 10, marginButton: 10}} />
            <div>
              <h3>审核结果</h3>
                <SelectField
                value={'ddd'}
                style={{ background: '#eff1f5' }}
                iconStyle={{fill: '#000'}}
                >
                  <MenuItem key={'dd2'} value={'dddd'} primaryText={'ddddd'}></MenuItem>
                  <MenuItem key={'dd'} value={'ddd'} primaryText={'ff'}></MenuItem>
                </SelectField>
                <RaisedButton
                  label="确定"
                  style={{position: 'relative', top: -30, marginLeft: 10}}
                  buttonStyle={{background: '#4a90e2'}}

                >

                </RaisedButton>
                <TextField
                  inputStyle={{background: '#eff1f5'}}
                  style={{width: '85%'}}
                  hintText="不通过原因描述..."
                  multiLine
                  rows={4}
                  rowsMax={4}
                />


            </div>

        </Paper>
        <div className={styles.center}>
          <div className={styles.carInfo}>
            <Card style={{ width: '85%', margin: 'auto', maxWidth: 800 }}>
              <CardMedia
                overlay={
                  <div>kkkk</div>
                }
                overlayContentStyle={{top: 0, bottom: 'auto'}}
              >
                <img
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
              </CardMedia>
              <CardMedia
                overlay={
                  <div>kkkk</div>
                }
                overlayContentStyle={{top: 0, bottom: 'auto'}}
              >
                <img
                  src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491881963&di=67275035bf216da3ebffd3c70f30e648&src=http://img181.poco.cn/mypoco/myphoto/20110315/17/54704062201103151711088752081084673_012.jpg"
                />
              </CardMedia>
            </Card>

            kdjfsklafjdskl
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;