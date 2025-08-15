import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const FrancophoneContent = () => {
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
    FrancophoneHeading: "",
    FrancophonePara: "",
    BenefitsHeading: "",
    BenefitsSubHeading: "",
    BenefitsList1: "",
    BenefitsList2: "",
    BenefitsList3: "",
    BenefitsList4: "",
    BenefitsList5: "",
    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligibilityList1: "",
    EligibilityList2: "",
    EligibilityList3: "",
    EligibilityList4: "",
    FrenchLanguageSubList1: "",
    FrenchLanguageSubList2: "",
    EmpReqHeading: "",
    EmpReqList1: "",
    EmpReqList2: "",
    EmpReqList3: "",
    EmpReqList4: "",
    WorkPerDurHeading: "",
    WorkPerDurSubHead: "",
    WorkPerDurList1: "",
    WorkPerDurList2: "",
    FamilyMemHeading: "",
    FamilyMemSubHead: "",
    FamilyMemList1: "",
    FamilyMemList2: "",
    AppProHeading: "",
    AppProSubHead1: "",
    AppProSubHead1List1: "",
    AppProSubHead1List2: "",
    AppProSubHead2: "",
    AppProSubHead2List1: "",
    AppProSubHead2List2: "",
    AppProSubHead3: "",
    AppProSubHead3List1: "",
    AppProSubHead3List2: "",
    AppProSubHead3List3: "",
    WorkPerRenHeading: "",
    WorkPerRenSubHead: "",
    WorkPerRenList1: "",
    StillNotSureHeading: "",
    StillNotSurePara: "",
    WhyChooseUsHeading: "",
    WhyChooseUsList1: "",
    WhyChooseUsList2: "",
    WhyChooseUsList3: "",
    WhyChooseUsList4: "",
    faq_heading: "",
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
    show_testimonials: "",
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
      FrancophoneHeading: sectionDataSingle.FrancophoneHeading,
      FrancophonePara: sectionDataSingle.FrancophonePara,
      BenefitsHeading: sectionDataSingle.BenefitsHeading,
      BenefitsSubHeading: sectionDataSingle.BenefitsSubHeading,
      BenefitsList: [
        sectionDataSingle.BenefitsList1,
        sectionDataSingle.BenefitsList2,
        sectionDataSingle.BenefitsList3,
        sectionDataSingle.BenefitsList4,
        sectionDataSingle.BenefitsList5,
      ],
      EligibilityHeading: sectionDataSingle.EligibilityHeading,
      EligibilitySubHead: sectionDataSingle.EligibilitySubHead,
      EligibilityList: [
        sectionDataSingle.EligibilityList1,
        sectionDataSingle.EligibilityList2,
        sectionDataSingle.EligibilityList3,
        sectionDataSingle.EligibilityList4,
      ],
      FrenchLanguageSubList: [
        sectionDataSingle.FrenchLanguageSubList1,
        sectionDataSingle.FrenchLanguageSubList2,
      ],
      EmpReqHeading: sectionDataSingle.EmpReqHeading,
      EmpReqList: [
        sectionDataSingle.EmpReqList1,
        sectionDataSingle.EmpReqList2,
        sectionDataSingle.EmpReqList3,
        sectionDataSingle.EmpReqList4,
      ],
      WorkPerDurHeading: sectionDataSingle.WorkPerDurHeading,
      WorkPerDurSubHead: sectionDataSingle.WorkPerDurSubHead,
      WorkPerDurList: [
        sectionDataSingle.WorkPerDurList1,
        sectionDataSingle.WorkPerDurList2,
      ],
      FamilyMemHeading: sectionDataSingle.FamilyMemHeading,
      FamilyMemSubHead: sectionDataSingle.FamilyMemSubHead,
      FamilyMemList: [
        sectionDataSingle.FamilyMemList1,
        sectionDataSingle.FamilyMemList2,
      ],
      AppProHeading: sectionDataSingle.AppProHeading,
      AppProSubHead1: sectionDataSingle.AppProSubHead1,
      AppProSubHead1List: [
        sectionDataSingle.AppProSubHead1List1,
        sectionDataSingle.AppProSubHead1List2,
      ],
      AppProSubHead2: sectionDataSingle.AppProSubHead2,
      AppProSubHead2List: [
        sectionDataSingle.AppProSubHead2List1,
        sectionDataSingle.AppProSubHead2List2,
      ],
      AppProSubHead3: sectionDataSingle.AppProSubHead3,
      AppProSubHead3List: [
        sectionDataSingle.AppProSubHead3List1,
        sectionDataSingle.AppProSubHead3List2,
        sectionDataSingle.AppProSubHead3List3,
      ],
      WorkPerRenHeading: sectionDataSingle.WorkPerRenHeading,
      WorkPerRenSubHead: sectionDataSingle.WorkPerRenSubHead,
      WorkPerRenList: [sectionDataSingle.WorkPerRenList1],
      StillNotSureHeading: sectionDataSingle.StillNotSureHeading,
      StillNotSurePara: sectionDataSingle.StillNotSurePara,
      WhyChooseUsHeading: sectionDataSingle.WhyChooseUsHeading,
      WhyChooseUsList: [
        sectionDataSingle.WhyChooseUsList1,
        sectionDataSingle.WhyChooseUsList2,
        sectionDataSingle.WhyChooseUsList3,
        sectionDataSingle.WhyChooseUsList4,
      ],
      faq_heading: sectionDataSingle.faq_heading,
      faqs: [
        { question: sectionDataSingle.q1, answer: sectionDataSingle.qa1 },
        { question: sectionDataSingle.q2, answer: sectionDataSingle.qa2 },
        { question: sectionDataSingle.q3, answer: sectionDataSingle.qa3 },
        { question: sectionDataSingle.q4, answer: sectionDataSingle.qa4 },
        { question: sectionDataSingle.q5, answer: sectionDataSingle.qa5 },
      ],
      show_testimonials: sectionDataSingle.show_testimonials,
      showBlogs: sectionDataSingle.showBlogs,
      showEligibilityAssessment: sectionDataSingle.showEligibilityAssessment,
    };

    fetch(
      `https://brightlight-node.onrender.com/francoMob/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/francoMob")
      .then((res) => { 
        console.log("Fetched response:", res);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (data && data.length > 0) {
          const doc = data[0];
          setSectionDataSingle({
            _id: doc._id,
            FrancophoneHeading: doc.FrancophoneHeading || "",
            FrancophonePara: doc.FrancophonePara || "",
            BenefitsHeading: doc.BenefitsHeading || "",
            BenefitsSubHeading: doc.BenefitsSubHeading || "",
            BenefitsList1: doc.BenefitsList?.[0] || "",
            BenefitsList2: doc.BenefitsList?.[1] || "",
            BenefitsList3: doc.BenefitsList?.[2] || "",
            BenefitsList4: doc.BenefitsList?.[3] || "",
            BenefitsList5: doc.BenefitsList?.[4] || "",
            EligibilityHeading: doc.EligibilityHeading || "",
            EligibilitySubHead: doc.EligibilitySubHead || "",
            EligibilityList1: doc.EligibilityList?.[0] || "",
            EligibilityList2: doc.EligibilityList?.[1] || "",
            EligibilityList3: doc.EligibilityList?.[2] || "",
            EligibilityList4: doc.EligibilityList?.[3] || "",
            FrenchLanguageSubList1: doc.FrenchLanguageSubList?.[0] || "",
            FrenchLanguageSubList2: doc.FrenchLanguageSubList?.[1] || "",
            EmpReqHeading: doc.EmpReqHeading || "",
            EmpReqList1: doc.EmpReqList?.[0] || "",
            EmpReqList2: doc.EmpReqList?.[1] || "",
            EmpReqList3: doc.EmpReqList?.[2] || "",
            EmpReqList4: doc.EmpReqList?.[3] || "",
            WorkPerDurHeading: doc.WorkPerDurHeading || "",
            WorkPerDurSubHead: doc.WorkPerDurSubHead || "",
            WorkPerDurList1: doc.WorkPerDurList?.[0] || "",
            WorkPerDurList2: doc.WorkPerDurList?.[1] || "",
            FamilyMemHeading: doc.FamilyMemHeading || "",
            FamilyMemSubHead: doc.FamilyMemSubHead || "",
            FamilyMemList1: doc.FamilyMemList?.[0] || "",
            FamilyMemList2: doc.FamilyMemList?.[1] || "",
            AppProHeading: doc.AppProHeading || "",
            AppProSubHead1: doc.AppProSubHead1 || "",
            AppProSubHead1List1: doc.AppProSubHead1List?.[0] || "",
            AppProSubHead1List2: doc.AppProSubHead1List?.[1] || "",
            AppProSubHead2: doc.AppProSubHead2 || "",
            AppProSubHead2List1: doc.AppProSubHead2List?.[0] || "",
            AppProSubHead2List2: doc.AppProSubHead2List?.[1] || "",
            AppProSubHead3: doc.AppProSubHead3 || "",
            AppProSubHead3List1: doc.AppProSubHead3List?.[0] || "",
            AppProSubHead3List2: doc.AppProSubHead3List?.[1] || "",
            AppProSubHead3List3: doc.AppProSubHead3List?.[2] || "",
            WorkPerRenHeading: doc.WorkPerRenHeading || "",
            WorkPerRenSubHead: doc.WorkPerRenSubHead || "",
            WorkPerRenList1: doc.WorkPerRenList?.[0] || "",
            StillNotSureHeading: doc.StillNotSureHeading || "",
            StillNotSurePara: doc.StillNotSurePara || "",
            WhyChooseUsHeading: doc.WhyChooseUsHeading || "",
            WhyChooseUsList1: doc.WhyChooseUsList?.[0] || "",
            WhyChooseUsList2: doc.WhyChooseUsList?.[1] || "",
            WhyChooseUsList3: doc.WhyChooseUsList?.[2] || "",
            WhyChooseUsList4: doc.WhyChooseUsList?.[3] || "",
            faq_heading: doc.faq_heading || "",
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
            show_testimonials: doc.show_testimonials || "",
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
        placeholder="Francophone Mobility Program Heading"
        name="FrancophoneHeading"
        value={sectionDataSingle.FrancophoneHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Francophone Program Description"
        name="FrancophonePara"
        value={sectionDataSingle.FrancophonePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenefitsHeading"
        value={sectionDataSingle.BenefitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits Subheading"
        name="BenefitsSubHeading"
        value={sectionDataSingle.BenefitsSubHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 5 }, (_, i) => (
        <textarea
          key={`BenefitsList${i + 1}`}
          placeholder={`Benefit ${i + 1}`}
          name={`BenefitsList${i + 1}`}
          value={sectionDataSingle[`BenefitsList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Subheading"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`EligibilityList${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`EligibilityList${i + 1}`}
          value={sectionDataSingle[`EligibilityList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <textarea
        placeholder="French Language Requirement 1"
        name="FrenchLanguageSubList1"
        value={sectionDataSingle.FrenchLanguageSubList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="French Language Requirement 2"
        name="FrenchLanguageSubList2"
        value={sectionDataSingle.FrenchLanguageSubList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Employer Requirements Heading"
        name="EmpReqHeading"
        value={sectionDataSingle.EmpReqHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`EmpReqList${i + 1}`}
          placeholder={`Employer Requirement ${i + 1}`}
          name={`EmpReqList${i + 1}`}
          value={sectionDataSingle[`EmpReqList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Work Permit Duration Heading"
        name="WorkPerDurHeading"
        value={sectionDataSingle.WorkPerDurHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Permit Duration Subheading"
        name="WorkPerDurSubHead"
        value={sectionDataSingle.WorkPerDurSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`WorkPerDurList${i + 1}`}
          placeholder={`Work Permit Duration Criterion ${i + 1}`}
          name={`WorkPerDurList${i + 1}`}
          value={sectionDataSingle[`WorkPerDurList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Family Members Heading"
        name="FamilyMemHeading"
        value={sectionDataSingle.FamilyMemHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Family Members Subheading"
        name="FamilyMemSubHead"
        value={sectionDataSingle.FamilyMemSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`FamilyMemList${i + 1}`}
          placeholder={`Family Member Option ${i + 1}`}
          name={`FamilyMemList${i + 1}`}
          value={sectionDataSingle[`FamilyMemList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Application Process Heading"
        name="AppProHeading"
        value={sectionDataSingle.AppProHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Subheading 1"
        name="AppProSubHead1"
        value={sectionDataSingle.AppProSubHead1}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`AppProSubHead1List${i + 1}`}
          placeholder={`Application Process Subheading 1 List ${i + 1}`}
          name={`AppProSubHead1List${i + 1}`}
          value={sectionDataSingle[`AppProSubHead1List${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <textarea
        placeholder="Application Process Subheading 2"
        name="AppProSubHead2"
        value={sectionDataSingle.AppProSubHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`AppProSubHead2List${i + 1}`}
          placeholder={`Application Process Subheading 2 List ${i + 1}`}
          name={`AppProSubHead2List${i + 1}`}
          value={sectionDataSingle[`AppProSubHead2List${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <textarea
        placeholder="Application Process Subheading 3"
        name="AppProSubHead3"
        value={sectionDataSingle.AppProSubHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 3 }, (_, i) => (
        <textarea
          key={`AppProSubHead3List${i + 1}`}
          placeholder={`Application Process Subheading 3 List ${i + 1}`}
          name={`AppProSubHead3List${i + 1}`}
          value={sectionDataSingle[`AppProSubHead3List${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Work Permit Renewals Heading"
        name="WorkPerRenHeading"
        value={sectionDataSingle.WorkPerRenHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Permit Renewals Subheading"
        name="WorkPerRenSubHead"
        value={sectionDataSingle.WorkPerRenSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Permit Renewals List"
        name="WorkPerRenList1"
        value={sectionDataSingle.WorkPerRenList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure? Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure? Paragraph"
        name="StillNotSurePara"
        value={sectionDataSingle.StillNotSurePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading"
        value={sectionDataSingle.WhyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`WhyChooseUsList${i + 1}`}
          placeholder={`Why Choose Us Point ${i + 1}`}
          name={`WhyChooseUsList${i + 1}`}
          value={sectionDataSingle[`WhyChooseUsList${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>
      <input
        placeholder="FAQ Heading"
        name="faq_heading"
        value={sectionDataSingle.faq_heading}
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
          name="show_testimonials"
          value={sectionDataSingle.show_testimonials}
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

export default FrancophoneContent;