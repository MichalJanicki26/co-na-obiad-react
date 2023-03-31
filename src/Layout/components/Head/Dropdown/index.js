import "./style.css";
import icon from "./menu.png"
import Routes from "../../../../constants/routs";

const Dropdown = ({ onChangePage }) => {

        return (
        <>
        <div className="dropdown__button">
            <img src={icon} alt="icon" className="dropbtn__img"/>
        </div>
        <div className="dropdown__content" style={{right:0}}>
            <a onClick={() => onChangePage(Routes.HOME)} className="header__dropdown-text">Strona Główna</a>
            <a onClick={() => onChangePage(Routes.ADD_RECIPE)} className="header__dropdown-text">Dodaj Przepis</a>
            <a onClick={() => onChangePage(Routes.COOKBOOK)} className="header__dropdown-text">Lista Przepisów</a>
        </div>
        </>
        )
};

export default Dropdown