import {putQuote} from "../quote/quoteSlice.js";

export const fetchQuote = () => {
    return dispatch => {
        dispatch(putQuote({character:"Loading...",
        quote:"pending..."}))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res => res.json())
            .then(data => dispatch(putQuote({
                character: data.character.name,
                quote: data.sentence,
            })))
            .catch(() => dispatch(putQuote({
                character: "Error",
                quote:'Failed to fetch quote data.'
            })));
    }
}