import { RouteProps } from 'react-router';

export interface RouteModel extends RouteProps {
    path: string;
    exact?: boolean;
    haveHeader: boolean;
}
