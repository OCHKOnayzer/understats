<script lang="ts">
import { onMount } from 'svelte'
import { t } from 'svelte-i18n'
import { Slides } from './slides'

let currentSlide = 0
const slideInterval = 6000
let interval: number

onMount(() => {
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % Slides.length
  }, slideInterval)

  return () => clearInterval(interval)
})

function goToSlide(index: number) {
  currentSlide = index
  clearInterval(interval)
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % Slides.length
  }, slideInterval)
}
</script>

<div class="slider">
  {#each Slides as slide, index}
    <div class="slide {index === currentSlide ? 'active' : ''}">
      <img src={slide.image} alt="" />
      <div class="slide_info">
        <div class="slide_title">
          {$t(slide.title)}
        </div>
        <div class="slide_text">
          {$t(slide.text)}
        </div>
      </div>
    </div>
  {/each}
  <div class="slide_dots">
    {#each Slides as _, dotIndex}
      <span
        class="dot {dotIndex === currentSlide ? 'active' : ''}"
        role="button"
        tabindex="0"
        on:click={() => goToSlide(dotIndex)}
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && goToSlide(dotIndex)}
        aria-label="Go to slide {dotIndex + 1}"
      >
      </span>
    {/each}
  </div>
</div>

<style>
.slider {
  margin-top: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  visibility: hidden;
}

.slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

.slide img {
  user-select: none;
  pointer-events: none;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  object-fit: cover;
}

.slide_info {
  position: absolute;
  top: 60px;
  left: 20vw;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  z-index: 2;
}

.slide_title {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.slide_text {
  font-size: 0.875em;
  margin-bottom: 10px; /* Устанавливаем отступ между текстом и точками */
  color: #718096;
  line-height: 1.5em;
}

.slide_dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 2;
  position: absolute;
  bottom: 20px; /* Фиксируем расположение точек снизу */
  width: 100%;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #6660ff;
  transform: scale(1.2); /* Добавляем немного масштабирования при активации */
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.dot:hover {
  background-color: #718096;
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .slide_info {
    width: 40%;
  }

  .slide_title {
    font-size: 1.8em;
  }

  .slide_text {
    font-size: 0.8em;
  }
}

@media (max-width: 768px) {
  .slide_info {
    width: 90%;
    top: 40px;
  }

  .slide_title {
    font-size: 1.2em;
  }

  .slide_text {
    font-size: 0.75em;
  }

  .dot {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 480px) {
  .slide_info {
    width: 90%;
    top: 20px;
  }

  .slide_title {
    font-size: 1.2em;
  }

  .slide_text {
    font-size: 0.7em;
  }

  .dot {
    width: 6px;
    height: 6px;
  }
}
</style>
