import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();
  const firebaseURL = process.env.REACT_APP_FIREBASE_URL;
  function handleAddMeetup(meetupData) {
    fetch(`${firebaseURL}meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1> Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
