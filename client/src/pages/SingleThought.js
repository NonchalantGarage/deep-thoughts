import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_THOUGHT } from "../utils/queries";
import ReactionList from '../components/ReactionList';


const SingleThought = (props) => {


  // hook to get id from url

  const { id: thoughtId } = useParams();

  // useQuery returns obj, loading and data
  // pass in Query Name, object for variables which is the useParams() destructured  
  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thought.username}
          </span>{" "}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>
      {/* if reaction count number is more than zero short circuit render ReactionList component 
      with the reactions props being each reaction inside thought */}
      {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}

    </div>
  );
};

export default SingleThought;
