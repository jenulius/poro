import { createUseStyles } from 'react-jss'
import { useThemeStore } from '../store/theme-store'

export default function useStyles() {
  const theme = useThemeStore((state) => state.theme)

  const Styles = createUseStyles({
    root: {
      color: theme.textNormal,
      '& .cont': {
        padding: '1.8rem 2rem',
        height: '100vh',
      },
      fontSize: '1.05rem',
    },
    background: {
      background: theme.background,
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      zIndex: '-1',
    },

    appRoute: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      '& div': {
        width: '33%',
      },
      '& .left': {
        '& .month-date': {
          marginBottom: '.3rem',
        },
      },
      '& .right': {
        textAlign: 'right',
      },
      '& .center': {
        display: 'flex',
        justifyContent: 'center',
      },
    },

    activeSession: {
      backgroundColor: theme.accent,
      width: '73% !important',
      maxWidth: '400px',
      color: theme.background,
      padding: '.7rem 1.3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '1000px',
      '& div': {
        width: 'initial',
        display: 'flex',
        alignItems: 'center',
      },
      '& .time': {
        color: theme.backgroundTransparentDarker,
      },
    },

    widgets: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },

    footer: {},

    widget: {
      width: '21rem',
      height: '21rem',
      display: 'flex',
      flexDirection: 'column',
      margin: '1.2rem',

      '& .action': {
        cursor: 'pointer',
        marginLeft: '.4rem',
      },
      '& .header': {
        color: theme.textDarker,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& .title': {
          display: 'flex',
        },
      },

      '& .body': {
        height: '90%',
        border: `1px solid ${theme.boxBorder}`,
        boxSizing: 'border-box',
        borderRadius: '11px',
        padding: '1rem',
        paddingTop: '0.8rem',
      },
    },

    graphicBackground: {
      backgroundImage: theme.graphicBackground,
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundSize: 'cover',
      zIndex: '-1',
    },

    session: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      color: theme.textBrighter,
      '& .center': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      },
      '& .footer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& div': {
          margin: '.6rem',
        },
      },
    },

    sessionWidget: {
      background: theme.backgroundTransparentDarker,
      backdropFilter: theme.blur,
      borderRadius: '1000px',
      border: 'none',
      padding: '2em 4.5em',
      width: 'fit-content',
      color: theme.textBrightest,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '5rem',
      '& .top-display': {},
      '& .center-display': {
        fontSize: '3.5rem',
        margin: '.1em',
      },
      '& .bottom-display': {},
      '& .picker': {
        height: 'fit-content',
        background: '',
      },
    },

    configureSession: {
      background: theme.backgroundTransparentDarker,
      backdropFilter: theme.blur,
      height: '23rem',
      width: '20rem',
      padding: '1.7rem',
      borderRadius: '9px',
      display: 'flex',
      flexDirection: 'column',

      '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& .inputs': {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        height: '78%',
        justifyContent: 'space-between',
        alignItems: 'space-between',
      },
    },

    parameterInput: {
      border: `2px solid ${theme.transparent}`,
      padding: '.5rem',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '.6em',
      '& .label': {
        textTransform: 'uppercase',
        fontSize: '.75rem',
        fontWeight: '700',
        letterSpacing: '.11em',
      },
    },

    iconBtn: {
      cursor: 'pointer',
      '& .sz-normal': {
        height: '2rem',
      },
      '& .sz-biggest': {
        height: '2.7rem',
      },

      '& .sz-small': {
        height: '1.3rem',
      },

      '& .sz-header': {
        height: '1.7rem',
        marginLeft: '.6rem',
      },
    },

    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: '2',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.55);',
    },

    quickAdd: {
      backgroundColor: theme.background,
      display: 'flex',
      width: '23rem',
      borderRadius: '5px',
      padding: '1rem ',
      marginBottom: '11rem',
      '& input': {
        background: 'none',
        border: 'none',
        fontFamily: 'inherit',
        color: 'inherit',
        fontSize: 'inherit',
        '&:focus': {
          outline: 'none',
        },
      },
    },

    todoItems: {
      '& .item': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '1.7rem',
        cursor: 'pointer',
        '& .left': {
          display: 'flex',
          '& .desc': {
            marginLeft: '.6rem',
          },
        },
        '& .right': {},
      },
    },

    todoInfo: {
      backgroundColor: theme.background,
      height: '10rem',
      width: '26rem',
      borderRadius: '6px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.2rem',
      marginBottom: '11rem',
      color: theme.textNormal,
      '& .top': {
        display: 'flex',
        justifyContent: 'space-between',
        '& .desc': {
          '& .text': {
            fontSize: '1.3rem',
          },
          '& .time': {
            color: theme.textDarker,
            marginTop: '.2rem',
          },
        },
      },
      '& .bottom': {
        display: 'flex',
        width: '15%',
        justifyContent: 'space-around',
      },
    },

    userOptions: {
      backgroundColor: theme.background,
      color: theme.textNormal,
      height: '70%',
      maxHeight: '700px',
      width: '50%',
      maxWidth: '800px',
      padding: '1.5rem',
      borderRadius: '3px',
      '& .heading': {
        textTransform: 'uppercase',
        color: theme.textDarker,
        letterSpacing: '.2rem',
        fontWeight: '700',
        marginBottom: '1.4rem',
      },
      '& .title': {
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '.9rem',
      },
      '& .text': {
        marginBottom: '1.2rem',
        lineHeight: '1.4rem',
      },
      '& .group': {
        marginBottom: '2rem',
      },
    },

    textButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8em 1.4em',
      fontWeight: '500',
      background: '#8d9bad',
      borderRadius: '5px',
      minWidth: 'fit-content',
      border: 'none',
    },
  })

  return Styles()
}
