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

      <div class="flex q-mt-md q-gutter-sm">

        <q-date v-model="date" :options="optionsCalendar" />

        <!-- <q-select
          v-model="modelSelect"
          :options="optionsSelect"
          label="Dias e horas de atendimento"
          style="flex:1;"
        /> -->

      </div>
        <q-select
              dark
              dense
              color="white"
              label="Selecione o horário"
              hint="Clique no Relogio para selecionar"
              mask="##:##"
              class="text-blue"
              v-model="modelSelect"
              :options="optionsSelect"
              lazy-rules
              :rules="[
              val => val && val.length > 0 || 'Por favor, selecione um horário',
              ]"
          >
          <template v-slot:append>
            <q-icon name="eva-clock-outline" />
          </template>
        </q-select>
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

const date = ref('2022/05/01');
const optionsCalendar = ['2022/05/15', '2022/05/17', '2022/05/20', '2022/05/22', '2022/05/25'];

const modelSelect = ref(null);
const optionsSelect = ['25/05/2022 07:25', '25/05/2022 07:27', '25/05/2022 08:29', '25/05/2022 09:25', '25/05/2022 10:25'];
</script>

<!-- <style>
  .q-field__messages {
    color: white;
  }
  .q-field__label{
    color: white;

  }
  .q-field__native {
    color: white;
  }
  .q-field__control-container { color: white; border-color: white;}
</style> -->
