var posts=["2025/02/22/post1/","2025/02/23/post2/","2025/03/04/post4/","2025/03/08/post5/","2025/03/16/post6/","2025/04/01/post7/","2025/02/26/post3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };