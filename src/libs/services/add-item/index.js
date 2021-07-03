import http from '../../config'

export const addNewItem = (file, onUploadProgress) => {
	let formData = new FormData();
	console.log('file-------', file);
	formData.append("file", file);
	return http.post("/products", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
		onUploadProgress,
	}).then((res) => {
		console.log('respon of api addNewItem', res);
	}).catch(e => {
		console.log('err of api error', e);
	});
};