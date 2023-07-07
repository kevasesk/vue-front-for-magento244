import { defineStore } from 'pinia'

export const useNotyStore = defineStore('noty', {
    state: () => ({
        message: '',
        type: '',
        visible: false,
    }),
    actions: {
        show(message, type){
            this.message = message;
            this.type = type;
            this.visible = true;

            let timeout = this.type === 'error' ? 5000 : 1000;

            setTimeout(() => {
                this.visible =  false;
                this.message = '';
                this.type = '';
            }, timeout);

        }
    }
})
