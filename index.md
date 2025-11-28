---
layout: main
---

<style>
    .main-container {
        width: 100%;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%; 
    }

    .css-wedding_data_info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 40px;
        text-align: center;
    }

    .photo-container {
        width: 100%; 
    }

    .us-photo {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (min-width: 768px) {
        .main-container {
            width: 90%;
            max-width: 1200px;
            flex-direction: row; 
            align-items: center;
            margin: 0 auto;
            justify-content: center;
        }

        .text-container {
            width: auto;
            max-width: 720px;
            padding: 16px 0;
        }
    
        .photo-container {
            flex-basis: 55%;
            flex-shrink: 1;
            flex-grow: 0;
            max-width: 720px;
        }

        .css-wedding_data_info {
            text-align: left;
            margin-left: 48px;
            margin-right: 0;
            align-items: flex-start;
        }
    }

    .main-text-block {
        margin: 8px 0;
    }

    .main-text-block-title {
        line-height: 1;
        margin: 32px 0 8px 0;
        font-family: Abhaya Libre;
        color: #F1E5AC;
        font-size: 44px;
        text-transform: lowercase;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .main-text-block-title {
        margin: 0 0 8px 0;
    }

    .main-text-block-datetime {
        margin: 8px 0;
        font-family: Roboto;
        letter-spacing: 2px;
        color: #DBC453;
        font-size: 19px;
        font-weight: normal;
        text-transform: uppercase;
    }

    .main-text-block-location {
        margin: 4px 0;
        font-family: Roboto;
        letter-spacing: 1px;
        color: #DBC453;
        font-size: 15px;
        font-weight: normal;
    }
</style>


<div class="main-container">
    <div class="photo-container"> 
        <picture>
            <source srcSet="./photo/us.jpg" />
            <img loading="eager" alt="Evan &amp; Shuli Home Page Banner" width="762"
                height="953" src="./photo/us.jpg" class="us-photo"/>
        </picture>
    </div>
    <div class="text-container">
        <div class="css-wedding_data_info">
            <div class="main-text-block">
                <h4 class="main-text-block-title">Wedding Day</h4>
                <div class="main-text-block-datetime">
                    <span>November 14, 2026</span>
                    <br>
                    <span>3:45 pm</span>
                </div>
            </div>
            <div class="main-text-block">
                <div class="main-text-block-location">Piedmont Community Hall</div>
                <div class="main-text-block-location">711 Highland Ave, Piedmont, CA 94611</div>
            </div>
        </div>
    </div>
</div>