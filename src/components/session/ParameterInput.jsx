/* IMPORTANT !!!

this file is not optimized and very 'dirty' from a design
perspective. a completely new theme for 'react-select must 
be created. this will be done in v 0.3

*/

import Creatable, { useCreatable } from 'react-select/creatable'
import { useThemeStore } from '../../store/theme-store'
import useStyles from '../../styles/app-styles'

export default function ParameterInput({
  label,
  options,
  onAddNewOption,
  onSetParam,
}) {
  // fucking ugly api
  const inputstyles = {
    control: (base, state) => ({
      ...base,
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'none',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    }),

    container: (base) => ({
      ...base,
      '&:hover': {
        border: 'none',
      },
    }),
    input: (base) => ({
      ...base,
      color: theme.textBrighter,
      fontWeight: '500',
      fontSize: '1.2rem',
      marginTop: '.3rem',
    }),

    singleValue: (base) => ({
      ...base,
      color: theme.textBrighter,
      fontWeight: '500',
      fontSize: '1.2rem',
      marginTop: '.3rem',
    }),

    placeholder: (base) => ({
      ...base,
      color: theme.textNormal,
      fontWeight: '500',
      fontSize: '1.2rem',
      marginTop: '.3rem',
    }),

    indicatorSeparator: (base, state) => ({
      display: 'none',
    }),

    valueContainer: (base) => ({
      ...base,
      padding: '0rem',
    }),

    noOptionsMessage: (base) => ({
      background: 'black',
      color: 'green',
      margin: '0rem',
    }),

    menu: (base) => ({
      ...base,
      background: theme.backgroundTransparentDarker,
      borderRadius: '3px',
    }),
    option: (base) => ({
      ...base,
      '&:hover': {
        color: theme.textDarker,
      },
    }),

    dropdownIndicator: (base) => ({
      color: theme.textNormal,
    }),
  }
  const theme = useThemeStore((s) => s.theme)
  const styles = useStyles().parameterInput

  return (
    <div className={styles}>
      <div className='label'>{label}</div>
      <div className='input'>
        <Creatable styles={inputstyles} options={options && options} />
      </div>
    </div>
  )
}
