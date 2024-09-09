// import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import Cursors from "./utils/cursors";


export default function Home() {
  return (
    <>
    {/* <div  */}
      <Cursors/>
    {/* </div> */}
      <div 
      id="pageID"
      className="relative">
      <Navbar/>
      <Body/>
      </div>
    </>
  );
}
