import { AuthProvider } from "@/core/contexts/useAuth";
import { LocalisationProvider } from "@/core/contexts/useLocalisation";
import { store } from "@/core/redux/store.config";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <LocalisationProvider>
        <AuthProvider>{children}</AuthProvider>
      </LocalisationProvider>
    </Provider>
  );
}
