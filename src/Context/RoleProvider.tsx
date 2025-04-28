import { createContext, ReactNode, useContext, useState } from "react";

interface RoleProps {
  role: string | undefined;
  setRole: (role: string) => void;
}

const RoleContext = createContext<RoleProps | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {

    const [role, setRole] = useState<string | undefined>(undefined);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);

  if (!context) {
    throw new Error("Component should be inside the Role Provider");
  }

  return context;
};
