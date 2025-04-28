// App.tsx
import { AuthProvider } from "./Context/AuthProvider";
import AppRoutes from "../src/AppRoutes";
import { RoleProvider } from "./Context/RoleProvider";

const App = () => {
  return (
    <>
      <RoleProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </RoleProvider>
    </>
  );
};

export default App;
