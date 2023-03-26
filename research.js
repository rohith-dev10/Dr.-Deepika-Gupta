let researchs = [
    {
        link: "https://doi.org/10.1007/s11042-019-7286-0",
        title: "Handwritten Multilingual Word Segmentation",
        item_date_box: "Using Polygonal Approximation of Digital Curves",
        item_date: "Multimedia Tools Applications",
    },
    {
        link: "https://doi.org/10.1016/j.eswa.2020.113784",
        title: "CNN-based multilingual handwritten numeral recognition",
        item_date_box: "A fusion-free approach",
        item_date: "Expert Systems with Applications",
    },
    {
        link: "https://doi.org/10.1007/s00521-021-06672",
        title: "Holistic Vs. Segmentation-based recognition of Devanagari",
        item_date_box: "A CNN-based experimental study",
        item_date: "Neural Computing Applications",
    },
]


let confs = [
    {
        link: "https://doi.org/10.1007/978-981-16-1092- 9_11",
        title: "Degraded Document Image Binarization using Active Contour Model",
        item_date_box: "International Conference on Computer Vision and Image Processing, Springer, 2020",
    },
    {
        link: "https://doi.org/10.1109/SPIN.2018.8474047",
        title: "An Efficient Character Segmentation Approach for Handwritten Hindi Text",
        item_date_box: "International Conference on Signal Processing and Integrated Networks, IEEE, 2018",
    },
    {
        link: "https://doi.org/10.1007/978-981-13-9042-5_60",
        title: "A Local-to-Global Approach for Document Image Binarization",
        item_date_box: "Computational Intelligence in Pattern Recognition, Springer, 2017",
    },
    {
        link: "#",
        title: "Comparison of parametric visual features for speech recognition",
        item_date_box: "International Conference on Network Communication and Computer, IEEE, 2011",
    },
    {
        link: "https://doi.org/10.1007/978-1-4471-2155-8_39",
        title: "Boundary Descriptors for Visual Speech Recognition",
        item_date_box: "Computer and Information Sciences II, Springer, 2011",
    },
    {
        link: "https://doi.org/10.1007/978-3-642-22714-1_20",
        title: "Contribution of Oral Periphery on Visual Speech Intelligibility",
        item_date_box: "International Conference on Advances in Computing and Communications, Springer, 2011",
    },
    {
        link: "https://doi.org/10.1007/978-3-642-16626-6_9",
        title: "Lipreading Using n-gram Feature Vector",
        item_date_box: "International Conference on Computational Intelligence in Security for Information Systems, Springer-Verlag, 2011",
    },
]


let researchs_div = document.getElementById("researchs");
var research_html = ""
researchs.forEach((research) => {
    research_html += `
    <div class="ag-courses_item">
    <a href=${research.link} class="ag-courses-item_link_a">
    <div class="ag-courses-item_bg"></div>
    <div class="ag-courses-item_title">
                    ${research.title}
                    </div>
                <div class="ag-courses-item_date-box">
                    ${research.item_date_box}
                    <br>
                    <br>
                    <span class="ag-courses-item_date">
                    ${research.item_date}
                    </span>
                </div>
            </a>
        </div>
        `
})
researchs_div.innerHTML = research_html;


let confs_div = document.getElementById("confs");
var conf_html = ""
confs.forEach((conf) => {
    conf_html += `
        <div class="ag-courses_item">
            <a href=${conf.link}
                class="ag-courses-item_link_a">
                <div class="ag-courses-item_bg"></div>

                <div class="ag-courses-item_title">
                    ${conf.title}
                </div>

                <div class="ag-courses-item_date-box">
                    ${conf.item_date_box}
                </div>
            </a>
        </div>
    `
})
confs_div.innerHTML = conf_html;