var videos = JSON.parse(localStorage.getItem("clicked"),recomm())
//   console.log(videos)
 let videodiv = document.getElementById("video_details");

 let iframe = document.createElement("iframe");
let id = videos.videoId;
// console.log(id)
 iframe.src = `https://www.youtube.com/embed/${id}`;
 iframe.setAttribute('allowfullscreen',true)
 iframe.width = "90%";
 iframe.height = "90%";
  
 videodiv.append(iframe);


async function recomm(){
        // let result_div = document.getElementById("searchresult").innerHTML = ""
        // let videoquery = document.getElementById("video").value;

        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=tesla&type=video&key=AIzaSyD1CoqZ7gRiWpyFNQdiEVueYCoUz_HazwI&maxResults=10`)
        let data = await response.json()
        let videos = data.items;
        appendvideos(videos);
        console.log(data);
    }



    const appendvideos= (elem) => {
        elem.forEach(({id:{videoId}}) => {
            console.log("Video id",videoId)
            var recomdiv = document.createElement("div")
            var recomm = document.getElementById("recommendation");
            var iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`
            iframe.width = "100%";
            iframe.height = "100%"
           
            recomdiv.append(iframe)
            recomm.append(recomdiv)
        }) 
            
        } 

    // function appendvideos(elem){
    //       var id = elem.snippet.videoId
    //       console.log("v"+id)
    // } 