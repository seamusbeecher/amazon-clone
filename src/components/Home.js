import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>

            {/* Background image of home page  */}
            <div className='home-container'>
                <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
            </div>

            <div className='home-row'>

                {/* Product component -- Flexbox CSS */}
                <Product 
                    id="123123123"
                    title="The Lean Startup" 
                    price={ 29.99 } 
                    image="https://miro.medium.com/max/1400/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
                    rating={ 3 }/>

                <Product 
                    id="456454"
                    title="Beats Head Phones" 
                    price={ 99.99 } 
                    image="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg" data-image="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg" data-image-dimensions="2000x1414" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="59ecd684bce176c74bc6ee7a" data-type="image" alt="BeatsByDre_Scene_Blue_01_01.jpg" data-image-resolution="2500w" src="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg?format=2500w"
                    rating={ 5 }/>

            </div>

            <div className='home-row'>
                <Product 
                    id="98765345"
                    title="Logitech Keyboard" 
                    price={ 89.99 } 
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360844_sd.jpg"
                    rating={ 4 }/>

                <Product 
                    id="28745332"
                    title="Logitech Mouse" 
                    price={ 49.99 } 
                    image="https://resource.logitechg.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                    rating={ 4 }/>

                <Product 
                    id="0526785"
                    title="Logitech Headset" 
                    price={ 39.99 } 
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320789_rd.jpg"
                    rating={ 3 }/>
                
            </div>

            <div className='home-row'>
                <Product 
                    id="7910373"
                    title="Surfboard" 
                    price={ 399.99 } 
                    image="https://cdn.shopify.com/s/files/1/0411/9757/products/OptimistPrymeGlassDeck_e705e7b2-b132-465a-8f14-685262701a7d.jpg?v=1575931601"
                    rating={ 3 }/>
            </div>
        </div>
    )
}

export default Home
