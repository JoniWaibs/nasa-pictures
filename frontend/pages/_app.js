import '../styles/globals.scss'
import context from '../context/AppContext'
const { AppProvider} = context;

const MyApp = ({ Component, pageProps }) =>  <AppProvider><Component {...pageProps} /></AppProvider>

export default MyApp
