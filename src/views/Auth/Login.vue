<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submittLogin">
        <div>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="user.email" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit">Iniciar Sesion</button>
        <p>Aún no tienes una cuenta? <router-link to="/register">Registrate!</router-link></p>
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
        async submittLogin() {
            try {
                const response = await AuthService.login(this.user.email, this.user.password)
                console.log("Inicio de sesion ", response.data)
                this.message = "Inicio de sesión exitoso. Redirigiendo..."
            } catch (error) {
                console.error("Error en el inicio de sesion:", error)
                this.message = "Usuario o contra incorrectos" + error

            }
        }
    }

}
</script>

<style>

</style>