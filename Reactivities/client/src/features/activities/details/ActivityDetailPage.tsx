import { Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSideBar from "./ActivityDetailSideBar";

export default function ActivityDetail() {
  // const { activities } = useActivities();
  // const activity = activities?.find((x) => x.id === selectedActivity.id);



  const navigate = useNavigate();
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  if (!activity) return <Typography>Activity not Found</Typography>;

  //const activity = {} as Activity;
  if (!activity) return <Typography>Loading....</Typography>;
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity}/>
        <ActivityDetailChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailSideBar />
      </Grid>
    </Grid>
  );
}
