import "./src/styles/fonts.css"

export const onInitialClientRender = () => {
  let body = document.getElementsByTagName("body")[0]
  body.classList.remove("show-transition")
  body.classList.add("page-has-loaded")
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  let body = document.getElementsByTagName("body")[0]
  body.classList.add("show-transition")
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  let body = document.getElementsByTagName("body")[0]
  setTimeout(() => {
    body.classList.remove("show-transition")
  }, 500)
}
