export default async function handler(req, res) {
  try {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}
