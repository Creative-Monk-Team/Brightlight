import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import {ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";
let AboutAchievement = () => {
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
  let [sectionDataSingle, setSectionDataSingle] = useState({
    heading: "",
    description1: "",
    achievement1Numbers: "",
    achievement1Heading: "",
    achievement2Numbers: "",
    achievement2Heading: "",
    achievement3Numbers: "",
    achievement3Heading: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/aboutUsAchievementsSection/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
    .then((response) => {
      if (response.status === 413) {
        notifySize();
        throw new Error('Payload too large');
      } else if (!response.ok) {
        notifyError();
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
      .then(() => {
        notifySuccess();
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/aboutUsAchievementsSection")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionDataSingle(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer/>
      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description1"
        value={sectionDataSingle.description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 1 Number"
        name="achievement1Numbers"
        value={sectionDataSingle.achievement1Numbers || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 1 Heading"
        name="achievement1Heading"
        value={sectionDataSingle.achievement1Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 2 Number"
        name="achievement2Numbers"
        value={sectionDataSingle.achievement2Numbers || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 2 Heading"
        name="achievement2Heading"
        value={sectionDataSingle.achievement2Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 3 Number"
        name="achievement3Numbers"
        value={sectionDataSingle.achievement3Numbers || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Achievement 3 Heading"
        name="achievement3Heading"
        value={sectionDataSingle.achievement3Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.editIcons}>
        {editMode ? (
             <Image loading="lazy" height={50} width={100}
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
             <Image loading="lazy" height={50} width={100}
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default AboutAchievement;
