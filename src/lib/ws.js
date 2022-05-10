const WebSocket = require('ws').Server;

const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
ws.binaryType="arraybuffer";

export default ws;