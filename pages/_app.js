import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
function SavageKe({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default SavageKe;
