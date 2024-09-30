import Header from "../../Components/Header/Header";
import MyOffice from "../../Components/MyOffice/MyOffice";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const AdminPage = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Nav />
      <MyOffice />
      <Footer />
    </div>
  );
};

export default AdminPage;
