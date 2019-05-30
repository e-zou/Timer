import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
////import pink from 'material-ui/core/colors/pink';

export default createMuiTheme({
  palette: {
    spacing: 4,
    primary: {
        light: '#ffbcaf',
        main: '#ff8a80',
        dark: '#c85a54',
        contrastText: '#000000',
      },
      secondary: {
        light: '#629749',
        main: '#33691e',
        dark: '#003d00',
        contrastText: '#ffffff',
      },
      overrides: {
        MuiButton: {
          text: {
            color: 'indigo',
            '&:hover': {
              backgroundColor: 'indigo'
            }
          }
        }
      }
  }
});