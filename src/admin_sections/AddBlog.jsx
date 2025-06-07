import styles from "../styles/Admin.module.css";
import { useState } from "react";
import Image from "next/image";
import editIcon from "../assets/edit.png";
import updateIcon from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { fetchSeoData } from "../lib/fetchSeoData";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

export async function getServerSideProps() {
  return fetchSeoData(""); // Pass the API endpoint specific to this page
}

const AddBlog = () => {
  const [sectionDataSingle, setSectionDataSingle] = useState({
    blog_heading: "",
    blog_content: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    metaTitle: "",
    metaDescription: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [blogTag, setBlogTag] = useState("");

  // Quill toolbar configuration
  const quillModules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
  ];

  // Toast options for reuse
  const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Bounce,
  };

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image file upload with size validation
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast.error("Image size exceeds 5MB limit.", toastOptions);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSectionDataSingle({
          ...sectionDataSingle,
          image: reader.result, // Store Base64 string
        });
        toast.success("Image uploaded successfully.", toastOptions);
      };
      reader.onerror = () => {
        toast.error("Failed to read image file.", toastOptions);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle blog content change from ReactQuill
  const handleContentChange = (value) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      blog_content: value,
    });
  };

  // Handle tag click and copy to clipboard
  const handleTagClick = (tag) => {
    setBlogTag(tag);
    navigator.clipboard
      .writeText(tag)
      .then(() => {
        toast.success(`${tag} copied to clipboard`, toastOptions);
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard", err);
        toast.error("Failed to copy tag.", toastOptions);
      });
  };

  // Handle edit mode toggle
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Handle form submission
  const handleAddClick = () => {
    const formData = new FormData();
    Object.keys(sectionDataSingle).forEach((key) => {
      formData.append(key, sectionDataSingle[key] || ""); // Ensure no undefined values
    });

    fetch("https://brightlight-node.onrender.com/new-added-blogs", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 413) {
          toast.error("Image size too large.", toastOptions);
          throw new Error("Payload too large");
        } else if (!response.ok) {
          toast.error("Request rejected, please try again later.", toastOptions);
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Blog added successfully", toastOptions);
        setEditMode(false);
        setSectionDataSingle({
          blog_heading: "",
          blog_content: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          metaTitle: "",
          metaDescription: "",
        });
      })
      .catch(() => {
        toast.error("Request rejected, please try again later.", toastOptions);
      });
  };

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      <input
        placeholder="Meta Title"
        name="metaTitle"
        value={sectionDataSingle.metaTitle}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Meta Description"
        name="metaDescription"
        value={sectionDataSingle.metaDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Blog Heading"
        name="blog_heading"
        value={sectionDataSingle.blog_heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <p className={styles.precautionLine}>
        Upload an image to be stored as the blog's featured image in the database.
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={!editMode}
      />
      {sectionDataSingle.image && (
        <Image
          src={sectionDataSingle.image}
          alt="Blog Image Preview"
          width={200}
          height={100}
          className={styles.imagePreview}
          loading="lazy"
        />
      )}
      <div className={styles.blogContentTageSelectionArea}>
        <div className={styles.tagsArea}>
          {[
            "Express Entry",
            "Permanent Residency",
            "Category Based",
            "CLB ILETS Calculator",
            "Previous Draw History",
            "Private Route",
            "More Services",
            "Privacy Policy",
            "Terms & Conditions",
            "Not Found Page",
            "Skilled Worker Stream",
            "Priorities Program",
            "International Post Graduate Program",
            "International Graduate Program",
            "Health Authority Stream",
            "Healthcare Targeted Draw",
            "Entry Level Semi Skilled",
            "BC PNP",
            "PNP",
            "RNIP",
            "Agri Food Pilot Program",
            "Pilot Programs",
            "Transport Occupation Targeted Draw",
            "Trade Occupation Targeted Draw",
            "STEM Targeted Draw",
            "French Targeted Draw",
            "Federal Skilled Worker Program",
            "Federal Skilled Trades Program",
            "Canadian Experience Class",
            "Dual Intent Visa",
            "Business Visitor Visa",
            "Visitor Visa",
            "Temporary Resident",
            "Temporary Resident Permit Draft",
            "Super Visa",
            "Common Law Partner Temporary",
            "Common Law Partner Permanent",
            "Common Law Partner International",
            "Spouse Common Law Sponsorship",
            "Restoration Status Draft",
            "Spousal Open Work Permit",
            "Open Work Permit for Spouse Inland",
            "Flagpoling",
            "Extensions Draft",
            "Study Permit Minors",
            "SDS",
            "Non SDS",
            "Outside Canada",
            "Visitor to Student",
            "Change College Program",
            "Inside Canada",
            "Student Visa",
            "Parents Grandparents",
            "Orphan",
            "Lonely Canadian",
            "Humanitarian Compassionate",
            "Dependent Children",
            "Adoption",
            "Family Reunification Sponsorship",
            "PGWP",
            "Open Work Dependent Children",
            "Open Work Vulnerable LP",
            "Francophone Mobility Program",
            "Bridging Open Work Permit LP",
            "Low Wage LMIA",
            "Global Stream LMIA",
            "Agriculture Stream LMIA",
            "Open Work Permit",
            "LMIA Reviewed",
            "Reply to PFL Page",
            "Additional Document",
            "Reconsideration",
            "Citizenship",
            "PR Renewal",
            "Work Permit",
            "Category Based Express",
            "Agriculture Agri Food Occupation",
            "In Home Caregiver Program LP",
            "Pathways for Caregiver",
            "Permanent Residence Pathways Caregivers LP",
            "Spouse Inland",
            "Spouse Outland",
            "Same Sex",
          ].map((tag) => (
            <div
              key={tag}
              className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
              onClick={() => handleTagClick(tag)}
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <input
        placeholder="Tag 1"
        name="tag_1"
        value={sectionDataSingle.tag_1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 2"
        name="tag_2"
        value={sectionDataSingle.tag_2}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 3"
        name="tag_3"
        value={sectionDataSingle.tag_3}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <p className={styles.precautionLine}>
        Use the editor below to create and format your blog content.
      </p>
      <ReactQuill
        theme="snow"
        value={sectionDataSingle.blog_content}
        onChange={handleContentChange}
        modules={quillModules}
        formats={quillFormats}
        readOnly={!editMode}
        className={styles.quillEditor}
        placeholder="Write your blog content here..."
      />
      <div className={styles.editIcons}>
        {editMode ? (
          <Image
            src={updateIcon}
            className={styles.updateIcon}
            onClick={handleAddClick}
            alt="Add"
            width={50}
            height={50}
            loading="lazy"
          />
        ) : (
          <Image
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
            width={50}
            height={50}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default AddBlog;