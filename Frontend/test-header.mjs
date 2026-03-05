process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function run() {
	try {
		const url = `https://localhost:44356/umbraco/delivery/api/v2/content/items?filter=contentType:header&expand=properties[$all]`;
		console.log('Fetching', url);
		const res = await fetch(url);
		console.log('Status:', res.status);
		const text = await res.text();
		console.log('Body:', text);
	} catch (e) {
		console.error(e);
	}
}
run();
