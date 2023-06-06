import { useAuthContext } from "../hooks/useAuthContext";
import { useAuthContext2 } from "../hooks/useAuthContext2";
import StartNavbar from "./StartNavbar";
import UserNavbar from "./UserNavbar";
import AdminNavbar from './AdminNavbar';

const Layout = (props) => {
    const { user } = useAuthContext();
    const { admin } = useAuthContext2();
  return (
    <>
     
      {user && <UserNavbar />}
      {admin && <AdminNavbar />}
      {!user  && !admin && <StartNavbar />}
     
      {props.children}
    </>
  );
};
export default Layout;
