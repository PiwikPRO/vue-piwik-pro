<script lang="ts" setup>
import Toast from './Toast.vue'
import { DownloadAndOutlink } from '@piwikpro/vue-piwik-pro'
import { onMounted, ref } from 'vue'

const toastMessage = ref('')
const isToastVisible = ref(false)

const showToast = (message: string) => {
  toastMessage.value = message
  isToastVisible.value = true
}

const linkTrackingTimer = ref<string | number>('')

const callAsyncMethods = async () => {
  // function trackLink(url: string, linkType: string, customData?: object | undefined, callback?: ((params: any) => void) | undefined): void
  DownloadAndOutlink.trackLink('http://localhost:3000', 'link')

  // function enableLinkTracking(enable: boolean): void
  DownloadAndOutlink.enableLinkTracking(true)

  // function setLinkClasses(classes: string[]): void
  DownloadAndOutlink.setLinkClasses(['this-is-an-outlink'])

  // function setDownloadClasses(classes: string[]): void
  DownloadAndOutlink.setDownloadClasses(['this-is-a-download'])

  // function setDownloadExtensions(extensions: string[]): void
  DownloadAndOutlink.setDownloadExtensions(['zip'])

  // function addDownloadExtensions(extensions: string[]): void
  DownloadAndOutlink.addDownloadExtensions(['7z'])

  // function removeDownloadExtensions(extensions: string[]): void
  DownloadAndOutlink.removeDownloadExtensions(['pdf', 'xlsx'])

  // function setLinkTrackingTimer(time: number): void
  DownloadAndOutlink.setLinkTrackingTimer(10)

  // function getLinkTrackingTimer(): Promise<string>
  const lTrackingTimer = await DownloadAndOutlink.getLinkTrackingTimer()
  linkTrackingTimer.value = lTrackingTimer

  // function setIgnoreClasses(classes: string[]): void
  DownloadAndOutlink.setIgnoreClasses(['do-not-track'])
}

onMounted(() => {
  callAsyncMethods()
})
</script>

<template>
  <div>
    <h2>Examples results</h2>
    <div>
      <p>
        <code>DownloadAndOutlink.getLinkTrackingTimer()</code> -
        {{ linkTrackingTimer }}
      </p>
    </div>
    <h2>Sample usage</h2>
    <p>
      To see tracking methods usage please turn developers tools in your browser
      and track results on the console.
    </p>
    <p>
      You can use methods from that collection in page props for example
      <code>onMounted</code> (methods are invoked when the page starts) or as on
      example below on the button click using <code>@click</code> event.
    </p>
    <div>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.trackLink('http://localhost:5173', 'link')
            showToast(
              'DownloadAndOutlink.trackLink(\'http://localhost:5173\', \'link\')'
            )
          }
        "
      >
        DownloadAndOutlink.trackLink
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.enableLinkTracking(true)
            showToast('DownloadAndOutlink.enableLinkTracking(true)')
          }
        "
      >
        DownloadAndOutlink.enableLinkTracking
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.setLinkClasses(['this-is-an-outlink'])
            showToast(
              'DownloadAndOutlink.setLinkClasses([\'this-is-an-outlink\'])'
            )
          }
        "
      >
        DownloadAndOutlink.setLinkClasses
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.setDownloadClasses(['this-is-a-download'])
            showToast(
              'DownloadAndOutlink.setDownloadClasses([\'this-is-a-download\'])'
            )
          }
        "
      >
        DownloadAndOutlink.setDownloadClasses
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.addDownloadExtensions(['rar'])
            showToast(
              'DownloadAndOutlink.addDownloadExtensions - add RAR tracking'
            )
          }
        "
      >
        DownloadAndOutlink.addDownloadExtensions - add RAR tracking
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.removeDownloadExtensions(['rar'])
            showToast(
              'DownloadAndOutlink.removeDownloadExtensions - remove RAR tracking'
            )
          }
        "
      >
        DownloadAndOutlink.removeDownloadExtensions - remove RAR tracking
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.setIgnoreClasses(['do-not-track'])
            showToast('DownloadAndOutlink.setIgnoreClasses([\'do-not-track\'])')
          }
        "
      >
        DownloadAndOutlink.setIgnoreClasses
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            DownloadAndOutlink.setLinkTrackingTimer(20)
            showToast('DownloadAndOutlink.setLinkTrackingTimer(20)')
          }
        "
      >
        DownloadAndOutlink.setLinkTrackingTimer
      </button>
      <button
        class="btn mr-5 mt-5"
        @click="
          () => {
            callAsyncMethods()
            showToast('callAsyncMethods')
          }
        "
      >
        CustomDimensions.getCustomDimensionValue
      </button>
    </div>
    <h2>Example download</h2>
    <div>
      <a href="/files/example.zip">Download ZIP</a> - tracked download
      <br />
      <a href="/files/example.pdf">Download PDF</a> - outlink
      <br />
      <a href="/files/example.rar">Download RAR</a> - download tracked disabled
      by default, you can turn on/off by button
      <br />
      <a class="do-not-track" href="/files/example.xlsx"> Download XLSX </a> -
      download turned off by default using className
    </div>
  </div>
  <Toast :message="toastMessage" v-model="isToastVisible" />
</template>
