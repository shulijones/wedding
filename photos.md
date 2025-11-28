---
layout: main
---
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .photo-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    }

    @media (min-width: 768px) {
        .photo-container {
            margin: 0 20px;
            gap: 20px;
        }
    }

    @media (max-width: 768px) {
        .photo-container {
            margin: 0 5px;
            gap: 5px;
        }
    }

    .nicelink {
        color: 	#1760c6ff;
    }

    .nicelink:visited {
        color: #a916a9ff
    }

    .vertical {
        grid-row-start: span 2;
    }

    .section-item {
        text-align: center;
    }
</style>

<div class="container">
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css"/>
        <h4 class="section-header">Engagement Photos</h4>
        <div class="section-item">Here are a few of our favorites! If you want to see more, you can check out these Google Photos albums of <a class="nicelink" href="https://photos.app.goo.gl/WW959pQ6ps6yJZ3JA">Evan's proposal to Shuli</a> and <a class="nicelink" href="https://photos.app.goo.gl/Lt5xrNrTXC8ksV8h9">Shuli's proposal to Evan</a>.</div>
        <div class="photo-container"> 
            <picture>
                <img src="./photo/Engagement-34.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/IMG_4807.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/Engagement-47.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/Engagement-54.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/Engagement-73.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/Engagement-84.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/Engagement-85.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/Engagement-97.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/IMG_4728.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/IMG_4737.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/IMG_4772.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/IMG_4797.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/IMG_4799.jpg" class="us-photo"/>
            </picture>
            <picture class="vertical">
                <img src="photo/IMG_4784.jpg" class="us-photo"/>
            </picture>
            <picture>
                <img src="photo/Engagement-81.jpg" class="us-photo"/>
            </picture>
        </div>
</div>