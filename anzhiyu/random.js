var posts=["2025/02/23/post2/","2025/02/22/post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };