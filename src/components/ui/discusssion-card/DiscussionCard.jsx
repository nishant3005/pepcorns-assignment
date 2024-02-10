import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPen } from '@fortawesome/free-solid-svg-icons';

const DiscussionCard = (props) => {
  return (
    <div className="mt-8 rounded-md border-none shadow-lg">
      <div className="pt-3 px-6 pb-3 font-normal leading-6">
        <div className="flex mb-2 text-base">
          <div>
            <img
              src={props.item.src}
              alt="user img"
              className="w-12 h-12 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col pl-4">
            <div className="font-semibold">{props.item.name}</div>
            <div className="text-[#999]">{props.item.date}</div>
          </div>
        </div>
        <div className="text-left mt-2">{props.item.content}</div>
        <div className="text-[#aaa] flex mt-4 text-[15px]">
          <div className="pr-3">
            <FontAwesomeIcon icon={faHeart} />
            <span className="pl-1">Like</span>
          </div>
          <div className="px-3">
            <FontAwesomeIcon icon={faPen} />
            <span className="pl-1">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
