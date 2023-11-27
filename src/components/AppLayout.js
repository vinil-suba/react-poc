import Header from '../components/Header'

import Body from '../components/Body';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const userName = useContext(UserContext);
export const AppLayout = () =>  {
    return (
        <div className="conatiner">
            {/* {userName}----------- */}
            <Header/>
            <Body/>
        </div>
    )
};

export default AppLayout;