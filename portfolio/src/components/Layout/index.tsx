import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
interface LayoutProps{
    children:React.ReactNode
}
const RootLayout: React.FC<LayoutProps>=({children})=>{
    return(
        <div>
            <Navbar/>
          <main>{children}</main>
            <Footer/>
        </div>
    )
}
export default RootLayout
