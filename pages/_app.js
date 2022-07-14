import '../styles/globals.css'
import { Router } from "next/router";
import Progress from "@aldabil/next-progress";

//Progress setup
Progress.configure({
  type: "bar",
  background:
    "linear-gradient(90deg, rgb(78,128,237) 0%, rgb(0,114,245) 100%, rgba(127,137,0,1) 100%)",
  height: 3,
  //svg: "used with type='fullpage' ",
});
Router.events.on("routeChangeStart", () => Progress.start());
Router.events.on("routeChangeComplete", () => Progress.complete());
Router.events.on("routeChangeError", () => Progress.complete());
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
