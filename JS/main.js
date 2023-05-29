const {createApp} = Vue;

createApp({
    data(){
        return {
            
        activeMail: 0,

        arrayEmail:[
            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },

            {
                mail: ''
            },
            
            {
                mail: ''
            }
        ]
            
        }
    },
    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            risposta => {
                console.log(risposta.data.response);
                this.activeMail = risposta.data.response;
            });
    }

}).mount('#app')