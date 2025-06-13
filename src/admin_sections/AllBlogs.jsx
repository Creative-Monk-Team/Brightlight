import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";
import dynamic from "next/dynamic";
// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
];

const handleQuillChange = (content) => {
  setNewBlogData((prevData) => ({
    ...prevData,
    blog_content: content,
  }));
};

const AllBlogs = () => {
  let [confirmDelete, setConfirmDelete] = useState(null);
  let [showDeletePopup, setShowDeletePopup] = useState(false);
  let [clickedOnYes, setClickedOnYes] = useState(false);
  let notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifySize = () => {
    toast.error("Large Image Size Recieved.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyDelete = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [newBlogData, setNewBlogData] = useState({
    blog_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    custom_url: "",
    alt_tag: "",
    blog_content: "",
    metaTitle: "",
    metaDescription: "",
  });

  // Fetch all blogs
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/new-added-blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.reverse());
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    // ReactQuill triggers this with string content (not a native event)
    if (typeof e === "string") {
      setNewBlogData((prevData) => ({
        ...prevData,
        blog_content: e,
      }));
      return;
    }

    // Native input event (like text inputs or file inputs)
    if (e?.target?.type === "file") {
      const file = e.target.files[0];
      if (file) {
        setNewBlogData((prevData) => ({
          ...prevData,
          [e.target.name]: file,
        }));
      }
    } else {
      setNewBlogData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // Handle edit click
  const handleEditClick = (blog) => {
    setEditBlogId(blog._id);
    setNewBlogData(blog);
  };

  // Handle update click
  const handleUpdateClick = () => {
    if (!editBlogId) {
      console.error("No ID found for update.");
      return;
    }

    const formData = new FormData();
    for (const key in newBlogData) {
      if (key === "image" && newBlogData[key]) {
        formData.append("image", newBlogData[key]);
      } else {
        formData.append(key, newBlogData[key]);
      }
    }

    fetch(
      `https://brightlight-node.onrender.com/new-added-blogs/${editBlogId}`,
      {
        method: "PATCH",
        body: formData,
      }
    )
      .then((response) => {
        if (response.status === 413) {
          notifySize();
          throw new Error("Payload too large");
        } else if (!response.ok) {
          notifyError();
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        notifySuccess();
        setEditBlogId(null);
        setNewBlogData({
          blog_heading: "",
          blog_content: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          metaTitle: "",
          metaDescription: "",
        });
        // Refetch blogs
        fetch("https://brightlight-node.onrender.com/new-added-blogs")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      })
      .catch((error) => {
        notifyError();
      });
  };

  // Handle delete click
  // const handleDeleteClick = (blogId) => {
  //   fetch(`https://brightlight-node.onrender.com/new-added-blogs/${blogId}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => {
  //       notifyDelete();
  //       fetch("https://brightlight-node.onrender.com/new-added-blogs")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setBlogs(data);
  //         })
  //         .catch((error) => {
  //           console.log("Error fetching data:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       notifyError();
  //     });
  // };

  useEffect(() => {
    if (confirmDelete && clickedOnYes) {
      fetch(
        `https://brightlight-node.onrender.com/new-added-blogs/${confirmDelete}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          notifyDelete();
          setShowDeletePopup(false);
          fetch("https://brightlight-node.onrender.com/new-added-blogs")
            .then((res) => res.json())
            .then((data) => {
              setBlogs(data);
            })
            .catch((error) => {
              console.log("Error fetching data:", error);
            });
          setConfirmDelete(null);
          setClickedOnYes(false);
        })
        .catch((error) => {
          notifyError();
        });
    }
  }, [confirmDelete, showDeletePopup, clickedOnYes]);

  return (
    <>
      <div className={styles.blogList}>
        <ToastContainer />
        {blogs.length === 0 ? (
          <p className={styles.noBlogsPara}>Loading Blogs</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className={styles.blogItem}>
              <div className={styles.blogContent}>
                <h4>{blog.blog_heading}</h4>
                <Image
                  loading="lazy"
                  height={50}
                  width={100}
                  src={blog.image}
                  alt="Blog"
                  className={styles.blogImage}
                />
                <div className={styles.singleBlogOptions}>
                  {editBlogId === blog._id ? (
                    <>
                      <Image
                        loading="lazy"
                        height={50}
                        width={100}
                        src={update}
                        className={styles.updateIcon}
                        onClick={handleUpdateClick}
                        alt="Update"
                      />
                      <Image
                        loading="lazy"
                        height={50}
                        width={100}
                        src={editIcon}
                        className={styles.editIcon}
                        onClick={() => setEditBlogId(null)}
                        alt="Cancel Edit"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        loading="lazy"
                        height={50}
                        width={100}
                        src={editIcon}
                        className={styles.editIcon}
                        onClick={() => handleEditClick(blog)}
                        alt="Edit"
                      />
                      <Image
                        loading="lazy"
                        height={50}
                        width={100}
                        src={deleteIcon}
                        className={styles.deleteIcon}
                        onClick={() => {
                          setShowDeletePopup(true);
                          setConfirmDelete(blog._id);
                          // handleDeleteClick(blog._id)
                        }}
                        alt="Delete"
                      />
                    </>
                  )}
                </div>
              </div>
              {editBlogId === blog._id && (
                <div className={styles.editForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="blog_heading">Blog Heading</label>
                    <input
                      id="blog_heading"
                      name="blog_heading"
                      type="text"
                      value={newBlogData.blog_heading}
                      onChange={handleInputChange}
                      placeholder="Enter blog heading"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="image">Blog Image</label>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                    {newBlogData.image && (
                      <Image
                        loading="lazy"
                        height={80}
                        width={150}
                        src={newBlogData.image}
                        alt="Preview"
                        className={styles.blogImage}
                      />
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="tag_1">Tag 1</label>
                    <input
                      id="tag_1"
                      name="tag_1"
                      type="text"
                      value={newBlogData.tag_1}
                      onChange={handleInputChange}
                      placeholder="Tag 1"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="tag_2">Tag 2</label>
                    <input
                      id="tag_2"
                      name="tag_2"
                      type="text"
                      value={newBlogData.tag_2}
                      onChange={handleInputChange}
                      placeholder="Tag 2"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="tag_3">Tag 3</label>
                    <input
                      id="tag_3"
                      name="tag_3"
                      type="text"
                      value={newBlogData.tag_3}
                      onChange={handleInputChange}
                      placeholder="Tag 3"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="custom_url">Custom URL</label>
                    <input
                      id="custom_url"
                      name="custom_url"
                      type="text"
                      value={newBlogData.custom_url}
                      onChange={handleInputChange}
                      placeholder="/your-custom-url"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="blog_content">Blog Content</label>
                    <ReactQuill
                      theme="snow"
                      value={newBlogData.blog_content}
                      onChange={handleInputChange}
                      modules={quillModules}
                      formats={quillFormats}
                      className={`max-h-[50vh] overflow-auto ${styles.quillEditor}`}
                      placeholder="Write your blog content here..."
                    />
                  </div>

                  <div className={`mt-5 ${styles.formGroup}`}>
                    <label htmlFor="metaTitle">Meta Title</label>
                    <input
                      id="metaTitle"
                      name="metaTitle"
                      type="text"
                      value={newBlogData.metaTitle}
                      onChange={handleInputChange}
                      placeholder="Meta title for SEO"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="metaDescription">Meta Description</label>
                    <input
                      id="metaDescription"
                      name="metaDescription"
                      type="text"
                      value={newBlogData.metaDescription}
                      onChange={handleInputChange}
                      placeholder="Meta description for SEO"
                    />
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div
        className={`${styles.deletePopupParent} ${
          showDeletePopup ? styles.showDeletePopup : ""
        }`}
      >
        <div className={styles.deletePopup}>
          <h3>Are You Sure You Want To Delete This Item ?</h3>
          <div>
            <button
              className={styles.yesBtn}
              onClick={() => setClickedOnYes(true)}
            >
              Yes
            </button>
            <button
              className={styles.noBtn}
              onClick={() => {
                setConfirmDelete(null);
                setShowDeletePopup(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
