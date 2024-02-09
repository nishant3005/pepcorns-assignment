import React from 'react';

const NavbarItem = (props) => {
  return (
    <>
      {props.content === 'Signup' ? (
        <div className="text-[#1A1A1A] pr-0 cursor-pointer">
          {props.content}
        </div>
      ) : (
        <>
          <div className="text-[#1A1A1A] pr-8 cursor-pointer">
            {props.content}
          </div>
        </>
      )}
    </>
  );
};

export default NavbarItem;
