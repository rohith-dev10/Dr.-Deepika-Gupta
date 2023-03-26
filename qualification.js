let quals=[
    {
        link:"#",
        title:"Ph.D. in Computer Science and Engineering",
        item_date:"Indian Institute of Technology (Indian School of Mines) Dhanbad, 2021",
    },
    {
        link:"#",
        title:"M.Tech in Computer Science and Engineering",
        item_date:"Malviya National Institute of Technology (MNIT), Jaipur, 2011",
    },
    {
        link:"#",
        title:"B.Tech in Information Technology",
        item_date:"Uttar Pradesh Technical University, 2008",
    },
]


let quals_div=document.getElementById("quals");
var qual_html=""
quals.forEach((qual)=>{
    qual_html+=`
        <div class="ag-courses_item">
            <a href=${qual.link} class="ag-courses-item_link_a">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                    ${qual.title}
                </div>
                <div class="ag-courses-item_date-box">
                    <span class="ag-courses-item_date">
                        ${qual.item_date}
                    </span>
                </div>
            </a>
        </div>
    `
})
quals_div.innerHTML=qual_html;