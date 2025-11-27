---
layout: main
---
<style>
    .photo-container {
        display: grid;
        gap: 10px;
    }

    #photo-1 {
        grid-row: 1;
        grid-col: 1;
    }
    #photo-2 {
        grid-row: 1;
        grid-col: 2;
    }
    #photo-3 {
        grid-row: 1;
        grid-col: 3;
    }
</style>

<div>
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css"/>
    <div>
        <h4 class="section-header">Engagement Photos</h4>
        <div class="section-item">Here are a few of our favorites!</div>
        <div class="photo-container"> 
            <picture id="photo-1">
                <source srcSet="us.jpg" />
                <img loading="eager" alt="Evan &amp; Shuli Home Page Banner" width="762"
                    height="953" src="us.jpg" class="us-photo"/>
            </picture>
            <picture id="photo-2">
                <source srcSet="us.jpg" />
                <img loading="eager" alt="Evan &amp; Shuli Home Page Banner" width="762"
                    height="953" src="us.jpg" class="us-photo"/>
            </picture>
            <picture id="photo-3">
                <source srcSet="us.jpg" />
                <img loading="eager" alt="Evan &amp; Shuli Home Page Banner" width="762"
                    height="953" src="us.jpg" class="us-photo"/>
            </picture>
        </div>
        <div class="section-item">If you want to see more, go here: [album link coming soon]</div>
    </div>
</div>