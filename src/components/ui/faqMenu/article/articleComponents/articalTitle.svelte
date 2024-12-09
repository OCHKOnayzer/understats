<script lang="ts">
    import { t } from 'svelte-i18n';
    
    interface Ititle {
      title: string;
    }
    
    let { title = '' } = $$props as Ititle;
    </script>
    
    <p class="pt-5 pb-2">{$t(title)}</p>
    