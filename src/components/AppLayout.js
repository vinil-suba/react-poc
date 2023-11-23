import Header from '../components/Header'

import Body from '../components/Body';

export const AppLayout = () =>  {
    return (
        <div className="conatiner">
            <Header/>
            <Body/>
        </div>
    )
};

export default AppLayout;