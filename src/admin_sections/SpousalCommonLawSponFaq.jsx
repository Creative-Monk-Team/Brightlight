import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

let SpousalCommonLawSponFaq = () => {
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

  let [FaqData, setFaqData] = useState({
    heading: "",
    q1: "",
    a1: "",
    q2: "",
    a2: "",
    q3: "",
    a3: "",
    q4: "",
    a4: "",
    q5: "",
    a5: "",
    q6: "",
    a6: "",
    q7: "",
    a7: "",
    q8: "",
    a8: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setFaqData({
      ...FaqData,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    if (!FaqData._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(`https://brightlight-node.onrender.com/spouseCommLawSponFaq/${FaqData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FaqData),
    })
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
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/spouseCommLawSponFaq")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setFaqData(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      <input
        placeholder="Faq Title"
        name="heading"
        value={FaqData.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={FaqData.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input value={FaqData.a1 || ""} name="a1" placeholder="Answer 1" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q2 || ""} name="q2" placeholder="Question 2" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a2 || ""} name="a2" placeholder="Answer 2" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q3 || ""} name="q3" placeholder="Question 3" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a3 || ""} name="a3" placeholder="Answer 3" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q4 || ""} name="q4" placeholder="Question 4" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a4 || ""} name="a4" placeholder="Answer 4" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q5 || ""} name="q5" placeholder="Question 5" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a5 || ""} name="a5" placeholder="Answer 5" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q6 || ""} name="q6" placeholder="Question 6" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a6 || ""} name="a6" placeholder="Answer 6" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q7 || ""} name="q7" placeholder="Question 7" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a7 || ""} name="a7" placeholder="Answer 7" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.q8 || ""} name="q8" placeholder="Question 8" onChange={handleInputChange} disabled={!editMode} type="text" />
      <input value={FaqData.a8 || ""} name="a8" placeholder="Answer 8" onChange={handleInputChange} disabled={!editMode} type="text" />
      <div>
        {editMode ? (
          <div className={styles.editIcons}>
            <Image loading="lazy" height={50} width={100}
              src={update}
              className={styles.updateIcon}
              onClick={handleUpdateClick}
              alt="Update"
            />
          </div>

        ) : (
          <div className={styles.editIcons}>
            <Image loading="lazy" height={50} width={100}
              src={editIcon}
              className={styles.editIcon}
              onClick={handleEditClick}
              alt="Edit"
            /></div>
        )}
      </div>
    </div>
  );
};

export default SpousalCommonLawSponFaq;
