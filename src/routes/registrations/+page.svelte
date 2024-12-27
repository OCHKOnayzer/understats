<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import RegistrationModal from "$src/components/ui/modal/authModal/registrationModal/RegistrationModal.svelte";

    let isMobile = false;

    function checkScreenWidth() {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            goto("/");
        }
    }

    onMount(() => {
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => window.removeEventListener("resize", checkScreenWidth);
    });
</script>

<div class="auth">
    {#if isMobile}
        <RegistrationModal />
    {/if}
</div>

<style>
.auth {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
</style>
