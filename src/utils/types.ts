import { ReactNode } from 'react';

export type Category = {
     id: string;
     name: string;
     icon: ReactNode;
     count: number;
};

export type Note = {
     id: string;
     title: string;
     content: string;
     category: string;
     date: string;
     starred: boolean;
};