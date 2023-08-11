"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
  const [isItemAdded, setIsItemAdded] = useState(false);

  const getCart = () => {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    return cart;
  };

  function addToCart(product) {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    isItemAddedToCart(product);
    router.refresh();
  }

  function removeFromCart(product) {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    isItemAddedToCart(product);
    router.refresh();
  }

  function isItemAddedToCart(product) {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    cart = cart.filter((item) => item.id === product.id);
    if (cart.length > 0) {
      setIsItemAdded(true);
      return;
    }

    setIsItemAdded(false);
  }

  function cartCount() {
    let cart = [];

    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    return cart.length;
  }

  function cartTotal() {
    let total = 0;
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    }

    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      total += element.price;
    }
    return total;
  }

  function cleanCart() {
    localStorage.removeItem("cart");
    router.refresh();
  }

  const exposed = {
    isItemAdded,
    getCart,
    addToCart,
    removeFromCart,
    isItemAddedToCart,
    cartCount,
    cartTotal,
    cleanCart,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCart = () => useContext(Context);

export default Provider;