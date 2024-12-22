import axios from 'axios';
import toast from 'svelte-french-toast';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';

import { getAccessToken } from './auth-token.service';

class ChangePassword {
	async changePassword(oldPassword: string, newPassword: string): Promise<void> {
		const changeToast = toast.loading(get(t)('error.change'));
		try {
			const accessToken = getAccessToken();

			if (!accessToken) {
				toast.error(get(t)('error.auth'), { id: changeToast });
				return;
			}

			if (oldPassword.length < 6 || newPassword.length < 6) {
				toast.error(get(t)('error.length_pass'), { id: changeToast });
				return;
			}

			const response = await axios.patch(
				`${process.env.SERVER_URL}/auth/change-password`,
				{
					currentPassword: oldPassword,
					newPassword: newPassword
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			);
			toast.success(get(t)('error.change_success'), { id: changeToast });
		} catch (error: any) {
			console.log(error);
			if (error.response && error.response.status === 400) {
				toast.error(get(t)('error.current_pass'), { id: changeToast });
			} else {
				console.error('Failed to change password:', error);
				toast.error(get(t)('error.pass_error'), { id: changeToast });
			}
		}
	}
}

export const changeService = new ChangePassword();
