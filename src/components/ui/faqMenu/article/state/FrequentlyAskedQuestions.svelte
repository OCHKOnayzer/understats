<script>
import FaqAccordion from '$src/components/ui/accordion/FAQAccordion.svelte';
</script>

<div class="article_wrapper">
	<FaqAccordion title="acardion.question1" />
	<FaqAccordion title="acardion.question2" content="acardion.question2_content"/>
	<FaqAccordion title="acardion.question3" content="acardion.question3_content"/>
	<FaqAccordion title="acardion.question4" content="acardion.question4_content"/>
	<FaqAccordion title="acardion.question5" />
	<FaqAccordion title="acardion.question6" content="acardion.question6_content"/>
	<FaqAccordion title="acardion.question7" content="acardion.question7_content"/>
	<FaqAccordion title="acardion.question8" content="acardion.question8_content"/>
	<FaqAccordion title="acardion.question9" content="acardion.question9_content"/>
	<FaqAccordion title="acardion.question10" content="acardion.question10_content"/>
</div>

<style>
.article_wrapper {
	font-size: 20px;
}
</style>
