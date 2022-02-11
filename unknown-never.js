"use strict";
var userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error', 500);
