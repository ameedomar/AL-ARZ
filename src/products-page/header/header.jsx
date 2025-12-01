import "../header/header.css";
import header from "../../images/logo-b.png";

function Header() {
  return (
    <div className="main-header">
      <div className="header-panel">
        <div className="left-section">

          <span className="lang">English |</span>

          <a href="#" className="icon instagram icon-circle icon-circle-i">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" className="icon facebook  icon-circle icon-circle-f">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>

        <div className="menu">
          <nav>
            <a href="#" className="menu-item" >الرئيسية</a>
            <a href="#" className="menu-item">من نحن</a>
            <a href="#" className="menu-item">منتجاتنا</a>
            <a href="#" className="menu-item">الاخبار</a>
            <a href="#" className="menu-item">اتصل بنا</a>
          </nav>
        </div>

        <img src={header} alt="Logo header" className="logo-image-header" />
      </div>
    </div>
  );
}

export default Header;
