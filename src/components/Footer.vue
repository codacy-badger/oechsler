<template>
  <footer :class="['footer', { inverted }]">
    <div class="footer-container">
      <section class="footer-imprint">
        <h1>
          <Brand />
        </h1>
        <p>
          Created with Vue.js and &hearts; in Pforzheim
        </p>
        <p>
          <router-link to="/imprint">Imprint</router-link>
          &nbsp;
          <span>− Copyright © 2020 Samuel Oechsler</span>
        </p>
      </section>
      <section class="footer-provider">
        <h1>Delivered from the cloud by</h1>
        <img :src="digitalocean" alt="Digitalocean Logo" />
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Brand from "@/components/Brand.vue";

import digitalocean from "@/assets/digital-ocean.png";

@Component({ components: { Brand } })
export default class Footer extends Vue {
  @Prop({ default: false }) readonly inverted!: boolean;

  readonly digitalocean = digitalocean;
}
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-accent;

  @apply text-white;

  .footer-container {
    @apply px-10;
    @apply py-12;

    @screen sm {
      @apply px-24;

      @apply flex;
      @apply flex-row;
      @apply justify-between;
    }

    @screen md {
      @apply px-40;
    }

    @screen lg {
      @apply py-16;
    }

    @screen xl {
      @apply mx-auto;
      @apply max-w-screen-xl;
    }

    .footer-imprint {
      > .brand {
        @apply text-2xl;
      }

      p {
        @apply font-light;
        @apply text-xs;

        &:last-child {
          @apply pt-4;
        }

        span,
        a {
          @apply opacity-50;
        }

        a {
          @apply transition-opacity;
          @apply duration-200;

          &:hover {
            @apply opacity-100;
          }
        }
      }
    }

    .footer-provider {
      @apply pt-6;

      @apply opacity-50;

      img {
        @apply pt-1;
        @apply w-32;
      }
    }

    h1 {
      @apply text-sm;
    }
  }

  &.inverted {
    @apply bg-gray-900;
  }
}
</style>
