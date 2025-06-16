import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [Activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/Activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(Activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivities(Activities.filter((x) => x.id !== id));
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        Activities.map((x) => (x.id === activity.id ? activity : x))
      );
    } else {
      const newActivity = { ...activity, id: Activities.length.toString() };
      setSelectedActivity(newActivity);
      setActivities([...Activities, newActivity]);
    }
    setEditMode(false);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <CssBaseline />
        <NavBar openForm={handleOpenForm} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          {/* <Typography variant="h3">Reactivities</Typography> */}
          <ActivityDashboard
            activities={Activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
            submitForm={handleSubmitForm}
            deleteActivity={handleDelete}
          />
        </Container>
      </Box>
    </>
  );
}

export default App;
