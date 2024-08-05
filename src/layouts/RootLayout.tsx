import { AuthProvider } from "@/core/contexts/useAuth";
import { store } from "@/core/redux/store.config";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}
