<script lang="ts" setup>
import { GoalConversions } from '@piwikpro/vue-piwik-pro'
import Toast from '../components/Toast.vue'
import { ref } from 'vue'

const pageData = {
  title: 'GoalConversions',
  heading: 'Goal Conversions',
  description:
    'Goals let you define important actions registered in your application and track conversions when the conditions for the action are fulfilled.',
  methods: [
    {
      method: 'trackGoal',
      usage:
        'GoalConversions.trackGoal(goalId: number | string, conversionValue: number, dimensions?: Object)',
      desc: 'Tracks manual goal conversion.',
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
            code="import { GoalConversions } from '@piwikpro/vue-piwik-pro'"
          />
        </div>
        <h2>Methods</h2>
        <ul>
          <li v-for="method in pageData.methods" :key="method.method">
            <h4>{{ method.method }}</h4>
            <p>{{ method.desc }}</p>
            <highlightjs language="typescript" :code="method.usage" />
          </li>
        </ul>
        <h2>Sample usage</h2>
        <p>
          To see tracking methods usage please turn developers tools in your
          browser and track results on the console.
        </p>
        <p>
          You can use methods from that collection in page props for example
          <code>onMounted</code> (methods are invoked when the page starts) or
          on the button click using <code>@click</code> prop.
        </p>
      </article>
      <button
        class="btn"
        @click="
          () => {
            GoalConversions.trackGoal(2, 40, undefined, { currencyCode: 'USD' })
            showToast('GoalConversions.trackGoal(2, 40)')
          }
        "
      >
        GoalConversions.trackGoal
      </button>
    </div>
  </div>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>
