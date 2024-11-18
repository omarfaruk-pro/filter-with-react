import { useState } from 'react'

export default function StudentFilter() {
    const [studentFilter, setStudentFilter] = useState("");
    const students = [
        { name: "Omar Faruk", email: "omarf01851@gmail.com", subject: "Physics" },
        { name: "Rahim Uddin", email: "rahim.uddin123@gmail.com", subject: "Chemistry" },
        { name: "Sara Islam", email: "sara.islam789@gmail.com", subject: "Mathematics" },
        { name: "Amina Khatun", email: "amina.khatun456@gmail.com", subject: "Biology" },
        { name: "Kamal Hossain", email: "kamal.hossain@gmail.com", subject: "Computer Science" },
        { name: "Fatema Begum", email: "fatema.begum001@gmail.com", subject: "English Literature" },
        { name: "Tariq Hasan", email: "tariq.hasan999@gmail.com", subject: "History" },
        { name: "Sadia Ahmed", email: "sadia.ahmed56@gmail.com", subject: "Philosophy" },
        { name: "Rakibul Islam", email: "rakibul.islam786@gmail.com", subject: "Economics" },
        { name: "Sumaiya Akter", email: "sumaiya.akter78@gmail.com", subject: "Political Science" },
        { name: "Fahim Rahman", email: "fahim.rahman77@gmail.com", subject: "Sociology" },
        { name: "Arman Ali", email: "arman.ali654@gmail.com", subject: "Psychology" },
        { name: "Nadia Karim", email: "nadia.karim23@gmail.com", subject: "Statistics" },
        { name: "Hasan Mahmud", email: "hasan.mahmud89@gmail.com", subject: "Geography" },
        { name: "Shamima Sultana", email: "shamima.sultana02@gmail.com", subject: "Anthropology" },
        { name: "Abdullah Al Mamun", email: "abdullahalmamun@gmail.com", subject: "English" },
      ];
    const filteredStudents = students.filter((student) =>
        `${student.name} ${student.email} ${student.subject}`
          .toLowerCase()
          .includes(studentFilter.toLowerCase())
      );
  return (
    <div className="user-filter">
        <input
          type="text"
          placeholder="Search Student..."
          onChange={(e) => setStudentFilter(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
