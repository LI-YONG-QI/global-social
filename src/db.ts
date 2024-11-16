import { db } from ".";

async function createPost() {
  db.run("INSERT INTO posts (creator, content, likes) VALUES (?, ?, ?)", [
    "Fox",
    "Hello, world!",
    0,
  ]);
}

async function getAllPosts() {
  const listOfProducts = await db.all(`SELECT * FROM posts`);
  console.log(listOfProducts);
}

async function likePost() {
  db.run("UPDATE posts SET likes = likes + 1 WHERE id = ?", [1]);
}

async function reset() {
  db.run("DROP TABLE posts");
}

async function getPostByContent(keyword: string) {
  const posts = await db.all(
    `SELECT * FROM posts WHERE content LIKE ? ORDER BY likes DESC`,
    [`%${keyword}%`]
  );

  console.log(posts);
}

//createPost();
//reset();
//likePost();
//getAllPosts();
