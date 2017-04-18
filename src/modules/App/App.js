import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListIcon from 'material-ui/svg-icons/action/list';
import IconButton from 'material-ui/IconButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import theme from './theme';
import logo from './images/logo.png';

import styles from './App.css';
injectTapEventPlugin();


const styleCenter = {
  flex: 1,
  flexWarp: 1,
  margin: 30
};

const App = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <div className={styles.app} >
      <AppBar
        className={styles.header}
        title="机动车安全技术检验监管图片智能审核系统"
        titleStyle={{textAlign: 'center'}}
        iconStyleLeft={{marginLeft: 70}}
        iconStyleRight={{marginRight: 70}}
        iconElementLeft={<img src={logo} />}
        iconElementRight={<IconButton iconStyle={{width: 40, height: 40}} style={{width: 60, height: 60}}> <ListIcon /> </IconButton>}
        zDepth={2}
      />
      {props.children}
    </div>
  </MuiThemeProvider>
);

// App.propTypes = {
//   children: React.PropTypes.node
// };

export default App;