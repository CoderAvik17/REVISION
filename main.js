var reasons=[
    "2. They bring rain",
    "3. Trees give us fruits",
    "4.They give us shelter",
    "5. They give us shade and support"
    ];
    var images=[
    "https://images.unsplash.com/photo-1514509353532-1419c0935d72?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTg5MzM2Mg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1502252430442-aac78f397426?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTg5MzM2Mg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTg5MzM2Mg&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1522891735718-6a86a483c165?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTg5MzM2Mg&ixlib=rb-1.2.1&q=85"
    ];
    
    var i= 0;
     function nextslide(){
     document.getElementById("reason1").innerHTML= reasons[i];
     document.getElementById("image").src= images[i];
     i++;
    document.getElementById("audio").play();
     }
    