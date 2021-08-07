const inputComponent = {
    props: {
        placeholder: {
            type: String,
            required: true
        }
    },
    template: `<input 
    :placeholder="placeholder" 
    v-model="input"
    @keyup.enter="monitorEnterkey"
    class="input is-small" 
    type="text" />`,
    data() {
        return {
            input: ""
        };
    },
    methods: {
        monitorEnterkey() {
            this.$emit("add-note", {
                note: this.input,
                timestamp: (new Date).toLocaleString()
            });
            this.input = "";
        }
    }
};
new Vue({
    el: '#app',
    components: {
        'input-component': inputComponent
    },
    data: {
        notes: [],
        timestamps: [],
        placeholder: "Enter a note"
    },
    methods: {
        addNote($event) {
            this.notes.push($event.note);
            this.timestamps.push($event.timestamp);
        }
    }
});