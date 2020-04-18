import * as React from 'react'

export const NoSSR = ({ children }) => {
  const [canRender, setCanRender] = React.useState(false)

  React.useEffect(() => {
    setCanRender(true)
  }, [])

  return canRender ? children : null
}
