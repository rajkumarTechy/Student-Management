// AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";

import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Students/Overview";
import Assignments from "./Components/Students/Assignments";
import Circular from "./Components/Students/Circular";
import Approvals from "./Components/Students/Approvals";
import Internalmarks from "./Components/Students/Internalmarks";
import Notes from "./Components/Students/Notes";
import SemesterResults from "./Components/Students/SemesterResults";
import Timetable from "./Components/Students/Timetable";
import Events from "./Components/Students/Events";

///Admins
import OverviewAdmin from "./Components/Admin/OverviewAdmin";
import StudentsList from "./Components/Admin/StudentsList";
import TeachersList from "./Components/Admin/TeachersList";
import AssignmentList from "./Components/Admin/AssignmentList";
import InternalMarks from "./Components/Admin/InternalMarks";
import SemesterResultsAdmin from "./Components/Admin/SemesterResultsAdmin";
import NotesAdmin from "./Components/Admin/NotesAdmin";
import CircularsAdmin from "./Components/Admin/CircularsAdmin";
import EventsAdmin from "./Components/Admin/EventsAdmin";
import TimetableAdmin from "./Components/Admin/TimetableAdmin";

const AppRoutes = () => {
  const { isLoggedin } = useAuth();

  return (
    <div>
      {isLoggedin && <Sidebar />}
      <div className={isLoggedin ? "ml-64" : ""}>
        {isLoggedin && <Navbar />}
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="cirular" element={<Circular />} />
          <Route path="results" element={<SemesterResults />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="internals" element={<Internalmarks />} />
          <Route path="notes" element={<Notes />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="events" element={<Events />} />
          <Route path="/" element={<Login />} />

          {/* Admins */}
          <Route path="/admin/students" element={<StudentsList />} />
          <Route path="/admin/teachers" element={<TeachersList />} />
          <Route path="/admin/assignments" element={<AssignmentList />} />
          <Route path="/admin/internalmarks" element={<InternalMarks />} />
          <Route
            path="/admin/semesterresults"
            element={<SemesterResultsAdmin />}
          />
          <Route path="/admin/notes" element={<NotesAdmin />} />
          <Route path="/admin/circular" element={<CircularsAdmin />} />
          <Route path="/admin/events" element={<EventsAdmin />} />
          <Route path="/admin/timetable" element={<TimetableAdmin />} />
          <Route path="/admin/overview" element={<OverviewAdmin />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
