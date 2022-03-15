<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>{{title}}</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
              v-model="email"
              :rules="[rulesEmail.required, rulesEmail.email]"
              label="E-mail"
            ></v-text-field>
         <v-text-field
            v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rulesSenha.required, rulesSenha.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Senha"
            hint="Minimo 8 caracteres"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">CADASTRAR</v-btn>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
       
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Tela de Login',
        email: '',
        show2: false,
        rulesEmail: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
        rulesSenha: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },
    methods : {
        showAlert : function(pass){
            alert(pass);
        }
    }
  }
</script>
