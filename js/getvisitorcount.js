
	fetch('https://h2w85xcmm0.execute-api.eu-central-1.amazonaws.com/Prod/add')
		.then(() => fetch('https://h2w85xcmm0.execute-api.eu-central-1.amazonaws.com/Prod/count') )
		.then(response => response.json())
		.then((data) => {
			document.getElementById('visitorCount').innerText = data.count
		})
