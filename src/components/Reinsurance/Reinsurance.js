import style from "./Reinsurance.module.scss"

const Reinsurance = () => {
    const data = {
        "livraison": [
            {
            "description": "LIVRAISON À PARTIR DE 4,50€",
            "location": "PARTOUT EN FRANCE MÉTROPOLITAINE",
            "icon": "🚚"
            },
            {
            "description": "LIVRAISON OFFERTE EN POINT RELAIS",
            "location": "À PARTIR DE 50€ D'ACHAT",
            "icon": "📦"
            }
        ],
        "retrait": {
            "description": "RETIREZ VOS COMMANDES GRATUITEMENT",
            "location": "DANS NOTRE BOUTIQUE PARISIENNE",
            "icon": "🛒"
        }
    };

    return (
        <div className={style.reinsuranceContainer}>
            {data.livraison.map((item, index) => (
                <div key={index} className={style.reinsuranceInfo}>
                    <p className={style.icon}>{item.icon}</p>
                    <p className={style.description}>{item.description}</p>
                    <p className={style.location}>{item.location}</p>
                </div>
            ))}
            <div>
                <p className={style.icon}>{data.retrait.icon}</p>
                <p className={style.description}>{data.retrait.description}</p>
                <p className={style.location}>{data.retrait.location}</p>
            </div>
        </div>
    );
}

export default Reinsurance;