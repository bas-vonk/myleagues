<template>
  <main id="mainLogin">
    <div class="login__form">
      <b-card class="mt-3 text-center" header="MyLeagues">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Email address"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>

          <transition name="show-fields">
            <div v-if="showRegisterFields">
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.password2"
                  type="password"
                  placeholder="Confirm password"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label-for="input-4">
                <b-form-input
                  id="input-4"
                  v-model="form.name"
                  type="text"
                  placeholder="Name"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </transition>

          <b-button type="submit" block variant="primary">{{
            submitButtonText
          }}</b-button>
          <div class="switchMode">
            <span @click="toggleActiveMode">
              {{ switchButtonText }}
            </span>
          </div>
        </b-form>
      </b-card>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeMode: "login",
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  computed: {
    showRegisterFields() {
      return this.activeMode === "register";
    },
    header() {
      return this.activeMode === "login" ? "Login" : "Register";
    },
    submitButtonText() {
      return this.header;
    },
    switchButtonText() {
      return this.activeMode === "login" ? "Register" : "Login";
    }
  },
  methods: {
    toggleActiveMode() {
      if (this.activeMode === "login") {
        this.activeMode = "register";
      } else {
        this.activeMode = "login";
      }
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="css" scoped>
#mainLogin {
  margin: auto;
  width: 400px;
  align-items: center;
  margin: 8rem auto;
  .login__form {
    width: 100%;
    margin: auto;
  }
}

b-button {
  color: #f79e02;
}

.switchMode {
  text-align: center;
  margin: 1rem auto 0rem auto;
  font-size: 0.85rem;
}

.mt-3 {
  font-size: 2rem;
}

.show-fields-enter,
.show-fields-leave-to {
  opacity: 0;
}

.show-fields-enter-to,
.show-fields-leave {
  opacity: 1;
}

.show-fields-enter-active {
  transition: all 0.3s ease-out;
}

.show-fields-leave-active {
  transition: all 0.3s ease-in;
}
</style>
