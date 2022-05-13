<template>
<q-page>
    <PDFViewer
      :source="url"
      @click="savePdf"
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
// link da lib -> https://github.com/DingRui12138/vue-pdf-viewer
import PDFViewer from 'pdf-viewer-vue'; // lib vue-pdf-viewer-stars

export default {
  components: {
    PDFViewer,
  },

  setup() {
    const savePdf = () => {
      const file = 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf';
      window.location.href = file;
      // doc.text('PDFViewer', 10, 10);
      // doc.save('a4.pdf', [PDFViewer]);
      // PDFViewer.save();
    };

    return {
      url: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      base64: '<BASE64_ENCODED_PDF>',
      savePdf,
    };
  },
};

</script>

<!-- <style>
  .icon-btn:first-child {
    display:none;
  }
</style> -->
