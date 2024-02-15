<script lang="ts" setup>
import { CookieManagement } from '@piwikpro/vue-piwik-pro'
import Toast from '../components/Toast.vue'
import { ref } from 'vue'

const pageData = {
  title: 'CookieManagement',
  heading: 'Cookie management',
  description:
    'Collection of methods to manage cookies through the Piwik PRO API.',
  methods: [
    {
      name: 'enableCookies',
      usage: 'CookieManagement.enableCookies();',
      desc: 'Enables all first party cookies. Cookies will be created on the next tracking request.',
      args: null,
    },
    {
      name: 'disableCookies',
      usage: 'CookieManagement.disableCookies();',
      desc: 'Disables all first party cookies. Existing cookies will be deleted in the next page view.',
      args: null,
    },
    {
      name: 'deleteCookies',
      usage: 'CookieManagement.deleteCookies();',
      desc: 'Deletes existing tracking cookies on the next page view.',
      args: null,
    },
    {
      name: 'hasCookies',
      usage: 'CookieManagement.hasCookies();',
      desc: 'Returns true if cookies are enabled in this browser.',
      args: null,
    },
    {
      name: 'setCookieNamePrefix',
      usage: 'CookieManagement.setCookieNamePrefix("_examplePrefix_");',
      desc: 'Sets the prefix for analytics tracking cookies. Default is "_pk_".',
      args: '_examplePrefix_',
    },
    {
      name: 'setCookieDomain',
      usage: 'CookieManagement.setCookieDomain(".example.com");',
      desc: 'Sets the domain for the analytics tracking cookies.',
      args: '.example.com',
    },
    {
      name: 'getCookieDomain',
      usage: 'CookieManagement.getCookieDomain();',
      desc: 'Returns domain of the analytics tracking cookies (set with setCookieDomain()).',
      args: null,
    },
    {
      name: 'setCookiePath',
      usage: 'CookieManagement.setCookiePath("/blog/");',
      desc: 'Sets the analytics tracking cookies path.',
      args: '/blog/',
    },
    {
      name: 'getCookiePath',
      usage: 'CookieManagement.getCookiePath();',
      desc: 'Returns the analytics tracking cookies path.',
      args: null,
    },
    {
      name: 'setSecureCookie',
      usage: 'CookieManagement.setSecureCookie(true);',
      desc: 'Toggles the secure cookie flag on all first party cookies (if you are using HTTPS).',
      args: true,
    },
    {
      name: 'setVisitorCookieTimeout',
      usage: 'CookieManagement.setVisitorCookieTimeout(33955200);',
      desc: 'Sets the expiration time of visitor cookies.',
      args: 33955200,
    },
    {
      name: 'getConfigVisitorCookieTimeout',
      usage: 'CookieManagement.getConfigVisitorCookieTimeout();',
      desc: 'Returns expiration time of visitor cookies (in milliseconds).',
      args: null,
    },
    {
      name: 'setReferralCookieTimeout',
      usage: 'CookieManagement.setReferralCookieTimeout(15768000);',
      desc: 'Sets the expiration time of referral cookies.',
      args: 15768000,
    },
    {
      name: 'setSessionCookieTimeout',
      usage: 'CookieManagement.setSessionCookieTimeout(1800000);',
      desc: 'Sets the expiration time of session cookies.',
      args: 1800000,
    },
    {
      name: 'getSessionCookieTimeout',
      usage: 'CookieManagement.getSessionCookieTimeout();',
      desc: 'Returns expiration time of session cookies.',
      args: null,
    },
    {
      name: 'setVisitorIdCookie',
      usage: 'CookieManagement.setVisitorIdCookie();',
      desc: 'Sets cookie containing analytics ID in browser.',
      args: null,
    },
  ],
}

const toastMessage = ref('')
const isToastVisible = ref(false)

const showToast = (message: string) => {
  toastMessage.value = message
  isToastVisible.value = true
}
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <article>
        <h1>{{ pageData.heading }}</h1>
        <div>
          <p>{{ pageData.description }}</p>
        </div>
        <h2>Import</h2>
        <div>
          <highlightjs
            language="typescript"
            code="import { CookieManagement } from '@piwikpro/vue-piwik-pro'"
          />
        </div>
        <h2>Methods</h2>
        <ul>
          <li v-for="method in pageData.methods" :key="method.name">
            <h4>{{ method.name }}</h4>
            <p>{{ method.desc }}</p>
            <highlightjs language="typescript" :code="method.usage" />
            <button
              class="btn"
              @click="
                () => {
                  CookieManagement[
                    method.name as keyof typeof CookieManagement
                    // @ts-ignore-next-line
                  ](method.args as any)
                  showToast(
                    `CookieManagement.${method.name}(${method.args ?? ''})`
                  )
                }
              "
            >
              Execute
            </button>
          </li>
        </ul>
      </article>
    </div>
  </div>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>
