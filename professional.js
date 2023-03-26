let profs=[
    {
        link:"#",
        title:"Assistant Professor",
        item_date_box:"Indian Institute Of Information Teaching Vadodara International Campus Diu (IIITV-ICD)",
        item_date:"Duration: July, 2022 ongoing"
    },
    {
        link:"#",
        title:"Senior Software Engineer",
        item_date_box:"Samsung professional Institute - Delhi, Samsung India Electronics PVT. LTD",
        item_date:"Duration: July, 2011 to Dec, 2015"
    },
]


let profs_div=document.getElementById("profs");
var prof_html=""
profs.forEach((prof)=>{
    prof_html+=`
        <div class="ag-courses_item">
            <a href=${prof.link} class="ag-courses-item_link_a">
                <div class="ag-courses-item_bg"></div>                       
                <div class="ag-courses-item_title">
                    ${prof.title}
                </div>
                
                <div class="ag-courses-item_date-box">
                    ${prof.item_date_box}
                    <br>
                    <br>
                    <span class="ag-courses-item_date">
                        ${prof.item_date}
                    </span>
                </div>
            </a>
        </div>
    `
})
profs_div.innerHTML=prof_html;