export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, updatedPost } = req.body;
    try {
      const response = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });
      if (response.ok) {
        const post = await response.json();
        res.status(200).json(post);
      } else {
        res.status(400).json({ error: "Failed to update post" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update post" });
    }
  } else {
    res.status(405).json({ message: "Only PUT requests allowed" });
  }
}
