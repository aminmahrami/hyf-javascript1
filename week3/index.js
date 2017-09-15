//#1
let books = ["genesis","exodus","psalm","isaiah","matthew","romans","hebrews","timoty","james","revelation"];


/*//#2
function myUl()



let ul = document.createElement('ul'); //make ul

  
document.body.appendChild(ul);// append ul to body

for (let i = 0; i < books.length; i++) 
{
  let li = document.createElement('li');//make list
   li.setAttribute('id', books[i]);

  ul.appendChild(li);//append li to ul
  li.innerHTML= books[i];
}
;}


myUl()
*/
//#4

let myBooks ={
  
  genesis:{
    title: "Genesis",
    language: "Hebrew",
    author: "Moses"
  },
    
    exodus:{
    title: "Exodus",
    language: "Hebrew",
    author: "Moses" 
    },
      
    psalm:{
    title: "Psalm",
    language: "Hebrew",
    author: "Moses"
  },
    
    isaiah:{
    title: "Isaiah",
    language: "Hebrew",
    author: "Moses" 
    },
      
    matthew:{
    title: "Matthew",
    language: "Greek",
    author: "Matthew" 
    },
    romans:{
    title: "Romans",
    language: "Greek",
    author: "Paul"
  },
    
    hebrews:{
    title: "Hebrews",
    language: "Greek",
    author: "Paul" 
    },
      
    timoty:{
    title: "Timoty",
    language: "Greek",
    author: "Paul"
  },
    
    james:{
    title: "James",
    language: "Greek",
    author: "James" 
    }, 
      
    revelation:{  
    title: "Revelation",
    language: "Greek",
    author: "John"
  }
}

//#5


function myInfo () {
  

for(let i in myBooks){
  
  let section = document.createElement("div");
  document.body.appendChild(section);
  section.setAttribute("id","section");
  
  let myTitle = document.createElement("h1");
  myTitle.innerHTML = myBooks[i].title;
  section.appendChild(myTitle);
  
  let div = document.createElement("div")
  section.appendChild(div);
  
  div.setAttribute("id", i);
  
  let myAutor = document.createElement("h2");
  myAutor.innerHTML = myBooks[i].author;
  section.appendChild(myAutor);
  
  
  let myLanguage = document.createElement("h3");
  myLanguage.innerHTML = myBooks[i].language;
  section.appendChild(myLanguage);
}
}


myInfo()


////7
let coverPhoto = {
  genesis: "images/genesis_cover.jpg",
  exodus: "images/exodus_cover.png",
  psalm: "images/psalm_cover.png",
  isaiah: "images/isaiah_cover.jpg",
  matthew: "images/matthew_cover.jpg",
  romans: "images/romans_cover.jpg",
  hebrews: "images/hebrews_cover.png",
  timoty: "images/timoty_cover.jpg",
  james: "images/james_cover.jpg",
  revelation: "images/revelation_cover.jpg",
};

let imgKey = Object.keys(coverPhoto);

function myPhoto(){
     for(let i of imgKey){
          let img = document.createElement('img');
          img.setAttribute('src',coverPhoto[i]);
          document.getElementById(i).appendChild(img);
     }
}

myPhoto();

  
  
  
  


