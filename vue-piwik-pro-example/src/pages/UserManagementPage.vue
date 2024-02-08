<script setup lang="ts">
import { UserManagement } from '@piwikpro/vue-piwik-pro'
import { onMounted, ref } from 'vue'

const userId = ref('')
const visitorId = ref('')
const visitorInfo = ref({})

const callAsyncMethods = async () => {
  // function getUserId(): Promise<string>
  UserManagement.setUserId('UserId')

  // function getUserId(): Promise<string>
  const uId = await UserManagement.getUserId()
  userId.value = uId

  // function getUserId(): Promise<string>
  const vId = await UserManagement.getVisitorId()
  visitorId.value = vId

  // function getVisitorInfo(): Promise<any[]>
  const vInfo = await UserManagement.getVisitorInfo()
  visitorInfo.value = vInfo

  // function resetUserId(): void
  UserManagement.resetUserId()
}

onMounted(() => {
  callAsyncMethods()
})
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body prose max-w-full">
      <h2 class="card-title">User Management</h2>
      <h2>Examples results</h2>
      <div>
        <p><code>UserManagement.getUserId()</code> - {{ userId }}</p>
        <p><code>UserManagement.getVisitorId()</code> - {{ visitorId }}</p>
        <p>
          <code>UserManagement.getVisitorInfo()</code> -
          {{ JSON.stringify(visitorInfo) }}
        </p>
      </div>
      <h2>Sample usage</h2>
      <p>
        To see tracking methods usage please turn developers tools in your
        browser and track results on the console.
      </p>
      <p>
        You can use methods from that collection in page props for example
        <code>onMounted</code> (methods are invoked when the page starts) or on
        the button click using <code>@click</code> prop.
      </p>
    </div>
  </div>
</template>
