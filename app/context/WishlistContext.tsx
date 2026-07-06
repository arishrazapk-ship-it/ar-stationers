"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext<any>(null);

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("wishlist");

    if (data) {
      setWishlist(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function addToWishlist(product: any) {
    if (wishlist.find((item) => item.id === product.id))
      return;

    setWishlist([...wishlist, product]);
  }

  function removeFromWishlist(id: string) {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}