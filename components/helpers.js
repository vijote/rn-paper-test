export const capitalize = (text) => {
    let formattedText = text.charAt(0).toUpperCase() + text.slice(1,text.length)
    return formattedText;
}