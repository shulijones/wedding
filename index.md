---
layout: main
---

{% include us_photo_desktop.html %}

{% include us_photo_mobile.html %}

<style>
    .css-wedding_day_content {
        padding: 16px 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .verticalLayout.homePage .css-wedding_day_content {
        width: 100%;
    }

    @media (min-width: 768px) {
        .verticalLayout.homePage .css-wedding_day_content {
            width: 50%;
            max-width: 720px;
            padding-left: 0rem;
            padding-right: 2rem;
        }
    }

    @media (min-width: 1024px) {
        .verticalLayout.homePage .css-wedding_day_content {
            padding-right: 5rem;
        }
    }

    @media (min-width: 1200px) {
        .verticalLayout.homePage .css-wedding_day_content {
            padding-right: 7rem;
        }
    }
</style>
<div class="css-wedding_day_content">
    <style>
        .css-info_table {
            margin: 0;
            margin-right: auto;
            margin-left: auto;
            max-width: 720px;
            width: 100%;
            padding: 0;
        }
        .verticalLayout.homePage .css-info_table {
            margin-right: 2rem;
        }
    </style>
    <div data-testid="event-row-0" class="css-info_table">
        <style>
            .css-wedding_data_info {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                text-align: center;
                margin: 48px 0 24px;
                -webkit-align-items: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .verticalLayout.homePage .css-wedding_data_info {
                -webkit-align-items: flex-start;
                -webkit-box-align: flex-start;
                -ms-flex-align: flex-start;
                align-items: flex-start;
                margin: 10px 40px;
                text-align: left;
            }
        </style>
        <br/><br/>
        <div class="css-wedding_data_info">
            <style>
                .main-page-info-block {
                    margin: 8px 0;
                }
            </style>
            <div class="main-page-info-block">
                <style>
                    .main-page-info-block-title {
                        line-height: 1;
                        margin: 32px 0 8px 0;
                        font-family: Abhaya Libre;
                        color: #617939;
                        font-size: 34px;
                        text-transform: lowercase;
                        font-weight: 600;
                        letter-spacing: 2px;
                    }
                    .verticalLayout.homePage .main-page-info-block-title {
                        margin: 0 0 8px 0;
                    }
                    @media (max-width: 640px) {
                        .main-page-info-block-title {
                            font-size: calc(34px * 0.75);
                        }
                    }
                    @media(max-width: 640px) {
                        .main-page-info-block-title {
                            font-size: calc(34px * 0.85);
                        }
                    }
                </style>
                <h4 class="main-page-info-block-title">Wedding Day</h4>
                <style>
                    .main-page-info-block-datetime {
                        margin: 8px 0;
                        font-family: Roboto;
                        letter-spacing: 2px;
                        color: #617939;
                        font-size: 19px;
                        font-weight: normal;
                        text-transform: uppercase;
                    }
                    @media (max-width: 640px) {
                        .main-page-info-block-datetime {
                            font-size: calc(19px * 0.75);
                        }
                    }
                    @media(max-width: 640px) {
                        .main-page-info-block-datetime {
                            font-size: calc(19px * 0.82);
                        }
                    }
                </style>
                <div class="main-page-info-block-datetime">November 14, 2026</div>
                <!-- <div class="main-page-info-block-datetime">4:00 PM</div> -->
            </div>
            <div class="main-page-info-block">
                <style>
                    .main-page-info-block-location {
                        margin: 4px 0;
                        font-family: Roboto;
                        letter-spacing: 1px;
                        color: #617939;
                        font-size: 14px;
                        font-weight: normal;
                    }
                    @media (max-width: 640px) {
                        .main-page-info-block-location {
                            font-size: calc(14px * 0.875);
                        }
                    }
                    @media(max-width: 640px) {
                        .main-page-info-block-location {
                            font-size: calc(14px * 0.9);
                        }
                    }
                </style>
                <div class="main-page-info-block-location">"Piedmont Community Hall"</div>
                <div class="main-page-info-block-location">711 Highland Ave, Piedmont, CA 94611</div>
                <style>
                    .rsvp-button {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 20px;
                        font-family: Roboto, sans-serif;
                        font-size: 16px;
                        font-weight: 500;
                        color: #617939;
                        text-decoration: none;
                        text-align: center;
                        border: 2px solid #617939;
                        border-radius: 17px;
                        background-color: transparent;
                        transition: background-color 0.3s, color 0.3s;
                    }
                    .rsvp-button:hover {
                        background-color: #617939;
                        color: #eeebdd;
                        text-decoration: none;
                    }
                </style>
                <a href="TODO" class="rsvp-button">
                    RSVP
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="margin-left: 5px; margin-bottom: -2px; width: 16px; height: 16px;">
                        <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

</div>