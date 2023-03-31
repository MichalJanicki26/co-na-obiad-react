import "./style.css";
import logo from "./icon.png";
import Dropdown from "./Dropdown";

const Head = ({ title, onChangePage }) => (
    <div className="head">
        <div className="head__logo">
            <img src={logo} alt="logo" className="head__logoImg"/>
        </div>
        <div className="head__title">
            <h1 className="head__title--text">
                {title}
            </h1>
        </div>
        <div>
            <Dropdown
            onChangePage={onChangePage}
            />
        </div>
    </div>
);

export default Head