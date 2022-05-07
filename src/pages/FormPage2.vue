<template>
  <q-page class="flex justify-center items-center">
    <div class="q-pa-md" style="width: 500px">

      <q-form class="q-gutter-md" @submit="validarData" >
          <q-input
            v-model="dataDigitada"
            label="Data"
            mask="##/##"
            :fill-mask="false"
            :error="false"
          />

         <q-btn type="submit" label="enviar" color="primary" />
      </q-form>

      <q-date
        v-model="diaAtual"
        title="José Rocha"
        subtitle="Aniversário"
        class="q-mt-md"
      />

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Form2',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

const dataDigitada = ref('');

const data = new Date();
const diaAtual = String(data.getDate()).padStart(2, '0');

// window.console.log(diaAtual);

// const diaCard = ref('##');
// const mesCard = ref('##');
// const diaCardandMesCard = `${diaCard.value}/${mesCard.value}`;

const validarData = () => {
  // window.console.log(dataDigitada.value);
  // window.console.log(mesCard.value);
  // if (mesCard.value !== '##') {
  //   window.console.log(diaCardandMesCard);
  //   window.console.log('mês não pode ser vazio!');
  // }
};

</script>
