export default async function handler(req, res) {
  if (req.method === "POST") {
    const newPost = req.body;
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      const post = await response.json();
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to add post" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
