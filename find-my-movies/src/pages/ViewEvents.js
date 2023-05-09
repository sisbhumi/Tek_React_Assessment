import Records from './allEvents.json'
function ViewEvents()
{
    return(
        
        <div classNam="row d-flex justify-content-center">
            <div class="position-absolute top-50 start-50 translate-middle">
                <p className="lead text-center">Your all events appear here!</p>
            </div>
            <div className="col-md-12 text-center">
            <table class="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="row"></th>
                            <th scope="col">Event</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            </tr>
                        </thead> 
            {
                Records && Records.map( record =>{
                return(
                        <tbody>
                            <tr>
                            <th scope="row">{record.id}</th>
                            <td  scope="row">{record.event_name}</td>
                            <td  scope="row">{record.date} </td>
                            <td  scope="row">{record.user_name}</td>
                            </tr>
                        </tbody>
                        
                ) } )
            }
            </table>
            </div>

        </div>
    )
}
export default ViewEvents;