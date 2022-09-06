import Layout from "../components/layouts/main";
import "../styles/globals.css";

const AnySync = ({ Component, router, ...pageProps }) => {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default AnySync;
