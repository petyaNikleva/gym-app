import { SelectedPage } from '@/shared/types';
import React from 'react';

type PageContextType = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

export const PageContext = React.createContext<null | PageContextType>(null);

type Props = {
  children: React.ReactNode;
};

export const PageContextProvider = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = React.useState(SelectedPage.Home);

  return <PageContext.Provider value={{ selectedPage, setSelectedPage }}>{children}</PageContext.Provider>;
};
