import React from 'react';
import Overview from './Overview';
import FeedbackTable from './FeedbackTable';

const DashboardHome = () => {
    return (
        <div>
           <Overview/>
           <FeedbackTable/>
        </div>
    );
};

export default DashboardHome;