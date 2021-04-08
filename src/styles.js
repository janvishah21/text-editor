import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'left'
    },
    navbar: {
      backgroundImage: 'linear-gradient(to top right, #4880EC, cyan)',
      display: 'flex',
      padding: '.5rem 1rem',
      // boxShadow: '0 0 20px gray'
    },
    title: {
      flexGrow: 1,
      color: 'white',
      userSelect: 'none'
    }
  }));