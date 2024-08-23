import { AuthProvider } from "@/core/contexts/authContext";
import { LocalisationProvider } from "@/core/contexts/localisationContext";
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
