export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = (quote,character) => ({
    type: PUT_QUOTE,
    payload:{
        character,
        quote,
    }

});