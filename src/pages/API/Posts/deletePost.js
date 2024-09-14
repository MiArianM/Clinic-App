export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      const response = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        res.status(200).json({ message: "Post deleted" });
      } else {
        res.status(400).json({ error: "Failed to delete post" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  } else {
    res.status(405).json({ message: "Only DELETE requests allowed" });
  }
}
