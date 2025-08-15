import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const CategoryBasedExpressContent = () => {
  const notifySuccess = () => {
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

  const notifyError = () => {
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

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
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

  const [sectionDataSingle, setSectionDataSingle] = useState({
    _id: "",
    heading: "",
    description1: "",
    description2: "",
    whatIsHeading: "",
    whatIsPara: "",
    benefitsHeading: "",
    benefits1: "",
    benefits2: "",
    benefits3: "",
    benefits4: "",
    benefits5: "",
    eligibilityExpressEntryHeading: "",
    eligibilityExpressEntryPara: "",
    eligibilityExpressEntry1: "",
    eligibilityExpressEntry2: "",
    eligibilityExpressEntry3: "",
    eligibilityCriteriaHeading: "",
    eligibilityCriteria1: "",
    eligibilityCriteria2: "",
    eligibilityCriteria3: "",
    eligibilityCriteria4: "",
    eligibilityCriteria5: "",
    eligibilityCriteria6: "",
    eligibleNOCCodesHeading: "",
    eligibleNOCCodes1Occupation: "",
    eligibleNOCCodes1NocCode: "",
    eligibleNOCCodes2Occupation: "",
    eligibleNOCCodes2NocCode: "",
    eligibleNOCCodes3Occupation: "",
    eligibleNOCCodes3NocCode: "",
    eligibleNOCCodes4Occupation: "",
    eligibleNOCCodes4NocCode: "",
    eligibleNOCCodes5Occupation: "",
    eligibleNOCCodes5NocCode: "",
    eligibleNOCCodes6Occupation: "",
    eligibleNOCCodes6NocCode: "",
    eligibleNOCCodes7Occupation: "",
    eligibleNOCCodes7NocCode: "",
    eligibleNOCCodesNote: "",
    drawHistoryHeading: "",
    drawHistoryPara: "",
    howToApplyHeading: "",
    howToApply1: "",
    howToApply2: "",
    howToApply3: "",
    howToApply4: "",
    refusalHeading: "",
    refusal1: "",
    refusal2: "",
    refusal3: "",
    refusal4: "",
    refusal5: "",
    refusal6: "",
    refusal7: "",
    refusal8: "",
    refusal9: "",
    stillNotSureHeading: "",
    stillNotSurePara: "",
    bookAppointmentText: "",
    whyChooseUsHeading: "",
    whyChooseUs1: "",
    whyChooseUs2: "",
    whyChooseUs3: "",
    whyChooseUs4: "",
    faqHeading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    showTestimonials: "",
    showBlogs: "",
    showEligibilityAssessment: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    const payload = {
      heading: sectionDataSingle.heading,
      description1: sectionDataSingle.description1,
      description2: sectionDataSingle.description2,
      whatIsHeading: sectionDataSingle.whatIsHeading,
      whatIsPara: sectionDataSingle.whatIsPara,
      benefitsHeading: sectionDataSingle.benefitsHeading,
      benefitsList: [
        sectionDataSingle.benefits1,
        sectionDataSingle.benefits2,
        sectionDataSingle.benefits3,
        sectionDataSingle.benefits4,
        sectionDataSingle.benefits5,
      ],
      eligibilityExpressEntryHeading: sectionDataSingle.eligibilityExpressEntryHeading,
      eligibilityExpressEntryPara: sectionDataSingle.eligibilityExpressEntryPara,
      eligibilityExpressEntrySteps: [
        sectionDataSingle.eligibilityExpressEntry1,
        sectionDataSingle.eligibilityExpressEntry2,
        sectionDataSingle.eligibilityExpressEntry3,
      ],
      eligibilityCriteriaHeading: sectionDataSingle.eligibilityCriteriaHeading,
      eligibilityCriteriaList: [
        sectionDataSingle.eligibilityCriteria1,
        sectionDataSingle.eligibilityCriteria2,
        sectionDataSingle.eligibilityCriteria3,
        sectionDataSingle.eligibilityCriteria4,
        sectionDataSingle.eligibilityCriteria5,
        sectionDataSingle.eligibilityCriteria6,
      ],
      eligibleNOCCodesHeading: sectionDataSingle.eligibleNOCCodesHeading,
      eligibleNOCCodesList: [
        { occupation: sectionDataSingle.eligibleNOCCodes1Occupation, nocCode: sectionDataSingle.eligibleNOCCodes1NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes2Occupation, nocCode: sectionDataSingle.eligibleNOCCodes2NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes3Occupation, nocCode: sectionDataSingle.eligibleNOCCodes3NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes4Occupation, nocCode: sectionDataSingle.eligibleNOCCodes4NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes5Occupation, nocCode: sectionDataSingle.eligibleNOCCodes5NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes6Occupation, nocCode: sectionDataSingle.eligibleNOCCodes6NocCode },
        { occupation: sectionDataSingle.eligibleNOCCodes7Occupation, nocCode: sectionDataSingle.eligibleNOCCodes7NocCode },
      ],
      eligibleNOCCodesNote: sectionDataSingle.eligibleNOCCodesNote,
      drawHistoryHeading: sectionDataSingle.drawHistoryHeading,
      drawHistoryPara: sectionDataSingle.drawHistoryPara,
      howToApplyHeading: sectionDataSingle.howToApplyHeading,
      howToApplySteps: [
        sectionDataSingle.howToApply1,
        sectionDataSingle.howToApply2,
        sectionDataSingle.howToApply3,
        sectionDataSingle.howToApply4,
      ],
      refusalHeading: sectionDataSingle.refusalHeading,
      refusalList: [
        sectionDataSingle.refusal1,
        sectionDataSingle.refusal2,
        sectionDataSingle.refusal3,
        sectionDataSingle.refusal4,
        sectionDataSingle.refusal5,
        sectionDataSingle.refusal6,
        sectionDataSingle.refusal7,
        sectionDataSingle.refusal8,
        sectionDataSingle.refusal9,
      ],
      stillNotSureHeading: sectionDataSingle.stillNotSureHeading,
      stillNotSurePara: sectionDataSingle.stillNotSurePara,
      bookAppointmentText: sectionDataSingle.bookAppointmentText,
      whyChooseUsHeading: sectionDataSingle.whyChooseUsHeading,
      whyChooseUsList: [
        sectionDataSingle.whyChooseUs1,
        sectionDataSingle.whyChooseUs2,
        sectionDataSingle.whyChooseUs3,
        sectionDataSingle.whyChooseUs4,
      ],
      faqHeading: sectionDataSingle.faqHeading,
      faqs: [
        { question: sectionDataSingle.q1, answer: sectionDataSingle.qa1 },
        { question: sectionDataSingle.q2, answer: sectionDataSingle.qa2 },
        { question: sectionDataSingle.q3, answer: sectionDataSingle.qa3 },
        { question: sectionDataSingle.q4, answer: sectionDataSingle.qa4 },
        { question: sectionDataSingle.q5, answer: sectionDataSingle.qa5 },
      ],
      showTestimonials: sectionDataSingle.showTestimonials,
      showBlogs: sectionDataSingle.showBlogs,
      showEligibilityAssessment: sectionDataSingle.showEligibilityAssessment,
    };

    fetch(
      `https://brightlight-node.onrender.com/categoryBasedExpress/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/categoryBasedExpress")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const doc = data[0];
          setSectionDataSingle({
            _id: doc._id,
            heading: doc.heading || "",
            description1: doc.description1 || "",
            description2: doc.description2 || "",
            whatIsHeading: doc.whatIsHeading || "",
            whatIsPara: doc.whatIsPara || "",
            benefitsHeading: doc.benefitsHeading || "",
            benefits1: doc.benefitsList?.[0] || "",
            benefits2: doc.benefitsList?.[1] || "",
            benefits3: doc.benefitsList?.[2] || "",
            benefits4: doc.benefitsList?.[3] || "",
            benefits5: doc.benefitsList?.[4] || "",
            eligibilityExpressEntryHeading: doc.eligibilityExpressEntryHeading || "",
            eligibilityExpressEntryPara: doc.eligibilityExpressEntryPara || "",
            eligibilityExpressEntry1: doc.eligibilityExpressEntrySteps?.[0] || "",
            eligibilityExpressEntry2: doc.eligibilityExpressEntrySteps?.[1] || "",
            eligibilityExpressEntry3: doc.eligibilityExpressEntrySteps?.[2] || "",
            eligibilityCriteriaHeading: doc.eligibilityCriteriaHeading || "",
            eligibilityCriteria1: doc.eligibilityCriteriaList?.[0] || "",
            eligibilityCriteria2: doc.eligibilityCriteriaList?.[1] || "",
            eligibilityCriteria3: doc.eligibilityCriteriaList?.[2] || "",
            eligibilityCriteria4: doc.eligibilityCriteriaList?.[3] || "",
            eligibilityCriteria5: doc.eligibilityCriteriaList?.[4] || "",
            eligibilityCriteria6: doc.eligibilityCriteriaList?.[5] || "",
            eligibleNOCCodesHeading: doc.eligibleNOCCodesHeading || "",
            eligibleNOCCodes1Occupation: doc.eligibleNOCCodesList?.[0]?.occupation || "",
            eligibleNOCCodes1NocCode: doc.eligibleNOCCodesList?.[0]?.nocCode || "",
            eligibleNOCCodes2Occupation: doc.eligibleNOCCodesList?.[1]?.occupation || "",
            eligibleNOCCodes2NocCode: doc.eligibleNOCCodesList?.[1]?.nocCode || "",
            eligibleNOCCodes3Occupation: doc.eligibleNOCCodesList?.[2]?.occupation || "",
            eligibleNOCCodes3NocCode: doc.eligibleNOCCodesList?.[2]?.nocCode || "",
            eligibleNOCCodes4Occupation: doc.eligibleNOCCodesList?.[3]?.occupation || "",
            eligibleNOCCodes4NocCode: doc.eligibleNOCCodesList?.[3]?.nocCode || "",
            eligibleNOCCodes5Occupation: doc.eligibleNOCCodesList?.[4]?.occupation || "",
            eligibleNOCCodes5NocCode: doc.eligibleNOCCodesList?.[4]?.nocCode || "",
            eligibleNOCCodes6Occupation: doc.eligibleNOCCodesList?.[5]?.occupation || "",
            eligibleNOCCodes6NocCode: doc.eligibleNOCCodesList?.[5]?.nocCode || "",
            eligibleNOCCodes7Occupation: doc.eligibleNOCCodesList?.[6]?.occupation || "",
            eligibleNOCCodes7NocCode: doc.eligibleNOCCodesList?.[6]?.nocCode || "",
            eligibleNOCCodesNote: doc.eligibleNOCCodesNote || "",
            drawHistoryHeading: doc.drawHistoryHeading || "",
            drawHistoryPara: doc.drawHistoryPara || "",
            howToApplyHeading: doc.howToApplyHeading || "",
            howToApply1: doc.howToApplySteps?.[0] || "",
            howToApply2: doc.howToApplySteps?.[1] || "",
            howToApply3: doc.howToApplySteps?.[2] || "",
            howToApply4: doc.howToApplySteps?.[3] || "",
            refusalHeading: doc.refusalHeading || "",
            refusal1: doc.refusalList?.[0] || "",
            refusal2: doc.refusalList?.[1] || "",
            refusal3: doc.refusalList?.[2] || "",
            refusal4: doc.refusalList?.[3] || "",
            refusal5: doc.refusalList?.[4] || "",
            refusal6: doc.refusalList?.[5] || "",
            refusal7: doc.refusalList?.[6] || "",
            refusal8: doc.refusalList?.[7] || "",
            refusal9: doc.refusalList?.[8] || "",
            stillNotSureHeading: doc.stillNotSureHeading || "",
            stillNotSurePara: doc.stillNotSurePara || "",
            bookAppointmentText: doc.bookAppointmentText || "",
            whyChooseUsHeading: doc.whyChooseUsHeading || "",
            whyChooseUs1: doc.whyChooseUsList?.[0] || "",
            whyChooseUs2: doc.whyChooseUsList?.[1] || "",
            whyChooseUs3: doc.whyChooseUsList?.[2] || "",
            whyChooseUs4: doc.whyChooseUsList?.[3] || "",
            faqHeading: doc.faqHeading || "",
            q1: doc.faqs?.[0]?.question || "",
            qa1: doc.faqs?.[0]?.answer || "",
            q2: doc.faqs?.[1]?.question || "",
            qa2: doc.faqs?.[1]?.answer || "",
            q3: doc.faqs?.[2]?.question || "",
            qa3: doc.faqs?.[2]?.answer || "",
            q4: doc.faqs?.[3]?.question || "",
            qa4: doc.faqs?.[3]?.answer || "",
            q5: doc.faqs?.[4]?.question || "",
            qa5: doc.faqs?.[4]?.answer || "",
            showTestimonials: doc.showTestimonials || "",
            showBlogs: doc.showBlogs || "",
            showEligibilityAssessment: doc.showEligibilityAssessment || "",
          });
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
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 1"
        name="description1"
        value={sectionDataSingle.description1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="What Is Heading"
        name="whatIsHeading"
        value={sectionDataSingle.whatIsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What Is Paragraph"
        name="whatIsPara"
        value={sectionDataSingle.whatIsPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionDataSingle.benefitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 5 }, (_, i) => (
        <textarea
          key={`benefits${i + 1}`}
          placeholder={`Benefit ${i + 1}`}
          name={`benefits${i + 1}`}
          value={sectionDataSingle[`benefits${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility for Express Entry Heading"
        name="eligibilityExpressEntryHeading"
        value={sectionDataSingle.eligibilityExpressEntryHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility for Express Entry Paragraph"
        name="eligibilityExpressEntryPara"
        value={sectionDataSingle.eligibilityExpressEntryPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 3 }, (_, i) => (
        <textarea
          key={`eligibilityExpressEntry${i + 1}`}
          placeholder={`Eligibility Express Entry Step ${i + 1}`}
          name={`eligibilityExpressEntry${i + 1}`}
          value={sectionDataSingle[`eligibilityExpressEntry${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility Criteria Heading"
        name="eligibilityCriteriaHeading"
        value={sectionDataSingle.eligibilityCriteriaHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`eligibilityCriteria${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`eligibilityCriteria${i + 1}`}
          value={sectionDataSingle[`eligibilityCriteria${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligible NOC Codes Heading"
        name="eligibleNOCCodesHeading"
        value={sectionDataSingle.eligibleNOCCodesHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 7 }, (_, i) => (
        <>
          <input
            key={`eligibleNOCCodes${i + 1}Occupation`}
            placeholder={`NOC Occupation ${i + 1}`}
            name={`eligibleNOCCodes${i + 1}Occupation`}
            value={sectionDataSingle[`eligibleNOCCodes${i + 1}Occupation`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            key={`eligibleNOCCodes${i + 1}NocCode`}
            placeholder={`NOC Code ${i + 1}`}
            name={`eligibleNOCCodes${i + 1}NocCode`}
            value={sectionDataSingle[`eligibleNOCCodes${i + 1}NocCode`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </>
      ))}
      <textarea
        placeholder="Eligible NOC Codes Note"
        name="eligibleNOCCodesNote"
        value={sectionDataSingle.eligibleNOCCodesNote}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Draw History Heading"
        name="drawHistoryHeading"
        value={sectionDataSingle.drawHistoryHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Draw History Paragraph"
        name="drawHistoryPara"
        value={sectionDataSingle.drawHistoryPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="howToApplyHeading"
        value={sectionDataSingle.howToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`howToApply${i + 1}`}
          placeholder={`How to Apply Step ${i + 1}`}
          name={`howToApply${i + 1}`}
          value={sectionDataSingle[`howToApply${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Common Reasons for Refusal Heading"
        name="refusalHeading"
        value={sectionDataSingle.refusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 9 }, (_, i) => (
        <textarea
          key={`refusal${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`refusal${i + 1}`}
          value={sectionDataSingle[`refusal${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Still Not Sure Heading"
        name="stillNotSureHeading"
        value={sectionDataSingle.stillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph"
        name="stillNotSurePara"
        value={sectionDataSingle.stillNotSurePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Book Appointment Button Text"
        name="bookAppointmentText"
        value={sectionDataSingle.bookAppointmentText}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="whyChooseUsHeading"
        value={sectionDataSingle.whyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`whyChooseUs${i + 1}`}
          placeholder={`Why Choose Us Point ${i + 1}`}
          name={`whyChooseUs${i + 1}`}
          value={sectionDataSingle[`whyChooseUs${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ Heading"
        name="faqHeading"
        value={sectionDataSingle.faqHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 5 }, (_, i) => (
        <>
          <input
            key={`q${i + 1}`}
            placeholder={`Question ${i + 1}`}
            name={`q${i + 1}`}
            value={sectionDataSingle[`q${i + 1}`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            key={`qa${i + 1}`}
            placeholder={`Answer ${i + 1}`}
            name={`qa${i + 1}`}
            value={sectionDataSingle[`qa${i + 1}`]}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </>
      ))}

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>

      <h1 className={styles.faqStartsHeading}>Visibility Controls</h1>

      <div className={styles.testimonialsVisibility}>
        <p>Show Testimonials (Y/N)</p>
        <input
          placeholder="Show Testimonials"
          name="showTestimonials"
          value={sectionDataSingle.showTestimonials}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className={styles.testimonialsVisibility}>
        <p>Show Blogs (Y/N)</p>
        <input
          placeholder="Show Blogs"
          name="showBlogs"
          value={sectionDataSingle.showBlogs}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <div className={styles.testimonialsVisibility}>
        <p>Show Eligibility Assessment (Y/N)</p>
        <input
          placeholder="Show Eligibility Assessment"
          name="showEligibilityAssessment"
          value={sectionDataSingle.showEligibilityAssessment}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <p className={styles.testimonialsDisclamier}>
        Note: Visibility On the Selected Page is totally dependent on the input value above. If you want to display the section, just write "Y" without quotes, anything else will be considered as "N" even "y". If not want to display then just write "N" without quotes.
      </p>

      <div className={styles.editIcons}>
        {editMode ? (
          <Image
            loading="lazy"
            height={50}
            width={100}
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
          <Image
            loading="lazy"
            height={50}
            width={100}
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

export default CategoryBasedExpressContent;