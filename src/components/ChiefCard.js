import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ChiefCard({chief}){
    const redirectToSocialMedia = (socialMedia) => {
        const socialMediaURLs = {
          facebook: chief.facebookURL, 
          instagram: chief.instagramURL, 
        };
        window.open(socialMediaURLs[socialMedia], "_blank");};
    return(
    <div className="chief-card">
        <img src={chief.img} alt="" />
        <div className="chief-card-info">
            <h3 className="chief-card-name">{chief.name}</h3>
            <p className="chief-recipe-count">Recipes: <b>{chief.recipeCount}</b></p>
            <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
            <p className="chief-icons">
                <FontAwesomeIcon icon={faFacebook} onClick={() => redirectToSocialMedia("facebook")}/>
                <FontAwesomeIcon icon={faInstagram} onClick={() => redirectToSocialMedia("instagram")} />
            </p>
        </div>
    </div>
    )
}