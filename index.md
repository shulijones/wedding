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

    @media (min-width: 768px) {
        .main-container {
            width: auto;
            flex-direction: row; 
            align-items: center;
            margin: 0;
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%; 
    }

    
    @media (min-width: 768px) {
        .text-container {
            width: auto;
            max-width: 720px;
            padding: 16px 0;
        }
    }

    .css-wedding_data_info {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 48px 0 24px;
        align-items: center;
    }

    .verticalLayout.homePage .css-wedding_data_info {
        align-items: flex-start;
        margin: 10px 40px;
        text-align: left;
    }

    .main-text-block {
        margin: 8px 0;
    }

    .main-text-block-title {
        line-height: 1;
        margin: 32px 0 8px 0;
        font-family: Abhaya Libre;
        color: #F1E5AC;
        font-size: 34px;
        text-transform: lowercase;
        font-weight: 600;
        letter-spacing: 2px;
    }

    .verticalLayout.homePage .main-text-block-title {
        margin: 0 0 8px 0;
    }

    .main-text-block-datetime {
        margin: 8px 0;
        font-family: Roboto;
        letter-spacing: 2px;
        color: #F1E5AC;
        font-size: 19px;
        font-weight: normal;
        text-transform: uppercase;
    }

    .main-text-block-location {
        margin: 4px 0;
        font-family: Roboto;
        letter-spacing: 1px;
        color: #F1E5AC;
        font-size: 14px;
        font-weight: normal;
    }

    .photo-container {
        width: 100%; 
    }

    
    @media (min-width: 768px) {
        .photo-container {
            width: 60%;
            max-width: 720px;
            padding-left: 2rem;
        }
    }

    .us-photo {
        width: 100%;
        height: auto;
        display: block;
    }
</style>


<div class="main-container">
    <div class="photo-container"> 
        <picture>
            <source srcSet="us.jpg" />
            <img loading="eager" alt="Evan &amp; Shuli Home Page Banner" width="762"
                height="953" src="us.jpg" class="us-photo"/>
        </picture>
    </div>
    <div class="text-container">
        <div class="css-wedding_data_info">
            <div class="main-text-block">
                <h4 class="main-text-block-title">Wedding Day</h4>
                <div class="main-text-block-datetime">November 14, 2026</div>
            </div>
            <div class="main-text-block">
                <div class="main-text-block-location">Piedmont Community Hall</div>
                <div class="main-text-block-location">711 Highland Ave, Piedmont, CA 94611</div>
            </div>
        </div>
    </div>
</div>