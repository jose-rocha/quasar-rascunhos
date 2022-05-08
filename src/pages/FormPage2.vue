<template>
  <q-page class="flex justify-center items-center">
    <div class="q-pa-md" style="width: 500px">

      <q-form class="q-gutter-md" >
          <q-input
            v-model="dataDigitada"
            label="Data"
            mask="##/##"
            :fill-mask="false"
            :error="false"
            :rules="[
              val => val && val.length >= 4 || 'O ano e o mês devem estar preenchido!',
              val => val >= mesAtual && val >= anoAtual || 'o mês não pode ser menor que o atual!',
              ]"
          />

         <q-btn type="submit" label="enviar" color="primary" />
      </q-form>

      <q-date
        v-model="mesAtual"
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
// import { jsPDF } from 'jspdf';

const metaData = {
  title: 'Form2',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

const dataDigitada = ref('');

const data = new Date();

const mesAtual = ref(Number(String(data.getMonth() + 1).padStart(2, '0')));
const anoAtual = ref(data.getFullYear() % 100);

window.console.log(anoAtual.value);

// eslint-disable-next-line new-cap
// const doc = new jsPDF();

// doc.text('Hello world!', 10, 10);
// doc.save('a4.pdf');
</script>
