import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: '8px 0px 8px 8px',
    },
    
    switchBase: {
        '&:hover':{
            backgroundColor:'transparent'
         },
        border: `1px solid #12141D`,
      padding: 1,
      '&$checked': {
        border: `1px solid #F5F5F5`,
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: 'transparent',
          opacity: 1,
          border: `1px solid #F5F5F5`,
        },
      },
      '&$focusVisible $thumb': {
        color: '#F5F5F5',
        border: `1px solid #12141D`,
      },
    },
    thumb: {
      width: 22,
      height: 22,
      backgroundColor: 'transparent',
      boxShadow: 'none'
      
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid #12141D`,
      backgroundColor: 'transparent',
      opacity: 1
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });


function Toggle(props) {
     function changeTheme() {
         if (props.theme === "light") {
             props.setTheme("dark");
         } else {
             props.setTheme("light")
         }
     };

     return (
         <IOSSwitch onClick={changeTheme}>Cambio tema</IOSSwitch>
     );
};

export default Toggle
