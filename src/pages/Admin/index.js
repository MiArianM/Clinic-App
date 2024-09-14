import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    imageUrl: "",
    category: "",
    description: "",
    id: "",
    date: "",
  });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async () => {
    try {
      const currentDate = new Date().toLocaleDateString("fa-IR-u-nu-latn");
      const postWithDate = { ...newPost, date: currentDate };

      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postWithDate),
      });
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({
        title: "",
        imageUrl: "",
        category: "",
        description: "",
        id: "",
        date: "",
      });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });
      const data = await response.json();
      setPosts(posts.map((post) => (post.id === id ? data : post)));
      setSelectedPost(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (
      newPost.title &&
      newPost.imageUrl &&
      newPost.category &&
      newPost.description &&
      newPost.id
    ) {
      addPost();
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    if (selectedPost && selectedPost.title && selectedPost.imageUrl) {
      const updatedPost = {
        ...selectedPost,
        id: Number(selectedPost.id),
      };
      updatePost(Number(selectedPost.id), updatedPost);
    } else {
      alert("Please fill in all fields for editing");
    }
  };

  const handleSelectPostToEdit = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="flex flex-col justify-center items-center container">
      Admin Panel
      {/* Add New Post */}
      <div className="flex ">
        <form onSubmit={handleAddPost}>
          <input
            className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <input
            className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
            type="text"
            placeholder="Image URL"
            value={newPost.imageUrl}
            onChange={(e) =>
              setNewPost({ ...newPost, imageUrl: e.target.value })
            }
          />
          <input
            className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
            type="text"
            placeholder="category"
            value={newPost.category}
            onChange={(e) =>
              setNewPost({ ...newPost, category: e.target.value })
            }
          />
          <input
            className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
            type="text"
            placeholder="description"
            value={newPost.description}
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
          />
          <input
            className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
            type="text"
            placeholder="id"
            value={newPost.id}
            onChange={(e) => setNewPost({ ...newPost, id: e.target.value })}
          />
          <button className="bg-slate-400" type="submit">
            Add Post
          </button>
        </form>
      </div>
      <hr className="border-red-600 h-10 w-full" />
      {/* List Posts */}
      <h2>Posts</h2>
      <div className="grid">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <li
              key={post.id}
              class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div class="flex w-full flex-col items-center justify-center space-x-6 p-6">
                <div class="mx-5 w-full h-96 ">
                  <div class="flex flex-col gap-5 items-center h-64 justify-center">
                    <h3 class=" text-sm font-medium text-gray-900">
                      {post.title}
                    </h3>
                    <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                      {post.category}
                    </span>
                    <p class="mt-1 text-center text-sm text-gray-500 ">
                      {post.description}
                    </p>
                  </div>
                </div>
                <img
                  class="h-100 w-100 flex-shrink-0 rounded-full bg-gray-300"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div
                    onClick={() => handleSelectPostToEdit(post)}
                    class="flex w-0 flex-1"
                  >
                    <button class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                      </svg>
                      ویرایش پست
                    </button>
                  </div>
                  <div
                    onClick={() => deletePost(post.id)}
                    class="-ml-px flex w-0 flex-1"
                  >
                    <button
                      href="tel:+1-202-555-0170"
                      class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <svg
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      حذف پست
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Edit Post */}
      {selectedPost && (
        <div className="bg-red-300 p-10 mt-5">
          <h2>Edit Post</h2>
          <form className="flex gap-10" onSubmit={handleEditPost}>
            <input
              className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
              type="text"
              placeholder="Title"
              value={selectedPost.title}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, title: e.target.value })
              }
            />
            <input
              className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
              type="text"
              placeholder="Image URL"
              value={selectedPost.imageUrl}
              onChange={(e) =>
                setSelectedPost({
                  ...selectedPost,
                  imageUrl: e.target.value,
                })
              }
            />
            <input
              className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
              type="text"
              placeholder="category"
              value={selectedPost.category}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, category: e.target.value })
              }
            />
            <input
              className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
              type="text"
              placeholder="description"
              value={selectedPost.description}
              onChange={(e) =>
                setSelectedPost({
                  ...selectedPost,
                  description: e.target.value,
                })
              }
            />
            <input
              className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
              type="number"
              placeholder="id"
              value={selectedPost.id}
              onChange={(e) =>
                setSelectedPost({ ...selectedPost, id: Number(e.target.value) })
              }
            />
            <button type="submit">Update Post</button>
          </form>
        </div>
      )}
    </div>
  );
}
