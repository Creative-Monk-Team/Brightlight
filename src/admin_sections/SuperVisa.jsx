// ✅ Updated SuperVisa.jsx synced with SuperVisa.js schema

import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Image from "next/image";

const SuperVisaContent = () => {
  const notifySuccess = () => {
    toast.success("Success", { position: "top-center", autoClose: 3000, transition: Bounce });
  };
  const notifyError = () => {
    toast.error("Request Rejected, Please try again later.", { position: "top-center", autoClose: 3000, transition: Bounce });
  };
  const notifySize = () => {
    toast.error("Large Image Size Received.", { position: "top-center", autoClose: 3000, transition: Bounce });
  };

  const [sectionDataSingle, setSectionDataSingle] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => setEditMode(true);

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) return;

    fetch(`https://brightlight-node.onrender.com/superVisa/${sectionDataSingle._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sectionDataSingle),
    })
      .then((res) => {
        if (res.status === 413) { notifySize(); throw new Error("Payload too large"); }
        else if (!res.ok) { notifyError(); throw new Error("Request failed"); }
        return res.json();
      })
      .then(() => { notifySuccess(); setEditMode(false); })
      .catch((err) => { notifyError(); console.error(err); });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/superVisa")
      .then((res) => res.json())
      .then((data) => { if (data?.length) setSectionDataSingle(data[0]); console.log("Fetched data:", data); })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  const renderField = (label, name, type = "input") => {
    const Tag = type === "textarea" ? "textarea" : "input";
    return (
      <div className={styles.fieldGroup}>
        <label>{label}</label>
        <Tag
          placeholder={label}
          name={name}
          value={sectionDataSingle[name] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
          className={styles.inputField}
        />
      </div>
    );
  };

  const fields = [
    ["Super Visa Heading", "superVisaHeading"],
    ["Super Visa Paragraph", "superVisaPara", "textarea"],
    ["Question", "question"],
    ["Answer", "answer", "textarea"],
    ["Super Visa Tab Heading", "SuperVisaTabHeading"],
    ["Super Visa Tab Sub Heading", "SuperVisaTabSubHead"],
    ["Super Visa Tab Sub Heading 2", "SuperVisaTabSubHead2"],
    ["Table Heading: Family Size", "SupVTabHead1"],
    ["1 person", "SupVTabHead1P1"],
    ["2 persons", "SupVTabHead1P2"],
    ["3 persons", "SupVTabHead1P3"],
    ["4 persons", "SupVTabHead1P4"],
    ["5 persons", "SupVTabHead1P5"],
    ["6 persons", "SupVTabHead1P6"],
    ["7 or more", "SupVTabHead1P7"],
    ["Each additional person", "SupVTabHead1P8"],
    ["Table Heading: Minimum Income", "SupVTabHead2"],
    ["Amount 1", "SupVTabHead2P1"],
    ["Amount 2", "SupVTabHead2P2"],
    ["Amount 3", "SupVTabHead2P3"],
    ["Amount 4", "SupVTabHead2P4"],
    ["Amount 5", "SupVTabHead2P5"],
    ["Amount 6", "SupVTabHead2P6"],
    ["Amount 7", "SupVTabHead2P7"],
    ["Amount 8", "SupVTabHead2P8"],
    ["Super Visa Table Footer Note", "SuperVisaTabFooter", "textarea"],
    ["How to Apply Heading", "WhoisCountedHeading"],
    ["How to Apply Sub Heading", "WhoisCountedSubHead", "textarea"],
    ["Sponsor (You)", "wc1"],
    ["Spouse or partner", "wc2"],
    ["Dependent children", "wc3"],
    ["Applicants (Parents/Grandparents)", "wc4"],
    ["Past sponsored persons", "wc5"],
    ["Children in shared custody", "wc6"],
    ["Who is Counted Footer", "WhoisCountedFooter", "textarea"],
    ["Key Super Visa Benefits Heading", "BenifitsHeading"],
    ["Benefit 1", "b1"],
    ["Benefit 2", "b2"],
    ["Benefit 3", "b3"],
    ["Benefit 4", "b4"],
    ["Benefit 5", "b5"],
    ["Benefit 6", "b6"],
    ["Super Visa vs PGP Heading", "SuperVisaPgpHeading"],
    ["PGP Table: Feature", "SuperVisaPgpHead1"],
    ["PGP Table: Super Visa", "SuperVisaPgpHead2"],
    ["PGP Table: PGP", "SuperVisaPgpHead3"],
    ["PGP Row: Status", "SuperVisaPgpHead1d1"],
    ["PGP Row: Duration", "SuperVisaPgpHead1d2"],
    ["PGP Row: Work/benefits", "SuperVisaPgpHead1d3"],
    ["PGP Row: Processing", "SuperVisaPgpHead1d4"],
    ["Super Visa Values: Visitor", "SuperVisaPgpHead2d1"],
    ["Up to 5 years", "SuperVisaPgpHead2d2"],
    ["No work", "SuperVisaPgpHead2d3"],
    ["Year-round", "SuperVisaPgpHead2d4"],
    ["PR Values: Permanent Resident", "SuperVisaPgpHead3d1"],
    ["Unlimited duration", "SuperVisaPgpHead3d2"],
    ["Work allowed", "SuperVisaPgpHead3d3"],
    ["Lottery system", "SuperVisaPgpHead3d4"],
    ["Documents to Prove Income Heading", "DocstoProveHeading"],
    ["Income Proof Paragraph", "DocstoProvePara", "textarea"],
    ["CRA Notice of Assessment (NOA)", "dtp1"],
    ["T4 and T1 slips", "dtp2"],
    ["Pay stubs (12 months)", "dtp3"],
    ["Employer confirmation letter", "dtp4"],
    ["Bank statements", "dtp5"],
    ["Business/self-employment income", "dtp6"],
    ["Pension/investment statements", "dtp7"],
    ["Docs Footer", "DocstoProveFooter", "textarea"],
    ["Not Sure Heading", "NotSureHeading01"],
    ["Not Sure Paragraph", "NotSurePara", "textarea"],
    ["Not Sure Point 1", "ns1"],
    ["Not Sure Point 2", "ns2"],
    ["Not Sure Point 3", "ns3"],
    ["Talk to Expert Heading", "TalktoSvHeading"],
    ["Talk to Expert Para", "TalktoSvPara1", "textarea"],
    ["FAQ's Heading", "faq_heading"],
    ["Question 1", "q1"],
    ["Answer 1", "qa1", "textarea"],
    ["Question 2", "q2"],
    ["Answer 2", "qa2", "textarea"],
    ["Question 3", "q3"],
    ["Answer 3", "qa3", "textarea"],
    ["Question 4", "q4"],
    ["Answer 4", "qa4", "textarea"],
    ["Question 5", "q5"],
    ["Answer 5", "qa5", "textarea"],
    ["Question 6", "q6"],
    ["Answer 6", "qa6", "textarea"],
    ["Question 7", "q7"],
    ["Answer 7", "qa7", "textarea"],
    ["Question 8", "q8"],
    ["Answer 8", "qa8", "textarea"],
    ["Question 9", "q9"],
    ["Answer 9", "qa9", "textarea"],
    ["Question 10", "q10"],
    ["Answer 10", "qa10", "textarea"],
    ["Show Testimonials", "show_testimonials"],
  ];

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      {fields.map(([label, name, type]) => renderField(label, name, type))}

      <div className={styles.editIcons}>
        {editMode ? (
          <Image height={50} width={100} src={update} onClick={handleUpdateClick} className={styles.updateIcon} alt="Update" />
        ) : (
          <Image height={50} width={100} src={editIcon} onClick={handleEditClick} className={styles.editIcon} alt="Edit" />
        )}
      </div>
    </div>
  );
};

export default SuperVisaContent;
