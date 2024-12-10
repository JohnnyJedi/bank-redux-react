export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = (quote,character) =>{
    return   {
        type: PUT_QUOTE,
        payload:{
            character,
            quote,
        }
    }
}


export const fetchQuote = () => {
    return dispatch => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res => res.json())
            .then(data => dispatch(putQuote(data.sentence,data.character.name)))
            .catch(() => dispatch(putQuote('Failed to fetch quote data.')));
    }
}