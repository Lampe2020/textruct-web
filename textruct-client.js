const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("textruct");

dc.onmessage = (event) => {
    console.log(`received: ${event.data}`);
};

dc.onopen = () => {
    console.log("datachannel open");
};

dc.onclose = () => {
    console.log("datachannel close");
};

async function makeCall() {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]} // Kanske använda stun:stun.services.mozilla.com:3478
    const peerConnection = new RTCPeerConnection(configuration);
    signalingChannel.addEventListener('message', async message => {
        if (message.answer) {
            const remoteDesc = new RTCSessionDescription(message.answer);
            await peerConnection.setRemoteDescription(remoteDesc);
        }
    });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    signalingChannel.send({'offer': offer});
}