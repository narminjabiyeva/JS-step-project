let serviceContent = [
    webDesing={
        url : "Step%20Project%20Ham/services/wordpress5.jpg" ,
         p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    graphicDesing={
        url : "Step%20Project%20Ham/services/web-design1.jpg" ,
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    onlineSupport={
        url : "Step%20Project%20Ham/services/online-market.png" ,
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    appDesing={
        url : "Step%20Project%20Ham/services/seo.png" ,
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    onlineMarketing={
        url : "Step%20Project%20Ham/services/graphic-design1.jpg" ,
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    seoService={
        url : "Step%20Project%20Ham/services/wordpress5.jpg" ,
        p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

function servisContentMaker({url,p}){

     let image = document.createElement("img");
     image.src = url;
     image.classList.add("content-img");

     let parag = document.createElement("p");
     parag.innerText=p;
     parag.classList.add("content-text");

     let contentConteiner = document.createElement("div");
     contentConteiner.classList.add("content-container");
     contentConteiner.append(image,parag);
     let container = document.body.querySelector(".services-content");
     container.append(contentConteiner);
 }

serviceContent.forEach(servisContentMaker);

let contents = document.body.querySelector(".services-content");
contents = [...contents.children];

for (let item of contents){
    item.style.display = "none";
}
contents[0].style.display = "flex";

let tabsContainer = document.body.querySelector(".services-tabs");
let tabs = [...tabsContainer.children];
tabs[0].classList.add("active");
tabsContainer.addEventListener("click",(e) => {
    let tab = e.target;
    let id = tab.dataset.id;
    for (let i=0;i<contents.length;i++){
        if (id==i){
            contents[i].style.display = "flex";
            tabs[i].classList.add("active");
        }
        else {
            contents[i].style.display = "none";
            tabs[i].classList.remove("active");
        }
    }
    }
);


const categories = [
    "web design",
    "graphic design",
    "landing pages",
    "wordpress"
];
let tabsContents = [

    {
        image: "Step Project Ham/web design/web-design1.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design2.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design3.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design4.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design5.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design6.jpg",
        title:  "creative design",
        category: "web design"
    },
    {
        image: "Step Project Ham/web design/web-design7.jpg",
        title:  "creative design",
        category: "web design"
    },

    {
        image: "Step Project Ham/graphic design/graphic-design1.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design2.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design3.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design4.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design5.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design6.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design7.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design8.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design9.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design10.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design11.jpg",
        title:  "creative design",
        category: "graphic design"
    },
    {
        image: "Step Project Ham/graphic design/graphic-design12.jpg",
        title:  "creative design",
        category: "graphic design"
    }
    ,
    {
        image: "Step Project Ham/landing page/landing-page1.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page2.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page3.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page4.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page5.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page6.jpg",
        title:  "creative design",
        category: "landing pages"
    },
    {
        image: "Step Project Ham/landing page/landing-page7.jpg",
        title:  "creative design",
        category: "landing pages"
    },


    {
        image: "Step Project Ham/wordpress/wordpress1.jpg",
        title:  "creative design",
        category: "wordpress"
    },
    {
        image: "Step Project Ham/wordpress/wordpress2.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress3.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress4.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress5.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress6.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress7.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress8.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress9.jpg",
        title:  "creative design",
        category: "wordpress"
    },

    {
        image: "Step Project Ham/wordpress/wordpress10.jpg",
        title:  "creative design",
        category: "wordpress"
    },

];

let galleryWrapper = document.body.querySelector(".gallery-wrapper");
let loadButton = document.body.querySelector(".load-more");
let galleryTabs = document.body.querySelector(".gallery-tabs");
let tabsArray=[...galleryTabs.children];

tabsContents.slice(0,12).forEach(galleryMaker);
tabsArray[0].classList.add("gallery-hover-active");
let result;

galleryTabs.addEventListener("click",e =>
    {

        let tab = e.target;
        let index = tabsArray.indexOf(tab);

        for (let i = 0;i < tabsArray.length;i++)
        {
            if (index === i)
            {
                tab.classList.add("gallery-hover-active");
            }
            else
            {
                tabsArray[i].classList.remove("gallery-hover-active");

            }
        }

        if (tab.dataset.category === "all")
        {
            galleryCounter=24;
            galleryWrapper.innerHTML ="";
            result = tabsContents.slice(0,12);
            document.body.querySelector(".gallery-container").append(loadButton);
        }
        else
        {
            galleryWrapper.innerHTML ="";
            result = tabsContents.filter(obj => tab.dataset.category === obj.category);
            loadButton.remove();
        }

        result.forEach(galleryMaker);
    }
);
let galleryCounter = 24;
function galleryMaker(item){
    let container = document.createElement("div");
    container.classList.add("image-wrap");
    let img = document.createElement("img");
    img.classList.add("gallery-img");
    img.src = item.image;
    galleryWrapper.append(container);
    container.append(img);
    container.dataset.id = item.category;

    container.addEventListener("mouseenter",(e) =>
        {
            let hoverContainer = document.createElement('div');
            let  icon = document.createElement('img');
            let  title = document.createElement('h4');
            let  category = document.createElement('p');

            hoverContainer.classList.add('gallery-hover');
            icon.classList.add('gallery-icon');
            title.classList.add('gallery-title');
            category.classList.add('gallery-category');

            icon.src = "Step Project Ham/icons/gallery-hover.png";
            title.innerText = item.title;
            category.innerText = item.category;

            hoverContainer.append(
                icon,
                title,
                category
            );
            container.append(hoverContainer);
        }
    );

    container.addEventListener("mouseleave", e =>
        {
            document.body.querySelector(".gallery-hover").remove();
        }
    );

}
loadButton.addEventListener("click",() =>{
    document.body.querySelector(".loader-wrapper").style.display = "block";
    setTimeout(function () {
        galleryWrapper.innerHTML ="";
        result = tabsContents.slice(0,galleryCounter);
        result.forEach(galleryMaker);
        console.log(galleryCounter);
        if (galleryCounter===36){
            loadButton.remove();
        }
        galleryCounter+=12;
        document.body.querySelector(".loader-wrapper").style.display = "none";
    },2000);

});
