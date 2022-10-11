interface listenerFunction {
	(data: any): any;
}

function listenToSignal(eventName: string, listener: listenerFunction) {
	document.addEventListener(eventName, listener);
}

function notListenToSignal(eventName: string, listener: listenerFunction) {
	document.removeEventListener(eventName, listener);
}

function fireSignal(eventName: string, data: any) {
	const event = new CustomEvent(eventName, { detail: data });
	document.dispatchEvent(event);
}

export { fireSignal, listenToSignal, notListenToSignal };
