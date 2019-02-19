const Posts = require('../db/posts.json');

const db = function() {
  let posts = [];
  if (!localStorage.getItem('posts') || localStorage.getItem('posts') == "undefined") {

    posts = Posts;
    localStorage.setItem('posts', parsed);
    let parsed = JSON.stringify(localStorage.getItem('posts'));

  } else {
    
    posts = JSON.parse(localStorage.getItem('posts'));
  }

  return posts;

}

export default {
  db
}