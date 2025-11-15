---
layout: main
---

<style>
    .schedule-outer-container {
        max-width: 605px;
        margin: 0 auto;
    }

    .schedule-inner-container {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .schedule-inner-container>*:not(.PersonItem) {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    }

    .header {
        margin: 24px 0 0 0;
        text-align: center;
        font-family: Roboto;
        letter-spacing: 2px;
        color: #F1E5AC;
        font-size: 19px;
        font-weight: normal;
        text-transform: uppercase;
    }

    @media (max-width: 640px) {
        .header {
            font-size: calc(19px * 0.75);
        }
    }

    @media(max-width: 640px) {
        .header {
            font-size: calc(19px * 0.82);
        }
    }

    @media (min-width: 768px) {
        .header {
            text-align: center;
        }

        .verticalLayout.homePage .header {
            text-align: left;
        }
    }

    @media (max-width: 767px) {
        .header {
            padding: 0 16px;
        }
    }

    .schedule-items-container {
        padding: 0;
        margin: 1.1em auto;
        max-width: 550px;
        text-align: left;
        font-family: Roboto;
        letter-spacing: 1px;
        color: #F1E5AC;
        font-size: 14px;
        font-weight: normal;
    }

    @media (max-width: 640px) {
        .schedule-items-container {
            font-size: calc(14px * 0.875);
        }
    }

    @media(max-width: 640px) {
        .schedule-items-container {
            font-size: calc(14px * 0.9);
        }
    }

    @media (min-width: 720px) {
        .schedule-items-container {
            max-width: 720px;
        }
    }

    @media (max-width: 768px) {
        .schedule-items-container {
            padding: 0 16px;
        }
    }

    .schedule-items-container strong {
        font-weight: bolder !important;
    }

    .schedule-items-container em {
        font-style: italic !important;
    }

    .schedule-items-container a {
        -webkit-text-decoration: underline;
        text-decoration: underline;
    }

    .schedule-items-container .ql-align-right {
        text-align: right;
    }

    .schedule-items-container .ql-align-center {
        text-align: center;
    }

    .schedule-items-container .ql-align-justify {
        text-align: justify;
    }
</style>

<div class="schedule-outer-container">
    <div class="schedule-inner-container">
        <h4 class="header">Schedule</h4>
        <div class="schedule-items-container">
        <p> Schedule intro goes here</p>
            <ul>
            <li><strong>Saturday, November 14th</strong>: Wedding!</li>
            </ul>
        </div>
    </div>
</div>