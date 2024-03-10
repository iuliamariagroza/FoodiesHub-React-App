import ChiefCard from "./ChiefCard";

export default function ChiefsSection(){
    const chiefs =[
        {
            name: "Florin Dumitrescu",
            img: "img/top-chiefs/img_1.jpg",
            recipeCount: "30",
            cuisine: "Romanian",
            facebookURL: "https://www.facebook.com/chefflorindumitrescu/?locale=ro_RO",
            instagramURL: "https://www.instagram.com/chefflorindumitrescu/?hl=en"
        },
        {
            name: "Sorin Bontea",
            img:"img/top-chiefs/img_2.jpg",
            recipeCount: "40",
            cuisine: "Romanian",
            facebookURL: "https://www.facebook.com/ChefSorinBontea/?locale=ro_RO",
            instagramURL: "https://www.instagram.com/chef.sorinbontea.official/?hl=en"
        },
        {
            name: "Cătălin Scărlătescu",
            img:"/img/top-chiefs/img_3.jpg",
            recipeCount: "38",
            cuisine: "Italian",
            facebookURL: "https://www.facebook.com/CatalinScarlatescu/?locale=ro_RO",
            instagramURL: "https://www.instagram.com/chef_catalin_scarlatescu/?hl=en"
        },
        {
            name: "Roxana Blenche",
            img:"/img/top-chiefs/img_4.jpg",
            recipeCount: "16",
            cuisine: "Mexican",
            facebookURL: "https://www.facebook.com/ChefRoxanaBlenche/?locale=ro_RO",
            instagramURL: "https://www.instagram.com/roxanablenche/"
        },
        {
            name: "Florin Scripcă",
            img:"/img/top-chiefs/img_5.jpg",
            recipeCount: "23",
            cuisine: "Romanian",
            facebookURL: "https://www.facebook.com/cheffoa/",
            instagramURL: "https://www.instagram.com/florin_scripca/?hl=en"
        },
        {
            name: "Joseph Hadad",
            img: "/img/top-chiefs/img_6.jpg",
            recipeCount: "31",
            cuisine: "Arabic",
            facebookURL: "https://www.facebook.com/chefjosephhadad/",
            instagramURL: "https://www.instagram.com/chef_joseph_hadad/?hl=en"
        }
    ]
    return(
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief =><ChiefCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}