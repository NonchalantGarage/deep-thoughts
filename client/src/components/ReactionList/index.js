import React from 'react';
import { Link } from 'react-router-dom';

// destructured props as an array of reactions
const ReactionList = ({ reactions }) => {
  return (
    //   card containers
    <div className="card mb-3">
  <div className="card-header">
      {/* Reaction Title */}
    <span className="text-light">Reactions</span>
  </div>
  <div className="card-body">
      {/* if reactions is true/exist for each reaction, render with key  */}
    {reactions &&
      reactions.map(reaction => (
        <p className="pill mb-3" key={reaction._id}>
          {reaction.reactionBody} {'// '}
          {/* Link adds a clickable link to profile path with username */}
          <Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
            {reaction.username} on {reaction.createdAt}
          </Link>
        </p>
      ))}
  </div>
</div>
  );
};

export default ReactionList;