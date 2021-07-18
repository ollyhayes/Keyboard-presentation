function createStore(initialState) {
	const subscriptions = new Set();
	let value = initialState;
	return {
		subscribe(callback) {
			subscriptions.add(callback);
			return callback;
		},
		unsubscribe(callback) {
			subscriptions.delete(callback);
		},
		getValue() {
			return value;
		},
		updateValue(update) {
			value = update(value);

			// console.log('Updated value: ', value);

			subscriptions.forEach(subscription =>
				subscription(value));
		}
	};
}

module.exports = {createStore};