import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

import styles from './App.css';
injectTapEventPlugin();

const aSide = {
  textAlign: 'center',
  display: 'inline-block',
  paddingTop: 10
};
const styleCenter = {
  flex: 1,
  flexWarp: 1,
  margin: 30
};

const App = (props) => (
  <MuiThemeProvider>
    <div className={styles.app} >
      <AppBar
        title="驾考检测控制后台"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <div className={styles.content}>
        <Paper style={aSide}>
          <Menu>
            <MenuItem
              containerElement={<Link to="/video" />}
              primaryText="查看摄像头"
            />
            <MenuItem
              containerElement={<Link to="/analog" />}
              primaryText="模拟上级指令"
            />

          </Menu>
        </Paper>
        <Paper style={styleCenter} >
          {props.children}

        </Paper>
      </div>
    </div>
  </MuiThemeProvider>
);

// App.propTypes = {
//   children: React.PropTypes.node
// };

export default App;