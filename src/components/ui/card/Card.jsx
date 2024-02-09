import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col w-3/4 p-3 bg-[#F7F7F7] rounded-md mr-4">
        <div className="flex">
          <div className="rounded-full">
            <img src={props.item.src} alt={`${props.item.title}'s img`} />
          </div>

          <div className="text-lg">
            <div className="">{props.item.title}</div>
            <div className="">{props.item.name}</div>
          </div>
        </div>
        <div className="text-md">{props.item.about}</div>
      </div>
    </>
  );
};

export default Card;
