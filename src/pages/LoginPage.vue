<template>
  <q-page class="flex justify-center items-center">
    <div
      class="flex bg-negative "
      style="width: 60%; height: 38em; border-radius: 5px;"
    >

      <div
        style="flex: 1; border-radius: 5px 0 0 5px;"
        class="bg-accent flex justify-center items-center">
        <h4 class="no-margin">System Heart</h4>
        <q-icon name="fa-solid fa-earth-americas" size="20em" color="dark"
          class="animate__animated animate__rubberBand "
        />
      </div>

      <div style="flex: 1; border-radius: 0 5px 5px 0" class="bg-dark column items-center">
        <h5>
          <a :class="linkISignIn  ? 'linkStyle' : ''" @click="linkISignInStyle">
            <span>Sign In</span>
          </a>
            <span class="text-grey q-mx-sm">ou</span>
          <a :class="linkISignUp ? 'linkStyle' : ''" @click="linkISignUpStyle">
            <span >Sign Up</span>
          </a>
        </h5>

        <!-- <Transition name="fade" mode="out"> -->
          <FormSignIn v-if="linkISignIn" class="animate__animated animate__swing" />
        <!-- </Transition> -->

        <!-- <Transition name="fade" mode="out"> -->
          <FormSignUp v-if="linkISignUp" class="animate__animated animate__flash"/>
        <!-- </Transition> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import FormSignIn from '../components/forms/FormSignIn.vue';
import FormSignUp from '../components/forms/FormSignUp.vue';
import 'animate.css';

const linkISignIn = ref(true);
const linkISignUp = ref(false);

const linkISignInStyle = () => {
  linkISignIn.value = true;
  linkISignUp.value = false;
};

const linkISignUpStyle = () => {
  linkISignUp.value = true;
  linkISignIn.value = false;
};

</script>

<style scoped lang="scss">
a { color: grey}
.linkStyle {
  text-decoration: none; color: white;
  border-bottom: 1px solid #1976d2;
  }
</style>
