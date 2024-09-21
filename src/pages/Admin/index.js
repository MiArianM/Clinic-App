import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default function AdminPanel() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    thumbnail: "",
    category: "",
    description: "",
    id: "",
    date: "",
    file: null,
    intro: "",
  });
  const [postType, setPostType] = useState("normalpost");
  const [selectedPost, setSelectedPost] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
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
  const handlePostTypeChange = (e) => {
    setNewPost({
      title: "",
      thumbnail: "",
      category: e.target.value,
      description: "",
      id: "",
      date: "",
      file: null,
      intro: "",
    });
    setPostType(e.target.value);
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setNewPost({ ...newPost, file });

    if (file) {
      setUploadStatus("Uploading");

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setUploadStatus("Uploaded");
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Upload Failed");
      }
    }
  };
  const addPost = async () => {
    try {
      const currentDate = new Date().toLocaleDateString("fa-IR-u-nu-latn");
      const postWithDate = {
        ...newPost,
        id: v4(),
        date: currentDate,
        category: postType,
      };

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
        thumbnail: "",
        category: "",
        description: "",
        id: "",
        date: "",
        file: null,
        intro: "",
      });
      setUploadStatus("");
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

    if (postType === "normalpost") {
      if (
        !newPost.title ||
        !newPost.description ||
        !newPost.intro ||
        !newPost.thumbnail
      ) {
        alert("Please fill in all fields");
        return;
      }
    } else if (postType === "pdfpost") {
      if (!newPost.title || !newPost.description || !newPost.file) {
        alert("Please fill in all fields");
        return;
      }
      if (uploadStatus !== "Upload Complete") {
        alert("Please wait until the file is uploaded");
        return;
      }
    } else if (postType === "articlepost") {
      if (!newPost.title || !newPost.description) {
        alert("Please fill in all fields");
        return;
      }
    }

    addPost();
  };

  const handleEditPost = (e) => {
    e.preventDefault();

    if (selectedPost.category === "normalpost") {
      if (
        selectedPost.title &&
        selectedPost.description &&
        selectedPost.intro &&
        selectedPost.thumbnail
      ) {
        const updatedPost = {
          ...selectedPost,
        };
        updatePost(selectedPost.id, updatedPost);
      } else {
        alert("Please fill in all required fields for Normal Post");
      }
    } else if (selectedPost.category === "pdfpost") {
      // Validate pdfpost specific fields
      if (selectedPost.title && selectedPost.description && selectedPost.file) {
        const updatedPost = {
          ...selectedPost,
        };
        updatePost(selectedPost.id, updatedPost);
      } else {
        alert("Please fill in all required fields for PDF Post");
      }
    } else if (selectedPost.category === "articlepost") {
      // Validate articlepost specific fields
      if (selectedPost.title && selectedPost.description) {
        const updatedPost = {
          ...selectedPost,
        };
        updatePost(selectedPost.id, updatedPost);
      } else {
        alert("Please fill in all required fields for Article Post");
      }
    }
  };

  const handleSelectPostToEdit = (post) => {
    setSelectedPost(post);
  };

  return (
    <section className="bg-slate-200 dark:bg-slate-600 ">
      <div className="flex flex-col justify-center items-center container ">
        Admin Panel
        <div>
          <form className="flex w-full flex-wrap" onSubmit={handleAddPost}>
            <select
              value={postType}
              onChange={handlePostTypeChange}
              className="p-5 bg-slate-400 dark:bg-slate-400 border border-solid border-slate-300 m-2"
            >
              <option value="normalpost">Normal Post</option>
              <option value="pdfpost">PDF Post</option>
              <option value="articlepost">Article Post</option>
            </select>
            <input
              className="p-6 w-1/3 border-solid border-2 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-300 m-2"
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
            <input
              className="p-6 w-1/3 border-solid border-2 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-300 m-2"
              type="text"
              placeholder="Intro"
              value={newPost.intro}
              onChange={(e) =>
                setNewPost({ ...newPost, intro: e.target.value })
              }
            />
            {postType === "normalpost" && (
              <input
                className="p-6 w-1/3 border-solid border-2 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-300 m-2"
                type="text"
                placeholder="Thumbnail URL"
                value={newPost.thumbnail}
                onChange={(e) =>
                  setNewPost({ ...newPost, thumbnail: e.target.value })
                }
              />
            )}

            <input
              className="p-6 w-1/3 border-solid border-2 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-300 m-2"
              type="text"
              placeholder="Description"
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />

            {postType === "pdfpost" && (
              <div className="flex items-center">
                <input
                  className="p-6 border-solid border-2 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-300 m-2"
                  type="file"
                  onChange={handleFileChange}
                />
                {uploadStatus === "Uploading" ? (
                  <div className="ml-5 UploadLoader"></div>
                ) : uploadStatus === "Uploaded" ? (
                  <span className="ml-5">✅</span>
                ) : (
                  <span>failed</span>
                )}
              </div>
            )}
            <button className="bg-slate-400 p-4 " type="submit">
              Add Post
            </button>
          </form>
        </div>
        <hr className="border-red-600 h-10 w-full" />
        <h2>Posts</h2>
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

              {selectedPost.category === "normalpost" && (
                <>
                  <input
                    className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
                    type="text"
                    placeholder="Intro"
                    value={selectedPost.intro}
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        intro: e.target.value,
                      })
                    }
                  />
                  <input
                    className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
                    type="text"
                    placeholder="Thumbnail URL"
                    value={selectedPost.thumbnail}
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        thumbnail: e.target.value,
                      })
                    }
                  />
                </>
              )}

              {selectedPost.category === "pdfpost" && (
                <>
                  <input
                    className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
                    type="file"
                    onChange={(e) =>
                      setSelectedPost({
                        ...selectedPost,
                        file: e.target.files[0],
                      })
                    }
                  />
                </>
              )}

              <input
                className=" p-6 w-1/3 border-solid border-2 border-slate-300 m-2"
                type="text"
                placeholder="Description"
                value={selectedPost.description}
                onChange={(e) =>
                  setSelectedPost({
                    ...selectedPost,
                    description: e.target.value,
                  })
                }
              />

              <button type="submit">Update Post</button>
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-slate-400 p-3"
              >
                close
              </button>
            </form>
          </div>
        )}
        <div className="grid">
          <h3 className="text-slate-800">Normal Posts</h3>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 border-gray-600 border-solid border-2 p-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts
              .filter((post) => post.category === "normalpost")
              .map((post) => (
                <li
                  key={post.id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full flex-col items-center justify-center space-x-6 p-6">
                    <div className="mx-5 w-full  ">
                      <div className="flex flex-col gap-5 items-center h-64 justify-center">
                        <h3 className=" text-sm font-medium text-gray-900">
                          {post.title}
                        </h3>
                        <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                          {post.category}
                        </span>
                        <p className="mt-1 text-center text-sm text-gray-500 ">
                          {post.description}
                        </p>
                      </div>
                    </div>
                    <img
                      className="h-100 w-100 flex-shrink-0 rounded-full bg-gray-300"
                      src={post.thumbnail}
                      alt={post.title}
                    />
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div
                        onClick={() => handleSelectPostToEdit(post)}
                        className="flex w-0 flex-1"
                      >
                        <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                          <svg
                            className="h-5 w-5 text-gray-400"
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
                        className="-ml-px flex w-0 flex-1"
                      >
                        <button
                          href="tel:+1-202-555-0170"
                          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                              clipRule="evenodd"
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
          <hr className="w-full border-solid border-l-purple-900" />
          <h3 className="text-slate-800">PDF Posts</h3>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 border-gray-600 border-solid border-2 p-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts
              .filter((post) => post.category === "pdfpost")
              .map((post) => (
                <li
                  key={post.id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full flex-col items-center justify-center space-x-6 p-6">
                    <h3 className=" text-sm font-medium text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-center text-sm text-gray-500 ">
                      {post.description}
                    </p>
                    <div className="flex flex-col divide-gray-200">
                      <div
                        onClick={() => handleSelectPostToEdit(post)}
                        className="flex w-0 flex-1"
                      >
                        <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                          <svg
                            className="h-5 w-5 text-gray-400"
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
                        className="-ml-px flex w-0 flex-1"
                      >
                        <button
                          href="tel:+1-202-555-0170"
                          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                              clipRule="evenodd"
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

          <h3 className="text-slate-800">Article Posts</h3>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 border-gray-600 border-solid border-2 p-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts
              .filter((post) => post.category === "articlepost")
              .map((post) => (
                <li
                  key={post.id}
                  className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full flex-col items-center justify-center space-x-6 p-6">
                    <h3 className=" text-sm font-medium text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-center text-sm text-gray-500 ">
                      {post.description}
                    </p>
                    <div className="flex flex-col divide-gray-200">
                      <div
                        onClick={() => handleSelectPostToEdit(post)}
                        className="flex w-0 flex-1"
                      >
                        <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                          <svg
                            className="h-5 w-5 text-gray-400"
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
                        className="-ml-px flex w-0 flex-1"
                      >
                        <button
                          href="tel:+1-202-555-0170"
                          className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                              clipRule="evenodd"
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
      </div>
    </section>
  );
}
