import NavBarMain from '../components/NavBar';
import { Outlet } from 'react-router-dom';

export function LayoutPublic() {
    return (
        <>
            <NavBarMain />
            <main>
                <Outlet />
            </main>
        </>
    )
}