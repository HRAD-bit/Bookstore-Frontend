<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="submittRegister">
        <div>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="user.email" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit">Registrar</button>
        <p>¿Ya tienes una cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
        <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            message: null
        }
    },
    methods: {
        async submittRegister() {
            try {
                const response = await AuthService.register(this.user.email, this.user.password)
                console.log("Registro exitoso:", response.data)
                this.message = "Registro exitoso. Por favor, inicia sesión."
            } catch (error) {
                console.error("Error en el registro:", error)
                this.message = "Error en el registro. Por favor, intenta nuevamente." + error

            }
        }
    }

}
</script>

<style>

</style>