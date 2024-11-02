import { accountIsSuccess, LoginForm } from '$src/stores/store';

export const accountModal = () => {
	accountIsSuccess.set(null);

	LoginForm.update((form) => {
		form.bookmaker.selected = { value: '', label: '', icon: '' };
		form.login.selected = { value: '', label: '' };
		form.password.selected = { value: '', label: '' };
		return form;
	});
};
