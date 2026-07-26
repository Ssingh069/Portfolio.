import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// 👇 EDIT THIS to change your resumes. Add/remove entries freely.
//    "file" is the path to a PDF inside the /public folder.
export const resumes = [
  { label: "AI / ML Engineer", file: "/saurabh-ai-ml-resume.pdf" },
  { label: "Frontend Developer", file: "/saurabh-frontend-resume.pdf" },
];

// A reusable "Resume ▾" button that opens a dropdown of resume choices.
// - triggerClassName: styling for the button (so it matches each spot on the page)
// - icon: optional icon shown before the word "Resume"
const ResumeMenu = ({ triggerClassName = "retro-btn", icon = null }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the dropdown when you click anywhere outside of it.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={triggerClassName}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {icon}
        Resume
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-retro-card border-2 border-retro-ink shadow-retro z-50">
          {resumes.map((resume) => (
            <a
              key={resume.file}
              href={resume.file}
              download
              onClick={() => setOpen(false)}
              className="block px-4 py-3 font-display text-sm uppercase tracking-tight border-b-2 border-retro-ink last:border-b-0 hover:bg-retro-yellow transition-colors"
            >
              {resume.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeMenu;
