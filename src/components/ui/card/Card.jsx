import React from 'react';

const Card = ({ name, role, image, bio }) => {
  return (
    <div className="max-w-sm h-80 rounded overflow-hidden shadow-lg text-left">
      <div className="flex">
        <img
          className="w-20 h-20 object-cover rounded-full ml-6"
          src={image}
          alt={`${name}'s profile`}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{role}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{bio}</p>
      </div>
    </div>
  );
};

export default Card;
