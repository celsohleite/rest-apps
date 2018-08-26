import * as net from "net";

export class Network {
  static checkPortInUse(port: number, callback: { (status: boolean): void }) {
    //AppLog.debug("checkPortInUse: ", port);
    let server = net.createServer(function(socket) {
      socket.write("Echo server\r\n");
      socket.pipe(socket);
    });

    server.listen(port, "127.0.0.1");

    server.on("error", function(e) {
      //AppLog.debug("checkPortInUse.error: ", port);
      callback(false);
    });

    server.on("listening", function(e) {
      //AppLog.debug("checkPortInUse.listening: ", port);
      server.close();
      callback(true);
    });
  }
}
