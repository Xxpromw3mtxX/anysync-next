import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <div>
      <Head>
        <title>AnySync - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      {children}

      <Footer />
    </div>
  );
};

export default Main;
