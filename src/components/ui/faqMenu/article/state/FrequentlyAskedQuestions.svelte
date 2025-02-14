<script>
import FaqAccordion from '$src/components/ui/accordion/FAQAccordion.svelte';
import Accordion from '$src/components/ui/accordion/Accordion.svelte';
</script>

<div class="article_wrapper">
	<FaqAccordion title="acardion.why_service" />
	<FaqAccordion title="acardion.how_to_view_statistics" />
	<FaqAccordion title="acardion.accounts_and_bets_limits" />
	<FaqAccordion title="acardion.can_i_add_or_edit_bets" />
	<FaqAccordion title="acardion.extension_installation_time_and_difficulty" />
	<FaqAccordion title="acardion.tariffs_comparison_and_choice" />
	<FaqAccordion title="acardion.supported_bet_types" />
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
