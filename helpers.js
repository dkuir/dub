/*


*/

function successfullMessage(msg) {
    return "✅ *T-REX*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *T-REX*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *T-REX*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
