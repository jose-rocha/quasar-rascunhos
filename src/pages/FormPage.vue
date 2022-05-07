<template>
  <q-page class="flex justify-center items-center">
    <div class="q-pa-md" style="width: 500px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
      <div class="flex justify-center">
          <q-icon name="fa-brands fa-linux" size="7em" color="primary" style="cursor: pointer;"/>
      </div>
        <q-input
          filled
          v-model="formValue.name"
          label="Seu nome *"
          hint="Nome e Sobrenome"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
        />

        <q-input
          filled
          type="number"
          v-model="formValue.age"
          label="Sua idade *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Por favor, digite sua idade',
            val => val > 0 && val < 100 || 'Digite uma idade real'
          ]"
        />

        <q-toggle v-model="formValue.accept" label="Eu aceito a licença e os termos" />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import { useQuasar, useMeta } from 'quasar';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

const formValue = reactive({
  name: '',
  age: '',
  accept: false,
});

const onReset = () => {
  formValue.name = null;
  formValue.age = null;
  formValue.accept = false;
};

const onSubmit = () => {
  if (formValue.accept !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Você precisa aceitar a licença e os termos primeiro',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Enviado com sucesso!',
    });

    router.push({ name: 'form2' });

    // setTimeout(() => {
    //   onReset();
    //   window.console.log(formValue.name);
    // }, 3000);
  }
};

const metaData = {
  title: 'Form',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

</script>
