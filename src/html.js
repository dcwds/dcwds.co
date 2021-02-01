import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          key="dcwds-theme"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const persistedColorMode = window.localStorage.getItem(
                    "color-mode"
                  )
                  const preferredColorMode = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                  ).matches
                    ? "dark"
                    : "light"

                  if (persistedColorMode) {
                    document.documentElement.classList.add(persistedColorMode)
                  } else if (!persistedColorMode && preferredColorMode) {
                    document.documentElement.classList.add(preferredColorMode)
                  } else {
                    document.documentElement.classList.add("dark")
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
