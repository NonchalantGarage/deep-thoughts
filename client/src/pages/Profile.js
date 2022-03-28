import React from "react";

// you need params for specifying paths for routes
import { useParams } from "react-router-dom";

import ThoughtList from "../components/ThoughtList";
// useQuery hook required to use query written in utils dir on the client side
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import FriendList from "../components/FriendList";

const Profile = () => {
  // hook to get username from url
  const { username: userParam } = useParams();

  // useQuery returns obj, loading and data
  // pass in Query Name, object for variables which is the useParams() destructured
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  // delcare user using optional chaining, if data exists add it to data.user obj, if not, create an empty obj

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {user.username}'s profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
