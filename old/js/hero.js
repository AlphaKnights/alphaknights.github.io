(function(){
  $(".social-presence-video").click(function(){
    $(".video-standby").fadeIn();
    $(".video").attr("src", "https://www.youtube.com/embed/C0K3IzrhW7s/?autoplay=1");
  });

  // var videoQueue = [ "hero_2", "hero" ], currentVideo = -1;

  // var nextInQueue = function(){
  //   currentVideo++;

  //   if(videoQueue.length - 1 < currentVideo){
  //     $(".hero-video video").fadeOut();
  //   }else{
  //     if(!(videoQueue.length - 1 < currentVideo + 1)) $("#video-preload").attr("src", "/assets/mp4/" + videoQueue[currentVideo + 1] + ".mp4")
  //     $(".hero-video video").attr("src", "/assets/mp4/" + videoQueue[currentVideo] + ".mp4");
  //   }
  // }

  // $(".hero-video video").on("ended", nextInQueue);

  // nextInQueue();
}())