import { Cart } from "lib/types";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { CartProvider } from "./cart/cart-context";
import { Navbar } from "./layout/navbar";

export function Wrapper({ children, currency, cart }: { children: ReactNode, currency: string, cart: Promise<Cart | undefined> }) {
  return <CartProvider cartPromise={cart}>
    <Navbar currency={currency} />
    <main>
      {children}
      <Toaster closeButton />
    </main>
  </CartProvider>
}