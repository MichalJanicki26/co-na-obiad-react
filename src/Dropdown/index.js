import "./style.css"

const Dropdown = () => (
        // <div className="header__dropbtn">
        //     <img src="img/menu.png" className="header__dropbtn--img">
        // </div>
        <div className="header__dropdown-content" style="right:0;">
            <a href="index.html" className="header__dropdown-text">Strona Główna</a>
            <a href="addRecipe.html" className="header__dropdown-text">Dodaj Przepis</a>
            <a href="cookbook.html" className="header__dropdown-text">Lista Przepisów</a>
        </div>
);

export default Dropdown