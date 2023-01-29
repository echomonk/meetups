import { useEffect, useState } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const firebaseURL = process.env.REACT_APP_FIREBASE_URL;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${firebaseURL}meetups.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // const meetups = [];

        // for (const key in data) {
        //   const meetup = {
        //     id: key,
        //     ...data[key],
        //   };

        //   meetups.push(meetup);
        // }

        const meetupDataEntries = Object.entries(data);
        const meetups = meetupDataEntries.map(([id, meetupData]) => ({
          id,
          ...meetupData,
        }));

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
