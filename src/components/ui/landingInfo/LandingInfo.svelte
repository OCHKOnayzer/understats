<script>
    import { t } from 'svelte-i18n'
    import AppDownload from '../button/appDownload/AppDownload.svelte'
    import LandingOpen from '../button/landingOpen/LandingOpen.svelte'
    </script>
    
    <div class="info_wrapper">
      <p class="info_paragraph">{$t('landing.landing_title')}</p>
      <div class="info_content">
        <span>{$t('landing.landing_content')}</span>
      </div>
      <div class="button_wrapper">
        <div class="button_open"><LandingOpen /></div>
        <div class="button_download"><AppDownload /></div>
      </div>
    </div>
    
    <style>
    .info_wrapper {
      width: 50%;
      height: fit-content;
      margin: 0 auto;
      color: #fefefc;
      text-align: center;
      border: 1px solid red;
    }
    
    .info_paragraph {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    
    .info_content {
      font-size: 1rem;
    }
    
    .button_wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }
    
    /* Адаптивный дизайн */
    @media (max-width: 1024px) {
      .info_wrapper {
        width: 70%;
      }
      .info_paragraph {
        font-size: 2rem;
      }
      .info_content {
        font-size: 0.9rem;
      }
    }
    
    @media (max-width: 768px) {
      .info_wrapper {
        width: 90%;
      }
      .info_paragraph {
        font-size: 1.5rem;
      }
      .info_content {
        font-size: 0.8rem;
      }
    }
    
    @media (max-width: 480px) {
      .info_wrapper {
        width: 95%;
      }
      .info_paragraph {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      .info_content {
        font-size: 0.7rem;
      }
    }
    </style>
    