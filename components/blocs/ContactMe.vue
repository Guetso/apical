<template>
  <section id="contact">
    <h2 class="font-semibold text-xl mb-4">Me contacter</h2>
    <div class="lg:w-2/3 m-auto lg:text-center">
      <p class="mb-2">
        Pour toutes demandes de renseignements ou de devis<span class="mx-2">
          :
        </span>
      </p>
      <div class="mb-2 pl-4">
        <div>
          <span class="mail" />
          <a class="block-link" href="mailto:apical.elagage29@gmail.com">
            <strong class="w-12">apical.elagage29@gmail.com</strong>
          </a>
        </div>
        <div>
          <span class="phone" />
          <a class="block-link" href="tel:+33687521947">
            <strong>06 87 52 19 47</strong>
          </a>
        </div>
      </div>
      <div class="mb-8">
        Ou contactez moi via le formulaire ci-dessous<span class="mx-2">:</span>
      </div>
    </div>

    <div class="container w-full max-w-lg">
      <form @submit="sendEmail">
        <label>Nom</label>
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="Votre nom ou prénom"
          required
        />
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Votre email"
          required
        />
        <label>Message</label>
        <textarea
          v-model="message"
          name="message"
          cols="30"
          rows="5"
          placeholder="Votre message"
          required
        >
        </textarea>
        <input v-if="!submit" type="submit" value="Envoyer" />
      </form>
      <LayoutMiniLoader v-if="submit" />
      <div v-if="sent" class="p-2 text-green-900">
        Votre message a bien été expédié.
      </div>
      <div v-if="error" class="p-2 text-red-900">
        Un problème est survenu ! <br />
        Vous pouvez néanmoins me contacter directement par mail ou par
        téléphone.
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submit: false,
      error: false,
      sent: false,
    }
  },
  methods: {
    sendEmail(e) {
      e.preventDefault()
      this.error = false
      this.sent = false
      this.submit = true
      try {
        emailjs
          .sendForm(
            'service_5vw72it',
            'template_3tweoid',
            e.target,
            'a2P_Y7H3nI7Erxxs_',
            {
              name: this.name,
              email: this.email,
              message: this.message,
            }
          )
          .then(() => {
            this.submit = false
            this.sent = true
          })
      } catch (error) {
        this.submit = false
        this.error = true
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.block-link {
  margin-left: 10%;
}

.mail {
  &::before {
    @include picto('mail-alt');
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.phone {
  &::before {
    @include picto('phone');
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 337px 147px / 119px 99px;
  background: url(~assets/images/noise.png),
    radial-gradient(
      circle at -1% 57.5%,
      rgba(254, 171, 18, 0.692) 0%,
      #f65f0ed0 90%
    );
  padding: 53px;
}

form {
  padding: 10px;
}

label {
  float: left;
}

input[type='text'],
[type='email'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type='submit'] {
  background-color: #008136;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #38863c;
}
</style>
