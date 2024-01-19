"use strict"

var connection = new signalR.HubConnectionBuilder().withUrl("/chathub").build();

connection.start().then(function () {
    GetAllUsers();
    console.log("Connected");
}).catch(function (err) {
    return console.error(err.toString());
})

connection.on("Connect", function (info) {
    console.log("Connect Work");
    GetAllUsers();
})

connection.on("Disconnect", function (info) {
    console.log("DisConnect Work");
    GetAllUsers();
})


async function SendFollowCall(id) {
    await connection.invoke("SendFollow", id);
}


async function GetMessageCall(receiverId, senderId) {
    await connection.invoke("GetMessage", receiverId, senderId);
}

connection.on("ReceiveNotification", function (id) {
    GetMyRequests();
    GetAllUsers();
    GetMyAndFriendPosts();
})

function GetMessageLiveChatCall(id, id2) {
    connection.invoke("LiveChatCall", id, id2);
}

connection.on("ReceiveMessages", function (receiverId, senderId) {
    GetMessages(receiverId, senderId);
})

connection.on("LiveChatNotification", function (id) {
    UserMessage(id);
})