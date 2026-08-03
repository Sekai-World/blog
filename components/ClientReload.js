import { useEffect } from 'react'
import Router from 'next/router'

/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */
export const ClientReload = () => {
  // Exclude socket.io from prod bundle
  useEffect(() => {
    let active = true
    let socket

    import('socket.io-client').then((module) => {
      if (!active) return

      socket = module.io()
      socket.on('reload', (data) => {
        Router.replace(Router.asPath, undefined, {
          scroll: false,
        })
      })
    })

    return () => {
      active = false
      socket?.off('reload')
      socket?.disconnect()
    }
  }, [])

  return null
}
