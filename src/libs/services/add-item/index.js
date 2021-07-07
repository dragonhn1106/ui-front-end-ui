import {httpFile} from '../../config'

export const addNewItem = (file, onUploadProgress) => {
	let formData = new FormData();
	formData.append("avatar", file);
	for (const feild in onUploadProgress) {
		formData.append(`${feild}`, onUploadProgress[feild]);
	}
	return httpFile.post("api/add-product", formData, {
	}).then((res) => {
		console.log('respon of api addNewItem', res);
	}).catch(e => {
		console.log('err of api error', e);
	});
};