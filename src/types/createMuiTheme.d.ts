import * as createMuiTheme from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        drawerWidth?: number;
    }

    interface Theme {    
      drawerWidth?: number;
  }
}
