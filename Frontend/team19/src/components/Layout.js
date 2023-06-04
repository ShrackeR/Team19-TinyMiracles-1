
import StartNavbar from "./StartNavbar";
const Layout = (props) => {
  return (
    <>
      <StartNavbar />
      {props.children}
    </>
  );
};
export default Layout;
