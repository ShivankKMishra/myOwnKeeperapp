
function Cards(props){


function handleDelete(event){
props.deleteCard(props.index)

}

    return(<div className="cards">

        <div>
        <h3>{props.title}</h3>
        </div>

        <div>{props.note}</div>
        <button onClick={ handleDelete}>Delete</button>
    </div>)
}
export default Cards;
