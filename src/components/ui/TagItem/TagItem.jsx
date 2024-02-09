import React from 'react';

const TagItem = (props) => {
  return (
    <div>
      <div className="bg-[#EEEEEE] rounded-[3px] border-[#eee] px-[5px] py-[6px] mr-[6px] text-xs text-[#5F5F5F] uppercase">
        {props.item}
      </div>
    </div>
  );
};

export default TagItem;
