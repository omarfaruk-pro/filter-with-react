import { useState } from "react"
export default function SubjectFilter() {
    const [subjectFilter, setSubjectFilter] = useState("");
    const subjects = [
        "Bangla",
        "English",
        "Physics",
        "Chemistry",
        "Biology",
        "Geography",
        "History",
        "Economics",
        "Political Science",
        "Sociology",
        "Psychology",
        "Mathematics",
        "Quantum Physics",
        "Quantum Chemistry",
    ];
    const filteredSubjects = subjects.filter((subject) =>
        subject.toLowerCase().includes(subjectFilter.toLowerCase())
    );

  return (
    <div className="subject-filter">
        <input
        type="text"
        onChange={(e) => setSubjectFilter(e.target.value)}
        placeholder="Search Subject..."
        />
        <ul>
        {filteredSubjects.map((subject, index) => (
            <li key={index}>
            {subject}
            </li>
        ))}
        </ul>
    </div>
  )
}

