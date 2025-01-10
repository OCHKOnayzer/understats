<script>
import { t } from 'svelte-i18n';
import { closeModal } from '$src/stores/modalStore';

import { SocialLink } from './social';
const closPayModal = () => {
	closeModal();
};
</script>

<div class="social_container">
	<div class="social_modal">
		<div class="social_wrapper">
			<div class="social_title">
                {$t('other.contacts')}
                <button
					class="close"
					on:click="{closPayModal}"></button>
            </div>
			<div class="link_wrapper">
                <div class="link_item_container">
                    {#each SocialLink as item}
                        <div class="link_item">
                            {item.name}
                            <span class="color_link">{item.link}</span>
                        </div>
                    {/each}
                </div>
                <div class="social_item_container">
                    <a class="social_item" href="/">
                        <img src="assets/social/support_telegram.svg" alt="">
                        {$t('other.support')}
                    </a>
                    <div class="social_item nactiv">
                        <img src="assets/social/support_discord.svg" alt="">
                        {$t('other.support')}
                    </div>
                </div>
			</div>
		</div>
	</div>
</div>

<style>
.social_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
    color: white;
}
.social_modal {
	width: 525px;
	min-height: 380px;
	background-color: #20242F;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 32px;
}
.social_title{ 
    display: flex;
    height: 102px;
    width: 100%;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    align-items: center;
}
.social_wrapper {
	width: 100%;
	height: 80%;
    margin-left: 36px;
    margin-right: 36px;
}
.link_wrapper {
	height: fit-content;
}
.close {
	position: relative;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	transition: 400ms;
}
.close::before,
.close::after {
	content: '';
	position: absolute;
	width: 55%;
	height: 2px;
	background-color: #718096;
	transition: 400ms;
}
.close::before {
	transform: rotate(45deg);
}
.close::after {
	transform: rotate(-45deg);
}
.close:hover {
	border-color: #ffffff;
}
.close:hover::before,
.close:hover::after {
	background-color: #ffffff;
}
.link_item_container{ 
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 26px;
}
.link_item{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 48%;
}
.color_link{ 
    color: #6660FF;
}
.social_item_container{ 
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding-bottom: 48px;
}
.social_item{ 
    height: 56px;
    background-color: var(--table-color);
    width: 49%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    gap: 10px;
}
.nactiv{ 
    background-color: #363a4592;
    cursor: not-allowed;
    color: #718096;
}
</style>