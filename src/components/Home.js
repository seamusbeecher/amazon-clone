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
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                    price={ 29.99 } 
                    image="https://miro.medium.com/max/1400/1*zxtMIuwC0eMGDAQ8gkCtcg.jpeg"
                    rating={ 1 }/>

                <Product 
                    id="456454"
                    title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Black (Latest Model)" 
                    price={ 99.99 } 
                    image="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg" data-image="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg" data-image-dimensions="2000x1414" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="59ecd684bce176c74bc6ee7a" data-type="image" alt="BeatsByDre_Scene_Blue_01_01.jpg" data-image-resolution="2500w" src="https://images.squarespace-cdn.com/content/v1/532c63dde4b02b8c350fbb19/1508693644241-D4SSF1K01FHINWFT77M5/ke17ZwdGBToddI8pDm48kHUbwavCmVK2ZfNyKM0ywlh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUFRdWB0JB7OFc3V-DqUC8L9vepxxPP_Qyvb8S8ezEDk6nAENlVG3LGGTjPVbFT-SA/BeatsByDre_Scene_Blue_01_01.jpg?format=2500w"
                    rating={ 4 }/>
            </div>

            <div className='home-row'>
                <Product 
                    id="98765345"
                    title="Logitech G915 TKL Tenkeyless Lightspeed Wireless RGB Mechanical Gaming Keyboard, Low Profile Switch Options, LIGHTSYNC RGB, Advanced Wireless and Bluetooth Support - Tactile" 
                    price={ 89.99 } 
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360844_sd.jpg"
                    rating={ 3 }/>

                <Product 
                    id="28745332"
                    title="Logitech G403 Hero 25K Gaming Mouse, Lightsync RGB, Lightweight 87G+10G optional, Braided Cable, 25, 600 DPI, Rubber Side Grips" 
                    price={ 49.99 } 
                    image="https://resource.logitechg.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                    rating={ 4 }/>

                <Product 
                    id="0526785"
                    title="Logitech G PRO X Wireless LIGHTSPEED Gaming Headset with Blue VO!CE Mic Filter Tech, 50 mm PRO-G Drivers, and DTS Headphone:X 2.0 Surround Sound" 
                    price={ 39.99 } 
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320789_rd.jpg"
                    rating={ 3 }/>
            </div>

            <div className='home-row'>
                <Product 
                    id="7910373"
                    title="Surfboard - 6' Body Board with Removable Fins & Protective Leash, Non-Slip Surfing Board for Surfing, Fishing Water Yoga" 
                    price={ 799.99 } 
                    image="https://cdn.shopify.com/s/files/1/0411/9757/products/OptimistPrymeGlassDeck_e705e7b2-b132-465a-8f14-685262701a7d.jpg?v=1575931601"
                    rating={ 3 }/>

                <Product 
                    id="7910373"
                    title="Surfboard - 8ft Classic Surfboard // Foam Wax Free Soft Top Longboard for Adults and Kids of All Levels of Surfing" 
                    price={ 899.99 } 
                    image="data:image/jpeg;base64,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"
                    rating={ 2 }/>
            </div>

            <div className='home-row'>
                <Product 
                    id="98765345"
                    title="One Piece Figure Monkey D. Luffy Wano Country Figure Anime Figure Action Figure" 
                    price={ 19.99 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/61JuO2lei0L._AC_SX679_.jpg"
                    rating={ 5 }/>

                <Product 
                    id="28745332"
                    title="One Piece Action Fogure Zoro Figure Roronoa Zoro Action Figure PVC Action Figure POP Model Gift Size18CM" 
                    price={ 19.99 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/61ZjHHAE5wL._SX679_.jpg"
                    rating={ 5 }/>

                <Product 
                    id="0526785"
                    title="One Piece Anime Action Figure Trafalgar Law Combat Version Doll Model Cosplay PVC Statue Role Toys Collectible Decoration 18CM" 
                    price={ 19.99 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/61pM7gPpJHL._AC_SX679_.jpg"
                    rating={ 5 }/>
            </div>

            <div className='home-row'>
                <Product 
                    id="7910373"
                    title="Skytech Chronos Gaming PC Desktop - AMD Ryzen 7 3700X 3.6GHz, RTX 3070 8GB, 16GB DDR4 3600, 1TB NVME, B550 Motherboard, 650W Gold PSU, Windows 10 Home 64-bit, White" 
                    price={ 1999.99 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/91AaXV-TosL._AC_SX679_.jpg"
                    rating={ 3 }/>
            </div>

            <div className='home-row'>
                <Product 
                    id="7910373"
                    title="Enjoi Whitey Panda 8.0in Skateboard Complete" 
                    price={ 110.99 } 
                    image="https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Enjoi-Whitey-Panda-8.0%22-Skateboard-Complete-_272390-front-US.jpg"
                    rating={ 3 }/>

                <Product 
                    id="7910373"
                    title="Lib Tech T.Rice Orca Snowboard - Blem 2021" 
                    price={ 499.99 } 
                    image="https://images.evo.com/imgp/700/193084/767871/lib-tech-t-rice-orca-snowboard-blem-2021-.jpg"
                    rating={ 3 }/>
            </div>
        </div>
    )
}

export default Home
