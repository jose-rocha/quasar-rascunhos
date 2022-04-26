<template>
  <!-- <q-ppass class="flex justify-center items-center"> -->
    <div class=" flex justify-center q-py-sm " style="width: 80%">

      <q-form
        @submit.prevent="onSubmit"
        @reset="onReset"
        class="q-gutter-md "
        style="width: 100%"
      >
      <div class="flex justify-center">
          <q-icon name="fa-brands fa-linux" size="7em" color="primary" style="cursor: pointer;"/>
      </div>
        <q-input
          type="email"
          v-model="formValue.name"
          label="Seu email *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
        />

        <q-input
          type="password"
          v-model="formValue.pass"
          label="Sua senha *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Por favor, digite sua senha',
          ]"
        />

        <!-- <q-toggle v-model="formValue.accept" label="Eu aceito a licença e os ">
          <a href="#">Termos</a>
        </q-toggle> -->

        <div>
          <q-btn label="Sign In" type="submit" color="primary" rounded/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  <!-- </q-ppass> -->
</template>

<script setup>
import { reactive } from 'vue';
import { useQuasar, useMeta } from 'quasar';

const $q = useQuasar();

const formValue = reactive({
  name: '',
  pass: '',
  accept: false,
});

const onReset = () => {
  formValue.name = null;
  formValue.pass = null;
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
  }
};

const metaData = {
  title: 'Form',
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

</script>

<style scoped lang="scss">
a {
    top:15px;
    text-decoration: none; color: white;
    border-bottom: 1px solid #1976d2;
  }

</style>
