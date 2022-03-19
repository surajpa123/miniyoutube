let api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=tesla&type=video&key=AIzaSyCoa66LTTHa0Xi4pvHaioTPx15yB6_dfyA";
let result_div = document.getElementById("searchresult")
async function searchVideo(){
    let result_div = document.getElementById("searchresult").innerHTML = ""
    let videoquery = document.getElementById("video").value;
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoquery}&type=video&key=AIzaSyD1CoqZ7gRiWpyFNQdiEVueYCoUz_HazwI&maxResults=20`)
    let data = await response.json()
    let videos = data.items;
    appendvideos(videos);
    console.log(data);

}

const appendvideos= (elem) => {
    elem.forEach(({snippet,id:{videoId}}) => {
        console.log(snippet)

        var div = document.createElement("div");
        var title = document.createElement("p");
        title.innerHTML = snippet.title;
        var thumbnail = document.createElement("img");
        thumbnail.src = snippet.thumbnails.medium.url;

        var data_to_send = {
        snippet:snippet,
        videoId:videoId
        };
    div.onclick = () => {
     showvideo(data_to_send)
 }

        div.append(thumbnail,title)
        result_div.append(div)
    }) 
        
}

async function searchVideo2(){
    let result_div = document.getElementById("searchresult").innerHTML = ""
    let videoquery = document.getElementById("video").value;
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyD1CoqZ7gRiWpyFNQdiEVueYCoUz_HazwI&maxResults=40`)
    let data = await response.json()
    let videos = data.items;
    appendvideos2(videos);
    console.log(data);
}

const appendvideos2= (elem) => {
    elem.forEach(({snippet,id:{videoId}}) => {
        console.log(snippet)

        let div = document.createElement("div");
        let title = document.createElement("p");
        title.innerHTML = snippet.title;
        let thumbnail = document.createElement("img");
        thumbnail.src = snippet.thumbnails.medium.url;

        let data_to_send = {
        snippet:snippet,
        videoId:videoId
        };
    div.onclick = () => {
     showvideo(data_to_send)
 }

        div.append(thumbnail,title)
        result_div.append(div)
    }) 
        
}
searchVideo2();
appendvideos2();







var count = 0;
function darkMode(){
    
    var main = document.querySelector(".main");
    var logo = document.getElementById("darkmode")
    var p = document.querySelector("p")
    count++;
    
    if(count == 1){
     
        // main.style.backgroundColor = "white"  
        
        main.style.backgroundColor = "#181818"
        logo.style.color = "white"
        // p.style.color = "white"

        
    }else{
        main.style.backgroundColor = "white"
        logo.style.color = "black"
        // p.style.color = "black";
        count = 0; 
    }
    // count++
    console.log(count)
    // main.style.backgroundColor = "white"
}



function showvideo(data_to_send){
   localStorage.setItem("clicked",JSON.stringify(data_to_send))
   window.location.href = "video.html";
};