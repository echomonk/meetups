import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();

  function handleAddMeetup(meetupData) {
    fetch(
      "https://react-meetups-941e9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
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
