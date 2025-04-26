export interface ProjectProps {
    id: number;
    name: string;
    description?: string;
    deadline?: string;
    experience?: string;
    autor?: string;
    notifications?: boolean;
}

export interface VacancyProps {
    country: string;
    description: string;
    experience?: string;
    field: string;
    id: number;
    name: string;
    project_id: number;
}