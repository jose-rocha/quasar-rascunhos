<template>
<q-page>
    <PDFViewer
      :source="url"
      :style=" $q.screen.lt.sm
      ? 'height: 92vh; max-width: 100%; min-width: 100%;'
      : 'height: 92vh; max-width: 100%;'" />

    <!-- <PDFViewer
      :source="url"
      style="height: 92vh; width: 100%"
      @download="handleDownload"
    /> -->
</q-page>
</template>

<script>
import PDFViewer from 'pdf-viewer-vue';

// OR THE FOLLOWING IMPORT FOR VUE 2
// import PDFViewer from 'pdf-viewer-vue/dist/vue2-pdf-viewer'

export default {
  components: {
    PDFViewer,
  },

  setup() {
    return {
      url: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      base64: '<BASE64_ENCODED_PDF>',
    };
  },
};

</script>
