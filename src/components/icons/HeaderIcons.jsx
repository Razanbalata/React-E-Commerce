import React from 'react';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';

function HeaderIcons() {
  return (
    <div className="flex items-center gap-4">
      <WishlistIcon />
      <CartIcon />
      {/* <UserIcon /> */}
    </div>
  );
}

export default HeaderIcons;

