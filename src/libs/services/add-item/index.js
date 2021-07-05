import http from '../../config'

export const addNewItem = (file, onUploadProgress) => {
	let formData = new FormData();
	formData.append("avatar", file);
	for (const feild in onUploadProgress) {
		formData.append(`${feild}`, onUploadProgress[feild]);
	}
	return http.post("api/add-product", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	}).then((res) => {
		console.log('respon of api addNewItem', res);
	}).catch(e => {
		console.log('err of api error', e);
	});
};