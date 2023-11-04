console.log('\n********** 17. Blog Post Object **********');
// 17. Post
// Use constructor function to initialate a Post object

// let post = {
//   title: 'Some title',
//   body: 'the body can containg a short or long string.',
//   author: 'Who am I',
//   views: 6,
//   comments: {
//     author: 'Who are they',
//     body: 'Good to know. Thanks',
//   },
//   isLive: true,
// };

const post = new Post(
  'Some title',
  'the body can containg a short or long string.',
  'Who am I'
);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

// console.log(post);
