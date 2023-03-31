import "./style.css"

const Head = ({ title, dropdown }) => (
    <div className="head">
        <div className="head__logo">
            <img src="%PUBLIC_URL%/icon.png" className="head__logoImg"></img>
        </div>
        <div className="head__title">
            <h1 className="head__title--text">
                {title}
            </h1>
        </div>
        <div>
            {dropdown}
        </div>
    </div>
);

export default Head