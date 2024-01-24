exports.myMail = (venue,note)=>{
    var thml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <title>Ticket Master Mail</title>
    <style>
    .text-center {
        text-align: center !important;
    }
    small.whiteTxt{
        color:hsl(0, 0%, 96%); 
    }
    .py-3 {
        padding-top: 1rem!important;
        padding-bottom: 1rem!important;
    }
    .px-3 {
        padding-right: 1rem!important;
        padding-left: 1rem!important;
    }
    .w-100 {
        width: 100%!important;
    }
    .h5, h5 {
        font-size: 1.25rem;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    .py-2 {
        padding-top: .5rem!important;
        padding-bottom: .5rem!important;
    }
    .px-2 {
        padding-right: .5rem!important;
        padding-left: .5rem!important;
    }
    .mt-3 {
        margin-top: 1rem!important;
    }
    .h6, h6 {
        font-size: 1rem;
    }
    .mt-1 {
        margin-top: .25rem!important;
    }
    .small, small {
        font-size: .875em;
    }
    .bg-primary {
        background-color: rgba( 13,110,253,1) !important;
    }
    .align-items-center {
        align-items: center!important;
    }
    .justify-content-center {
        justify-content: center!important;
    }
    .d-flex {
        display: flex!important;
    }
    .alert {
        position: relative;
        padding: 1rem 1rem;
        margin-bottom: 1rem;
        color: #58151c;
        background-color: #f8d7da;
        border: 1px solid #f1aeb5;
        border-radius: 0px;
    }
    .text-center {
        text-align: center !important;
    }
        body{
            width: 99vw;
            margin:auto;
            padding:0;
            box-sizing: border-box;
            overflow-x: hidden;
            background-color: #ffffff !important;

        }
        div.header{
            width: 100%;
            padding: 10px 0px;
            text-align: center;
           font-style: oblique;
            font-weight: 700;
            font-size: larger;
            background-color: blue;
            color:hsl(0, 0%, 96%);
            vertical-align: text-top;
        }
        div.header span{
            font-size: xx-small;
            font-weight: 500;
        }
        div.frame{
            border:2px solid #f7f7f7;
        }
        div.event{
            font-weight:600;
            color:#222;
        }
        div.bold-text{
            color:#222;
        }
        .card-text{
            color:#828282 !important;
            font-size:small;
        }
        .bg-cream{
            background-color:rgba(247, 247, 247,0.35);
        }
        bg-lig{
            background-color:rgba(0, 0, 255,0.3);
        }
        .base small{
            font-size:11px !important;
        }
        .m-auto {
            margin: auto !important;
        }
       
    </style>
</head>
<body class="px-2">
    <div style="width:95%; overflow:hidden;" class="m-auto ">
        <div class="header">
        ticketmaster<span style="font-size: x-small;">&#174;</span>
    </div>
    <div class="bold-text w-100 text-center py-3 px-3 h5">
        Your Ticket Transfer From Clara is Ready To Be Accepted
    </div>
    <div class="w-100 mt-3 frame py-2 w-100 px-2">
        <div class="w-100 bg-cream">
            <div class="h6 event">Taylor Swift Ers Tour</div>
        <div class="mt-1 card-text">Sat, Nov 2 @ 7:00pm </div>
        <div class="mt-1 card-text">${venue}</div>
        <hr />
        <div class="bold-text w-100 h6">
            <strong>
                <small>
                    Section 126,Row 9, Seat 2
                </small>
            </strong>
        </div>
        <div class="bold-text w-100 h6">
            <strong>
                <small>
                    Section 126,Row 9, Seat 2
                </small>
            </strong>
        </div>
        <div class="bold-text w-100 h6">
            <strong>
                <small>
                    Section 126,Row 9, Seat 2
                </small>
            </strong>
        </div>
        </div>
         <hr />
        <div class="w-100 py-3">
            <img class="w-100" src="https://stectrade.com/ticket/img.jpg"/>
        </div>
        <div class="mt-3">
            <div class="w-100 py-2 text-center bg-primary text-white h6"><small class="text-white whiteTxt">ACCEPT TICKET</small></div>
        </div>
        <div class="mt-3 small">
            <div class="small">
                 By clicking "ACCEPT TICKETS", you agree to our Terms of Use and any applicable ticket back terms.
            </div>
            <div class="mt-3 small">
                IF the tickets were obtained fraudulently by the person transferring them. they may be canceled at any time, removed from your account and no longer available for use.
            </div>
            <div class="mt-5 small">
                This email is NOT your ticket
            </div>
        </div>
    </div>
    <div class="mt-3">
        <div class="w-100 py-2 alert alert-danger" role="alert" style="border-radius:0px !important;">
            <div>
                <small>
                    <strong>A Message from Clara</strong>
                </small>
            </div>
            <small>${note}</small>
        </div>
        <div class="mt-3">
            <div>
                <strong>
                    <small>Transfer Status: Received</small>
                </strong>
                <div class="small">You got a ticket you're one step closer to Taylor Swift Ers Tour</div>
                <div class="small mt3">
                    <strong class="small">What's Next ?</strong>
                    <div class="mt-2 small">
                        <small>
                            You'll need to first accept the tickets transfer so 
                            the order is moved to your Ticketmaster account. Once 
                            the transfer is complete, we'll let Clara know you're all set.
                            To accept the tickets, have your Ticketmaster password handy 
                            and login to your Ticketmaster account, or create a <span class="text-primayt">new one</span>.
                            Visit <span class="text-primary">Event Details</span> to view your tickets).
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <div class="py-2 bg-lig">
                <div class="text-center">
                    <small>We're here to help</small>
                </div>
                <div class="text-center">
                    <small>if you have any questions please <span class="text-primary">contact</span> </small>
                </div>
                <div class="text-center">
                    <small>Ticketmaster Fan Support</small>
                </div>
            </div>
            <div class="bg-primary py-3 text-white base">
                 <div class="text-center">
                    <small class="text-white whiteTxt">Ticketmaster Atm Fan Support.</small>
                </div>
                 <div class="text-center">
                    <small class="text-white whiteTxt">707 Virginia Street East , Suite 170 , Charleston, WV 25301.</small>
                </div>
                 <div class="text-center mt-3">
                    <small class="text-white whiteTxt">2024 Ticketmaster. All rights reserved &copy;</small>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>
</html>
    `;
    return thml;
}
