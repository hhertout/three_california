import { createContext, ReactNode, useContext, useState } from 'react';

interface IDevContext {
  toggleEffect: boolean;
  handleToggleEffectChange: () => void;
}

const DevContext = createContext<IDevContext>({
  toggleEffect: true,
  handleToggleEffectChange: () => {
  },
});

const DevContextProvider = ({ children }: { children: ReactNode }) => {
  const [toggleEffect, setToggleEffect] = useState(false);
  const handleToggleEffectChange = (): void => {
    setToggleEffect((toggleEffect) => !toggleEffect);
  };
  return <DevContext.Provider value={{
    toggleEffect: toggleEffect,
    handleToggleEffectChange: handleToggleEffectChange,
  }}>{children}</DevContext.Provider>;
};

export default DevContextProvider;

export const useDevContext = () => {
  const { toggleEffect, handleToggleEffectChange } = useContext(DevContext);

  return {toggleEffect, handleToggleEffectChange};
};