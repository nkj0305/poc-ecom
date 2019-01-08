import React from 'react';
import Calendar from 'react-calendar';
import ProductInfo from './ProductInfo';
import AssemblyInfo from './AssemblyInfo';
import {setLocalData} from '../../utilities/utility';
import appConstants from '../../constants';


class CalenderHolder extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };
    onStartDateChange = date => {
        console.log("startdate", date);
        setLocalData(appConstants.START_TIME, date)
        this.setState({ startDate: date });
    }
    onEndDateChange = date => {
        console.log("enddate", date);
        this.setState({ endDate: date });
        setLocalData(appConstants.END_TIME, date)

    }

    render() {
        const props = {
            minDetail: "year",
            showNavigation: false
        };

        return (
            <div className="row">
               <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  
               <Calendar  {...props} navigationLabel={({ date, view, label }) => `Current view: ${view}, date: ${date.toLocaleDateString()}`} value={this.state.startDate} onChange={this.onStartDateChange} />
               </div>

               <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    
               <Calendar  {...props} navigationLabel={({ date, view, label }) => `Current view: ${view}, date: ${date.toLocaleDateString()}`} value={this.state.endDate} onChange={this.onEndDateChange} />
               </div>



            </div>
        )
    }
}



export default CalenderHolder;