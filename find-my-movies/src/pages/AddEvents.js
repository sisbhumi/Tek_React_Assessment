import { useState } from "react";
import Records from './allEvents.json';
var file  = "allEvents.json"
function AddEvents(){
    const [event, setEvent] = useState({
        event_name:"",
        user_name:"",
        date:"",
        exact:"true"
    })

    const {event_name, user_name, date }  = event;
    
    const handleChange=(e) =>{
        setEvent({...event, [ e.target.name ]:e.target.value })
    }


    const submitForm = async(e) =>{
        e.preventDefault();
        try{
            let res = await fetch("http://localhost:3030/event",{
                method:"POST",
                body: JSON.stringify({
                    event_name : event.event_name,
                    user_name : event.user_name,
                    date : event.date,
                }),
            });

            let resJson = await res.json();
            if(res.status === 200){
                console.log("Successful");
            }
            else{
                console.log("Some error occurred");
            }
        }
        catch(err){
            console.log(err);
        }
    };
    
    return(
      <form onSubmit ={e => submitForm(e) }>  
        <div className="box_size ">
            <div className="row text-center">
                <div className="col-md-12 text-center">
                    <h1>Add Event</h1>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Event</div>
                <div className="col-md-6">
                    <input type="text" name="event_name" className="form-control"
                    value={event_name} onChange={e=>handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Description</div>
                <div className="col-md-6">
                    <input type="text" name="user_name" className="form-control"
                    value={user_name} onChange={e=>handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Date</div>
                <div className="col-md-6">
                    <input type="date" name="date" className="form-control"
                    value={date} onChange={e=>handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="submit" className="btn btn-warning" name="submit" value="SUBMIT"/>
                </div>
            </div>
            </div>
         
        </form> 
    )
}
export default AddEvents;