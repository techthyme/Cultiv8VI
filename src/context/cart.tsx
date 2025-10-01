"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/types";

interface CartState {
  products: Product[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { cartId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

interface CartContextType {
  state: CartState;
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
}

const CART_STORAGE_KEY = "shopping_cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const currentProduct = state.products.find(
        (p) => p.id === action.payload.id
      );

      let newProducts: Product[];

      if (!currentProduct) {
        // Add new product
        newProducts = [
          ...state.products,
          {
            ...action.payload,
            cartId: `cart_${Date.now()}`,
            quantity: 1,
          },
        ];
      } else {
        // Update existing product - create NEW object
        newProducts = state.products.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return {
        products: newProducts,
        totalItems: newProducts.reduce(
          (sum, product) => sum + product.quantity,
          0
        ),
        totalPrice: newProducts.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        ),
      };

    case "REMOVE_ITEM":
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        products: filteredItems,
        totalItems: filteredItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: filteredItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };

    case "UPDATE_QUANTITY":
      const updatedItems = state.products
        .map((product) =>
          product.cartId === action.payload.cartId
            ? { ...product, quantity: Math.max(0, action.payload.quantity) }
            : product
        )
        .filter((product) => product.quantity > 0);
      return {
        products: updatedItems,
        totalItems: updatedItems.reduce(
          (sum, product) => sum + product.quantity,
          0
        ),
        totalPrice: updatedItems.reduce(
          (sum, product) => sum + product.price * product.quantity,
          0
        ),
      };

    case "CLEAR_CART":
      return {
        products: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
};

const initialState: CartState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart: CartState = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [state]);

  const addItemToCart = (item: Product) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { cartId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value: CartContextType = {
    state,
    addItemToCart,
    removeItemFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
