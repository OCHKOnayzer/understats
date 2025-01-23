<script>
import { t } from 'svelte-i18n';
import { closeModal } from '$src/stores/modalStore';
</script>

<div class="pay_support_container"> 
    <div class="pay_support_modal">
        <div class="title">
            <span>{$t('tariffs.pay_support_title')}</span>
        </div>
        <div class="support_content">
            {$t('tariffs.pay_support_content')}
        </div>
        <div class="button_wrapper">
            <button>
                {$t('tariffs.go_pay')}
            </button>
            <button on:click="{closeModal}">
                {$t('other.close')}
            </button>
        </div>
    </div>
</div>

<style>
.pay_support_container{ 
    display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
    color: white;
}
.pay_support_modal{
    background-color: #20242F;
    width: 525px;
    height: 342px;
    border-radius: 36px;
}
.title{ 
    margin-top: 32px;
    height: fit-content;
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
}
.support_content{ 
    margin-left: 32px;
    margin-right: 32px;
    text-align: center;
}
.button_wrapper{
    margin-left: 32px;
    margin-right: 32px;
}
.button_wrapper button{ 
    width: 100%;
    background-color: #0D111D;
    height: 56px;
    border-radius: 12px;
}
.button_wrapper button:nth-child(1){ 
    background-color: var(--accent-color);
    margin-top: 24px;
    margin-bottom: 12px;
}
.button_wrapper button:nth-child(1):hover{ 
    background-color: var(--accent-color);
}
.button_wrapper button:nth-child(2){ 
    background-color: #0D111D;
}
</style>
