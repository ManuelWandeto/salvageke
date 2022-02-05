import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
