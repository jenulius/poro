import useOptions from '../../store/options-store'
import useStyles from '../../styles/app-styles'
import IconBtn from '../common/IconBtn'
import ParameterInput from './ParameterInput'

export default function SessionConfiguration() {
  const { pomoDurationPresets } = useOptions()


  // props
  const pomoDurInputProps = {
    label: 'pomo duration',
    options: pomoDurationPresets,
    onSetParam: () => {},
  }

  const breakDurInputProps = {
    label: 'break duration',
    onSetParam: () => {},
  }
  const pomoTargetInputProps = {
    label: 'pomo target',
    onSetParam: () => {},
  }

  const styles = useStyles().configureSession
  return (
    <div className={styles}>
      <div className='header'>
        <div
          className='todo'
          onClick={() => {
            // debug
            options.addPomoDurationPreset({
              label: 'intellidata IDE',
              value: 34344,
            })
          }}
        >
          work on devs
        </div>
        <div className='start'>
          {/* /??/ abstract away into button levels */}
          <IconBtn icon='play' size='smallest' />
        </div>
      </div>
      <div className='inputs'>
        <ParameterInput {...pomoDurInputProps} />
        {/* <ParameterInput {...breakDurInputProps} />
        <ParameterInput {...pomoTargetInputProps} /> */}
      </div>
    </div>
  )
}
