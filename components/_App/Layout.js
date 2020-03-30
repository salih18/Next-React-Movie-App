import Head from "next/head";
import Navbar from "./Navbar";
import HeadContent from "./HeadContent";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      <Head>
        <HeadContent />
      </Head>
      <Navbar />
      <div className="container pt-1 " style={{'margin-top':'100px','min-height': 'calc(100vh - 70px)'}}> {props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
