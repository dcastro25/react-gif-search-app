
interface Props{
    searches: string[];

        onLabelClicked: (Term:string)=>void;
}

export function PreviousSearches({searches, onLabelClicked} : Props){
    return(
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map(Term => (
                        <li key = {Term}
                            onClick={() => onLabelClicked (Term)}
                        > {Term}</li>
                    ))
                }
            </ul>
        </div>
    )
}