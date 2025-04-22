import { createContext } from "react";

export interface StatesType {
    projectsActive: boolean;
    setProjectsActive: (active: boolean) => void;
    createProjectActive: boolean;
    setCreateProjectActive: (active: boolean) => void;
    editProjectActive: boolean;
    setEditProjectActive: (active: boolean) => void;
}

export const StateContext = createContext<StatesType | null>(null);