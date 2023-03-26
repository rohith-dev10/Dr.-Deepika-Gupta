let teachings=[
    {
        year:"2023-2024",
        courses:[
            {
                link:"#",
                code:"CS102",
                name:"Introduction to Data Structures",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS162",
                name:"Introduction to Data Structures Lab",
                credit:"L-T-P: C | 0-1-2: 3"
            },
            {
                link:"#",
                code:"CS201",
                name:"Object Oriented Design & Programming",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS261",
                name:"Object Oriented Design & Programming Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS206",
                name:"Operating Systems",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS266",
                name:"Operating Systems Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS305",
                name:"Formal Language and Automata Theory",
                credit:"L-T-P: C | 3-0-2: 5"
            },
            {
                link:"#",
                code:"CS302",
                name:"Artificial Intelligence",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS362",
                name:"Artificial Intelligence Lab",
                credit:"L-T-P: C | 0-0-2: 2"
            },
        ]
    },
    {
        year:"2022-2023",
        courses:[
            {
                link:"#",
                code:"CS102",
                name:"Introduction to Data Structures",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS162",
                name:"Introduction to Data Structures Lab",
                credit:"L-T-P: C | 0-1-2: 3"
            },
            {
                link:"#",
                code:"CS201",
                name:"Object Oriented Design & Programming",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS261",
                name:"Object Oriented Design & Programming Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS206",
                name:"Operating Systems",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS266",
                name:"Operating Systems Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS305",
                name:"Formal Language and Automata Theory",
                credit:"L-T-P: C | 3-0-2: 5"
            },
            {
                link:"#",
                code:"CS302",
                name:"Artificial Intelligence",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS362",
                name:"Artificial Intelligence Lab",
                credit:"L-T-P: C | 0-0-2: 2"
            },
        ]
    },
    {
        year:"2021-2022",
        courses:[
            {
                link:"#",
                code:"CS102",
                name:"Introduction to Data Structures",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS162",
                name:"Introduction to Data Structures Lab",
                credit:"L-T-P: C | 0-1-2: 3"
            },
            {
                link:"#",
                code:"CS201",
                name:"Object Oriented Design & Programming",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS261",
                name:"Object Oriented Design & Programming Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS206",
                name:"Operating Systems",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS266",
                name:"Operating Systems Lab",
                credit:"L-T-P: C | 0-0-3: 3"
            },
            {
                link:"#",
                code:"CS305",
                name:"Formal Language and Automata Theory",
                credit:"L-T-P: C | 3-0-2: 5"
            },
            {
                link:"#",
                code:"CS302",
                name:"Artificial Intelligence",
                credit:"L-T-P: C | 3-0-0: 3"
            },
            {
                link:"#",
                code:"CS362",
                name:"Artificial Intelligence Lab",
                credit:"L-T-P: C | 0-0-2: 2"
            },
        ]
    },
]    


let teachings_div=document.getElementById("teachings");
var teaching_html=""
teachings.forEach((teaching,i)=>{
    teaching_html=`
        <p class="greyText" id="greyText">
            ${teaching.year}
        </p>
        <div class="ag-format-container">
            <div class="ag-courses_box" id="courses${i}">

            </div>
        </div>
    `
    teachings_div.innerHTML+=teaching_html;
    let courses_div=document.getElementById(`courses${i}`);
    var course_html=""
    teaching.courses.forEach((course)=>{
        course_html+=`
            <div class="ag-courses_item">
                <a href=${course.link} class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>
                    <div class="ag-courses-item_title">
                        ${course.code}
                        <br>
                        <br>
                        ${course.name}
                    </div>
                    <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">
                            ${course.credit}
                        </span>
                    </div>
                </a>
            </div>
        `
    })
    courses_div.innerHTML=course_html;
})