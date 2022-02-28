export default function Div(props) {
  return (
    <div
      {...props}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {props.children}
    </div>
  )
}
